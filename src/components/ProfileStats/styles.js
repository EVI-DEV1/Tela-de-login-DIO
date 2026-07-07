import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin: 24px 0;
`;

export const Card = styled.div`
  background: #211C33;
  border-radius: 18px;
  padding: 16px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08);
`;

export const Value = styled.h3`
  color: #00E676;
  font-size: 22px;
  margin-bottom: 6px;
`;

export const Label = styled.p`
  color: #c8c8c8;
  font-size: 13px;
`;
