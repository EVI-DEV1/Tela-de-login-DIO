import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);

  display:flex;
  justify-content:center;
  align-items:center;

  z-index:9999;
`;

export const Menu = styled.div`
  width:320px;

  background:#202024;

  border-radius:14px;

  overflow:hidden;
`;

export const Item = styled.button`
  width:100%;

  display:flex;
  align-items:center;
  gap:14px;

  padding:18px;

  border:none;

  background:none;

  color:white;

  cursor:pointer;

  font-size:16px;

  &:hover{
    background:#2f3136;
  }
`;

export const CancelButton = styled.button`
  width:100%;

  padding:18px;

  border:none;

  background:#8257e5;

  color:white;

  font-weight:bold;

  cursor:pointer;

  &:hover{
    opacity:.9;
  }
`;