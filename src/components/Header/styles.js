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
;

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
  justify-content: center;
`;

export const UserAvatar = styled.img`
  width: 42px;
  height: 42px;

  border-radius: 50%;
  object-fit: cover;

  cursor: pointer;

  border: 2px solid #00e676;

  transition: .2s;

  &:hover{
    transform: scale(1.05);
  }
`;

export const MobileIcon = styled.button`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 18px;

  background: transparent;
  border: none;

  color: #ffffff;
  cursor: pointer;

  font-size: 22px;

  transition: .2s;

  &:hover{
    color: #00E676;
  }
`;

/* Drawer */

export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.65);

  z-index: 9998;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;
`;

export const DrawerHeader = styled.div`
  width: 100%;

  margin-bottom: 18px;
  padding-bottom: 14px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    margin: 0;
    color: #ffffff;
    font-size: 20px;
  }
`;

export const DrawerItem = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 12px;

  border: none;
  border-radius: 9px;

  background: transparent;
  color: #ffffff;

  cursor: pointer;

  text-align: left;
  font-size: 16px;

  transition: 0.2s;

  svg {
    flex-shrink: 0;
    font-size: 18px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
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
export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: 320px;
  max-width: 85vw;
  height: 100vh;

  padding: 28px 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;

  background: #171717;
  color: #ffffff;

  box-shadow: -8px 0 28px rgba(0, 0, 0, 0.45);

  z-index: 9999;

  @media (max-width: 600px) {
    width: 82vw;
    max-width: 320px;
    padding: 24px 18px;
  }
`;