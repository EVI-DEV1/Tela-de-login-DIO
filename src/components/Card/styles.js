import styled from 'styled-components';


export const CardContainer = styled.div`
    width: 100%;
    overflow: hidden;

    background: #211C33;

    border-radius: 22px;

    border: 1px solid rgba(255,255,255,.05);

    margin-bottom: 32px;

    transition: all .35s ease;

    box-shadow: 0 10px 25px rgba(0,0,0,.25);

    &:hover{
        transform: translateY(-8px);
        box-shadow: 0 25px 45px rgba(0,0,0,.45);
        border-color:#00E676;
    }
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 26px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

   h4{
    font-size:18px;
    font-weight:700;
    color:#FFF;
}

p{
    font-size:13px;
    color:#9FA8B7;
}
`
export const UserPicture = styled.img`
    width: 54px;
    height: 54px;

    border-radius:50%;

    border:3px solid #00E676;

    object-fit:cover;
`;

export const PostInfo = styled.div`
    margin-top:18px;
    margin-bottom:20px;

    h4{
        font-size:26px;
        font-weight:700;
        color:#FFF;
        margin-bottom:12px;
        line-height:36px;
    }

    p{
        color:#C8C8C8;
        line-height:28px;
        font-size:16px;
    }

    strong{
        color:#00E676;
        cursor:pointer;
    }
`;

export const HasInfo = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:20px;

    span{
        background:#30294A;
        color:#00E676;

        padding:9px 18px;

        border-radius:40px;

        font-size:13px;

        font-weight:600;

        transition:.3s;
    }

    span:hover{
        background:#00E676;
        color:#211C33;
    }
`;

export const Actions = styled.div`
    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-top:25px;

    padding-top:18px;

    border-top:1px solid rgba(255,255,255,.08);

    button{

        display:flex;

        align-items:center;

        gap:8px;

        background:none;

        border:none;

        color:#B8B8B8;

        cursor:pointer;

        transition:.3s;

        font-size:15px;

    }

    button:hover{

        color:#00E676;

        transform:scale(1.08);

    }

    svg{
        font-size:18px;
    }
`;