import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;

  background: #211c33;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 18px 20px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  color: #00e676;

  svg {
    font-size: 20px;
  }
`;

export const Title = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 18px;
  font-weight: 800;
`;

export const Messages = styled.div`
  height: 360px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  overflow-y: auto;

  padding: 18px;

  scrollbar-width: thin;
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  flex-shrink: 0;

  border-radius: 50%;
  border: 2px solid #00e676;

  object-fit: cover;
`;

export const MessageContent = styled.div`
  min-width: 0;
  flex: 1;

  padding: 10px 12px;

  border-radius: 0 12px 12px 12px;

  background: rgba(255, 255, 255, 0.05);
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  margin-bottom: 5px;
`;

export const UserName = styled.strong`
  overflow: hidden;

  color: #ffffff;

  font-size: 13px;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Time = styled.span`
  flex-shrink: 0;

  color: #85808f;

  font-size: 11px;
`;

export const Text = styled.p`
  margin: 0;

  color: #d3d0da;

  font-size: 13px;
  line-height: 1.45;

  overflow-wrap: anywhere;
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;

  padding: 14px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Input = styled.input`
  min-width: 0;
  flex: 1;

  padding: 11px 13px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;

  background: #17131f;
  color: #ffffff;

  outline: none;

  &::placeholder {
    color: #85808f;
  }

  &:focus {
    border-color: #00e676;
  }
`;

export const SendButton = styled.button`
  width: 42px;
  height: 42px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 9px;

  background: #00e676;
  color: #17131f;

  cursor: pointer;

  svg {
    font-size: 18px;
  }

  &:hover {
    filter: brightness(1.08);
  }
`;

export const EmptyMessage = styled.p`
  margin: auto;

  color: #85808f;

  font-size: 13px;
  line-height: 1.5;
  text-align: center;
`;