import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: flex-start;
  gap: 36px;

  margin: 0 auto;
  padding: 110px 20px 50px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: 125px;
  }

  @media (max-width: 600px) {
    padding: 115px 12px 35px;
  }
`;

export const Column = styled.section`
  min-width: 0;
  flex: ${({ flex }) => flex || 1};

  &:last-child {
    position: sticky;
    top: 100px;
  }

  @media (max-width: 900px) {
    width: 100%;

    &:last-child {
      position: static;
    }
  }
`;

export const FeedHeader = styled.header`
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: #ffffff;

  font-size: 38px;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  max-width: 650px;

  margin-top: 8px;

  color: #a7a5af;

  font-size: 16px;
  line-height: 1.6;
`;

export const EmptyState = styled.div`
  width: 100%;

  padding: 42px 24px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;

  background: #211c33;
  color: #c8c8c8;

  text-align: center;
`;


export const AdminMessage = styled.div`
  width: 100%;

  margin: 8px 0 22px;
  padding: 14px 18px;

  border: 1px solid rgba(111, 0, 255, 0.35);
  border-radius: 12px;

  background: rgba(111, 0, 255, 0.08);
  color: #b9b5c5;

  font-size: 14px;
  line-height: 1.5;
`;