import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { AuthHeader } from "../../components/AuthHeader";
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, Row, Wrapper } from './styles';


const Signup = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {

   if (!formData.name || !formData.email || !formData.senha) {
    alert('Preencha todos os campos');
    return;
}

if (formData.name.length < 3) {
    alert('O nome deve ter pelo menos 3 caracteres');
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(formData.email)) {
    alert('Digite um e-mail válido');
    return;
}

if (formData.senha.length < 6) {
    alert('A senha deve ter no mínimo 6 caracteres');
    return;
}

    try {
        const { data: existingUsers } = await api.get(
            `/users?email=${formData.email}`
        );


            if (existingUsers.length > 0) {
                alert('Este e-mail já está cadastrado')
                return
            }

         const { data: newUser } = await api.post('/users', {
    name: formData.name,
    email: formData.email,
    senha: formData.senha
});

if (newUser.id) {
    navigate('/login');
    return;
}
} catch (e) {
    console.error("Erro completo:", e);
    console.error("Response:", e.response);
    alert(`Erro: ${e.message}`);
}
    };
    return (<>
       
    <AuthHeader />
        <Container>
            <Column>
          <Title>
  Comece sua jornada na programação e desenvolva habilidades para conquistar novas oportunidades.
          </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Crie sua conta</TitleLogin>
                    <SubtitleLogin> Preencha seus dados para criar sua conta gratuitamente.</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome Completo" leftIcon={<MdPerson />} name="name" control={control} />
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar Conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText onClick={() => navigate('/login')}>Voltar ao login</EsqueciText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export default Signup;
