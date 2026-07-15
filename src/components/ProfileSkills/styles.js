import styled from "styled-components";

export const Container = styled.div`
  margin-top: 28px;
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 14px;
  font-size: 22px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  padding: 0;
  margin: 0;

  list-style: none;
`;

export const Item = styled.li`
  background: #30294a;
  color: #00e676;

  padding: 9px 14px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 600;
`;