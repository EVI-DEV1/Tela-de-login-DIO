import { useNavigate,  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { AuthHeader } from "../../components/AuthHeader";


import { useForm } from "react-hook-form";


import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
} from './styles';

const Login = () => {
 const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if (data.length && data[0].id) {

    localStorage.setItem(
        "loggedUser",
        JSON.stringify(data[0])
    );

    navigate("/feed");
    return;
    }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (
    <>
   <AuthHeader />
      <Container>
   
            <Column>
                <Title> Acesse sua conta para continuar aprendendo e acompanhar seu progresso.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Bem-vindo ao DevConnect</TitleLogin>
                <SubtitleLogin>  Entre com seu e-mail e senha para acessar sua conta.</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText onClick={() => navigate('/forgot-password')}> Esqueci minha senha</EsqueciText>
                    <CriarText onClick={() => navigate('/signup')}>Criar Conta</CriarText>
                </Row>
                
                </Wrapper>
            </Column>
            
        </Container>
    </>)
}

export default Login;