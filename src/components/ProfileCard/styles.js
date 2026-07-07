import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const Cover = styled.div`
width:100%;
height:250px;
background:linear-gradient(90deg,#161b22,#0d1117,#22272e);
border-radius:20px;
`;

export const Avatar = styled.img`
width:170px;
height:170px;
border-radius:50%;
border:6px solid #161b22;
margin-top:-85px;
object-fit:cover;
`;

export const Info = styled.div`
text-align:center;
margin-top:20px;
`;

export const Name = styled.h1`
color:white;
`;

export const Bio = styled.p`
color:#AAA;
max-width:600px;
`;