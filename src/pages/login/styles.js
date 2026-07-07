import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 80px auto;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 420px;

    background: #1A1A1A;
    border: 1px solid #2C2C2C;
    border-radius: 18px;

    padding: 40px;

    box-shadow: 0 10px 40px rgba(0,0,0,.35);

    transition: .3s;

    &:hover{
        border-color:#00E676;
    }
`;

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:25px;
`;



export const Title = styled.h2`
    color:#FFF;
    font-size:52px;
    font-weight:700;
    line-height:60px;

    span{
        color:#BDBDBD;
        font-size:22px;
        font-weight:400;
    }

    @media(max-width:900px){
        font-size:40px;
        line-height:48px;
    }
`;

export const TitleLogin = styled.h2`
    color:#FFF;
    font-size:34px;
    margin-bottom:12px;
`;

export const SubtitleLogin = styled.p`
    color:#AFAFAF;
    font-size:16px;
    margin-bottom:30px;
`;


export const EsqueciText = styled.p`
    color:#BDBDBD;
    cursor:pointer;
    transition:.3s;

    &:hover{
        color:#00E676;
    }
`; 

export const CriarText = styled.p`
    color:#00E676;
    font-weight:700;
    cursor:pointer;
    transition:.3s;

    &:hover{
        transform:translateY(-2px);
    }
`;
export const HeaderLogin = styled.header`
    width: 100%;
    height: 70px;
    background: #151515;
    border-bottom: 1px solid #2C2C2C;

    display: flex;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 110px;
    cursor: pointer;
    transition: .3s;

    &:hover{
        opacity: .8;
    }
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    background: transparent;
    border: none;

    color: #BDBDBD;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
    transition: .3s;

    svg{
        font-size: 16px;
    }

    &:hover{
        color:#00E676;
    }
`;

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
`;