import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 35px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  width: 400px;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: auto;
    flex: 1;
    margin: 0 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 36px;
  }
`;

export const IconButton = styled.button`
  background: #f50;
  border: none;
  color: white;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 0 6px 6px 0;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;;

export const UserAvatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Drawer */

export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

export const Drawer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background: #1a1a1a;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DrawerHeader = styled.div`
  color: white;
  margin-bottom: 10px;
`;

export const DrawerItem = styled.button`
  background: transparent;
  border: none;
  color: white;
  text-align: left;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #f50;
  }
`;

export const LoginButton = styled.button`
  width: 180px;
  height: 42px;

  border: 1px solid #E4105D;
  border-radius: 24px;

  background: transparent;
  color: #FFFFFF;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;

  transition: .3s;

  &:hover {
    background: #E4105D;
  }
`;