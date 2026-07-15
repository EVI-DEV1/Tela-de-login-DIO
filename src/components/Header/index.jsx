import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";

import logo from "../../assets/logo-dio.png";
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
} from "./styles";

const Header = ({ variant = "feed", search = "", setSearch = () => {} }) => {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  const handleSearch = () => {
    if (search.trim()) {
      console.log("Buscar:", search);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir sua conta? Essa ação não poderá ser desfeita."
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/users/${loggedUser.id}`);

      localStorage.removeItem("loggedUser");

      alert("Conta excluída com sucesso.");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir conta.");
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={logo} alt="logo" onClick={() => navigate("/")} />

          {variant === "feed" && (
            <>
              <SearchContainer>
                <Input
                  placeholder="Pesquisar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <IconButton onClick={handleSearch}>
                  <FaSearch />
                </IconButton>
              </SearchContainer>

              <Menu>
                <UserAvatar
                  src={loggedUser?.avatar || "https://i.pravatar.cc/40"}
                  alt={loggedUser?.name || "user"}
                  onClick={() => navigate("/profile")}
                />
              </Menu>

              <MobileIcon onClick={() => setDrawerOpen(true)}>
                <FaBars />
              </MobileIcon>
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
        <DrawerOverlay onClick={() => setDrawerOpen(false)}>
          <Drawer onClick={(e) => e.stopPropagation()}>
            <DrawerHeader>
              <h3>Menu</h3>
            </DrawerHeader>

            <DrawerItem onClick={() => navigate("/feed")}>Feed</DrawerItem>

            <DrawerItem onClick={() => navigate("/profile")}>
              Perfil
            </DrawerItem>

            <DrawerItem onClick={() => navigate("/settings")}>
              Configurações
            </DrawerItem>

            <DrawerItem onClick={handleLogout}>Sair da conta</DrawerItem>

            <DrawerItem
              onClick={handleDeleteAccount}
              style={{
                color: "#ff5c5c",
                fontWeight: "bold",
              }}
            >
              Excluir conta
            </DrawerItem>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};

export default Header;