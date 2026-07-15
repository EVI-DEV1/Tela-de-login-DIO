import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #141414;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 700px;
  background: #202024;
  border-radius: 16px;
  padding: 30px;
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: none;
  background: #2d2d30;
  color: white;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: #2d2d30;
  color: white;
  resize: none;
  margin-bottom: 20px;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #8257e5;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;