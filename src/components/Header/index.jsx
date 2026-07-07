import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import {LoginButton} from "./styles";
import logo from "../../assets/logo-dio.png";

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
} from "./styles";

const Header = ({
  variant = "feed",
  search = "",
  setSearch = () => {},
}) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearch = () => {
    if (search.trim()) {
      console.log("Buscar:", search);
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Logo
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />

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
                  src="https://i.pravatar.cc/40"
                  alt="user"
                  onClick={() => setDrawerOpen(true)}
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

            <DrawerItem onClick={() => navigate("/")}>
              Feed
            </DrawerItem>

            <DrawerItem onClick={() => navigate("/profile")}>
              Perfil
            </DrawerItem>

            <DrawerItem onClick={() => navigate("/settings")}>
              Configurações
            </DrawerItem>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};

export default Header;