import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaTrash,
} from "react-icons/fa";

import logo from "../../assets/logo-devconnect.png";
import defaultAvatar from "../../assets/avatar-default.svg";

import { api } from "../../services/api";

import {
  Container,
  Wrapper,
  Logo,
  SearchContainer,
  Input,
  IconButton,
  Menu,
  UserAvatar,
  MobileIcon,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerItem,
  LoginButton,
  RightMenu,
} from "./styles";

const Header = ({
  variant = "feed",
  search = "",
  setSearch = () => {},
}) => {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const closeDrawerAndNavigate = (route) => {
    setDrawerOpen(false);
    navigate(route);
  };

  const handleSearch = () => {
    if (!search.trim()) return;

    console.log("Buscar:", search);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setDrawerOpen(false);
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    if (!loggedUser?.id) {
      alert("Não foi possível identificar o usuário.");
      return;
    }

    const confirmed = window.confirm(
      "Tem certeza de que deseja excluir sua conta? Essa ação não poderá ser desfeita."
    );

    if (!confirmed) return;

    try {
      await api.delete(`/users/${loggedUser.id}`);

      localStorage.removeItem("loggedUser");
      setDrawerOpen(false);

      alert("Conta excluída com sucesso.");
      navigate("/signup");
    } catch (error) {
      console.error("Erro ao excluir conta:", error);
      alert("Não foi possível excluir a conta.");
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo
            src={logo}
            alt="Logo da plataforma"
            onClick={() =>
              navigate(loggedUser ? "/feed" : "/")
            }
          />

          {variant === "feed" && (
            <>
              <SearchContainer>
                <Input
                  placeholder="Pesquisar..."
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />

                <IconButton
                  type="button"
                  onClick={handleSearch}
                  aria-label="Pesquisar"
                >
                  <FaSearch />
                </IconButton>
              </SearchContainer>
           <RightMenu>
  <UserAvatar
    src={loggedUser?.avatar || defaultAvatar}
    alt={loggedUser?.name || "Usuário"}
    onClick={() => navigate("/profile")}
  />

   <MobileIcon
    type="button"
    onClick={() => setDrawerOpen(true)}
    aria-label="Abrir menu"
    title="Menu"
  >
    <FaBars />
  </MobileIcon>
</RightMenu>
 </>
)}

          {variant === "home" && (
            <Menu>
              <LoginButton onClick={() => navigate("/login")}>
                Entrar
              </LoginButton>
            </Menu>
          )}
        </Wrapper>
      </Container>

      {variant === "feed" && drawerOpen && (
        <DrawerOverlay
          onClick={() => setDrawerOpen(false)}
        >
          <Drawer onClick={(event) => event.stopPropagation()}>
            <DrawerHeader>
              <h3>Menu</h3>
            </DrawerHeader>

            <DrawerItem
              onClick={() =>
                closeDrawerAndNavigate("/feed")
              }
            >
              <FaHome />
              <span>Feed</span>
            </DrawerItem>

            <DrawerItem
              onClick={() =>
                closeDrawerAndNavigate("/profile")
              }
            >
              <FaUser />
              <span>Perfil</span>
            </DrawerItem>

            <DrawerItem onClick={handleLogout}>
              <FaSignOutAlt />
              <span>Sair da conta</span>
            </DrawerItem>

            <DrawerItem
              onClick={handleDeleteAccount}
              style={{
                color: "#ff5c5c",
                fontWeight: "700",
              }}
            >
              <FaTrash />
              <span>Excluir conta</span>
            </DrawerItem>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};

export default Header;