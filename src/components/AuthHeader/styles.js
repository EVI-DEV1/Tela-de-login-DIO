import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 80px;

    background: #151515;
    border-bottom: 1px solid #2C2C2C;

    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;
`;

export const Logo = styled.img`
    width: 105px;
    cursor: pointer;

    transition: .3s;

    &:hover{
        opacity:.8;
    }
`;

export const BackButton = styled.button`
     display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
    background:transparent;
    border:none;

    color:#BDBDBD;

    font-size:15px;
    font-weight:600;

    cursor:pointer;

    transition:.3s;

    svg{
        font-size:16px;
    }

    &:hover{
        color:#00E676;
    }
`;
