import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import logo from "../../assets/logo-dio.png";

import {
    Header,
    Container,
    Logo,
    BackButton
} from "./styles";

const AuthHeader = () => {

    const navigate = useNavigate();

    return (
        <Header>
            <Container>

                <Logo
                    src={logo}
                    alt="Logo"
                    onClick={() => navigate("/")}
                />

                <BackButton onClick={() => navigate("/")}>
                    <FaArrowLeft />
                    Inicio
                    
                </BackButton>

            </Container>
        </Header>
    );
}

export { AuthHeader };