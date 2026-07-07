import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    gap: 40px;

    padding: 120px 20px 40px;

    align-items: flex-start;

    @media (max-width:768px){
        flex-direction: column;
        gap: 30px;

        padding: 150px 15px 30px;
    }
`;

export const Title = styled.h1`
   font-size:48px;
line-height:56px;

@media(max-width:768px){
    font-size:34px;
    line-height:42px;
}
`;



export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right:24px;

    &:last-child{
    position: sticky;
    top:110px;
    align-self:flex-start;
}

@media(max-width:768px){
    &:last-child{
        position:static;
        width:100%;
    }
}
`;

export const TextContent = styled.p`
    font-size:18px;
    line-height:30px;
    color:#CFCFCF;
    max-width:520px;
    margin-bottom:32px;

    @media (max-width:768px){
        max-width:100%;
        font-size:16px;
        line-height:26px;
    }
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

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`;
