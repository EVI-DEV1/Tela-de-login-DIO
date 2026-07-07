import {
    Container,
    Cover,
    Avatar,
    Info,
    Name,
    Bio
} from "./styles";

export function ProfileHeader(){

    return(

        <Container>

            <Cover />

            <Avatar
                src="https://i.pravatar.cc/200"
            />

            <Info>

                <Name>
                    João Silva
                </Name>

                <Bio>
                    Desenvolvedor Full Stack apaixonado por React e Node.js 🚀
                </Bio>

            </Info>

        </Container>

    )

}