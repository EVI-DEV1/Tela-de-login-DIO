import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,.75);

    display:flex;
    justify-content:center;
    align-items:center;

    z-index:999;
`;

export const Modal = styled.div`
    width:90%;
    max-width:550px;

    background:#1b1b1b;

    border-radius:16px;

    padding:30px;
`;

export const Title = styled.h2`
    color:#fff;
    margin-bottom:25px;
`;

export const Form = styled.div`
    display:flex;
    flex-direction:column;
    gap:18px;
`;

export const Input = styled.input`
    background:#2a2a2a;

    border:none;

    color:white;

    padding:14px;

    border-radius:10px;

    outline:none;
`;

export const TextArea = styled.textarea`
    background:#2a2a2a;

    border:none;

    color:white;

    padding:14px;

    border-radius:10px;

    min-height:120px;

    resize:none;

    outline:none;
`;

export const Buttons = styled.div`
    margin-top:25px;

    display:flex;

    justify-content:flex-end;

    gap:15px;
`;

export const CancelButton = styled.button`
    background:transparent;

    color:white;

    border:1px solid #555;

    padding:12px 24px;

    border-radius:8px;

    cursor:pointer;
`;

export const SaveButton = styled.button`
    background:#6f00ff;

    color:white;

    border:none;

    padding:12px 24px;

    border-radius:8px;

    cursor:pointer;

    font-weight:bold;

    &:hover{
        background:#8a2cff;
    }
`;