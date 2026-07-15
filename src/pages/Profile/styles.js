import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 20px;
`;

export const Cover = styled.div`
  height: 280px;
  border-radius: 20px;

  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`;

export const Avatar = styled.img`
  width: 180px;
  height: 180px;

  border-radius: 50%;

  margin: -90px auto 20px;

  display: block;

  border: 6px solid #161b22;

  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  text-align: center;
`;

export const Name = styled.h1`
  color: white;
`;

export const Bio = styled.p`
  color: #AAA;
  margin-top: 10px;
`;

export const Button = styled.button`
  margin-top: 20px;
`;

export const Stats = styled.div`
  margin-top: 40px;

  display: grid;

  grid-template-columns: repeat(4,1fr);

  gap:20px;
`;

export const StatCard = styled.div`
  background:#1E1E2E;

  padding:30px;

  border-radius:16px;

  text-align:center;

  color:white;
`;
export const ProfileContentCard = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 8px auto 0;

  background: #202024;
  border: 1px solid #2f2f35;
  border-radius: 18px;

  padding: 28px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;