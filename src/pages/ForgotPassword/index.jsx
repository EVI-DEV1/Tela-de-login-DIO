import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, Row, Wrapper } from './styles';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        if (!formData.email || !formData.senha || !formData.confirmSenha) {
            alert('Preencha todos os campos');
            return;
        }

        if (formData.senha.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres');
            return;
        }

        if (formData.senha !== formData.confirmSenha) {
            alert('As senhas não coincidem');
            return;
        }

        try {
            const { data } = await api.get(`/users?email=${formData.email}`);

            if (!data.length) {
                alert('E-mail não cadastrado');
                return;
            }

            const user = data[0];
            await api.patch(`/users/${user.id}`, {
                senha: formData.senha,
            });

            alert('Senha atualizada com sucesso!');
            navigate('/login');
        } catch (e) {
            alert('Erro ao atualizar senha. Tente novamente.');
        }
    };

    return (
        <>
         
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Recupere sua senha</TitleLogin>
                        <SubtitleLogin>Digite seu e-mail e defina uma nova senha.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Nova senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatória</span>}
                            <Input type="password" placeholder="Confirmar nova senha" leftIcon={<MdLock />} name="confirmSenha" control={control} />
                            {errors.confirmSenha && <span>Confirmação de senha é obrigatória</span>}
                            <Button title="Redefinir senha" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText onClick={() => navigate('/login')}>Voltar ao login</EsqueciText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default ForgotPassword;
