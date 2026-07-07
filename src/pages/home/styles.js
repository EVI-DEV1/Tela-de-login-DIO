import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 14400px;
    margin: 0 auto;
    padding: 40px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 40px;
    }
`;

export const TextContent = styled.p`
    font-size:18px;
    line-height:30px;
    color:#CFCFCF;
    max-width:520px;
    margin-bottom:32px;

    @media(max-width:768px){
        max-width:100%;
        font-size:16px;
    }
`;

export const TitleHighlight = styled.span`
    color: #00E676;
`;


export const TechContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:30px;

    @media(max-width:768px){
        justify-content:center;
    }
`;

export const Tech = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 10px 18px;

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;

    color: #FFFFFF;
    font-weight: 600;

    transition: 0.3s;

    svg {
        font-size: 24px;
    }

    &:hover {
        transform: translateY(-4px);
        border-color: #00E676;
        box-shadow: 0 0 15px rgba(0, 230, 118, 0.3);
    }
`;
export const StatsSection = styled.section`
    max-width:1200px;
    margin:15px auto;
    padding:0 20px;

    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:25px;

    @media(max-width:900px){
        grid-template-columns:repeat(2,1fr);
    }

    @media(max-width:600px){
        grid-template-columns:1fr;
    }
`;

export const StatCard = styled.div`
    background:#1A1A1A;
    padding:30px;
    border-radius:12px;
    border:1px solid #2C2C2C;
    text-align:center;
    transition:.3s;

    &:hover{
        transform:translateY(-6px);
        border-color:#00E676;
    }

    h2{
        color:#00E676;
        font-size:42px;
    }

    h3{
        color:#FFF;
        margin:10px 0;
    }

    p{
        color:#CFCFCF;
        line-height:24px;
    }
`;

export const Banner = styled.img`
    width:100%;
    max-width:520px;

    @media(max-width:768px){
        max-width:350px;
    }
`;
export const Title = styled.h1`
    font-size: 56px;
    font-weight: 700;
    line-height: 64px;
    color: #FFFFFF;
    margin-bottom: 24px;
`;