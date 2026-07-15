import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,.85);

    display:flex;
    justify-content:center;
    align-items:center;

    z-index:9999;
`;

export const Image = styled.img`
    max-width:90%;
    max-height:90%;

    border-radius:12px;
`;

export const CloseButton = styled.button`
    position:absolute;

    top:25px;
    right:25px;

    width:42px;
    height:42px;

    border:none;

    border-radius:50%;

    background:#8257e5;

    color:white;

    font-size:18px;

    cursor:pointer;
`;