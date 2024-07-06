import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import {
  Container,
  ContentContainer,
  BackgroundContainer,
  StyledInput,
} from './styles';
import bonecoesDoPosto from '../../assets/bonecoes-do-posto.svg';
import Logo from '../../components/Logo';
import api from '../../services/api';

const SignUp = () => {
  const [inputErrors, setInputErrors] = useState({});
  const history = useHistory();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      try {
        const schema = yup.object().shape({
          username: yup.string().required('Nome de usuário obrigatório'),
          email: yup
            .string()
            .email('Formato de e-mail inválido')
            .required('E-mail obrigatório'),
          password: yup
            .string()
            .min(6, 'A senha deve possuir 6 caracteres ou mais'),
        });

        const formValuesArray = new FormData(e.target).entries();

        const formValues = Array.from(formValuesArray).reduce(
          (prev, formEntryArray) => {
            prev[formEntryArray[0]] = formEntryArray[1]; //eslint-disable-line

            return prev;
          },
          {},
        );

        await schema.validate(formValues, { abortEarly: false });

        await api.post('/users', formValues);

        toast.success(
          'Novo usuário criado com sucesso, você já pode fazer login 😉',
        );

        history.push('/');
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          const inputErrorsObject = err.inner.reduce((prev, error) => {
            prev[error.path] = !!error.message;

            if (error.message) {
              toast.error(error.message);
            }

            return prev;
          }, {});

          setInputErrors(prev => {
            const newValue = { ...prev, ...inputErrorsObject };

            return newValue;
          });
          return;
        }

        if (
          err instanceof Object &&
          err.response &&
          err.response.status === 400
        ) {
          toast.error('Email já cadastrado');
          return;
        }

        toast.error('Erro interno do servidor. Tente novamente mais tarde.');
      }
    },
    [setInputErrors],
  );

  const handleFormChange = useCallback(
    e => {
      if (inputErrors && inputErrors[e.target.name]) {
        setInputErrors(prev => {
          const newObj = { ...prev };
          newObj[e.target.name] = false;
          return newObj;
        });

        e.target.blur();
        e.target.focus();
      }
    },
    [inputErrors],
  );

  return (
    <>
      <Container>
        <BackgroundContainer>
          <h2>Deixe o DevPad lembrar por você!</h2>
          <p>
            Nunca mais perca conteúdos, ideias ou links interessantes, salve
            tudo e recupere quando você quiser.
          </p>
          <img src={bonecoesDoPosto} alt="Bonecões do poxto" />
        </BackgroundContainer>
        <ContentContainer>
          <Logo />
          <h2>Registrar-se</h2>
          <p>
            Bem vindo! Se autentifique no sistema para criar e acessar suas
            notas.
          </p>

          <form onSubmit={handleSubmit} onChange={handleFormChange}>
            <StyledInput
              icon="FiUser"
              color="#D0D0D0"
              name="username"
              placeholder="Nome de usuário"
              hasError={inputErrors.username}
            />
            <StyledInput
              icon="FiMail"
              color="#D0D0D0"
              name="email"
              placeholder="Endereço de e-mail"
              hasError={inputErrors.email}
            />
            <StyledInput
              icon="FiLock"
              color="#D0D0D0"
              name="password"
              type="password"
              placeholder="Senha"
              hasError={inputErrors.password}
            />

            <button type="submit">Criar conta</button>
          </form>

          <span>
            Já possui uma conta?
            <Link to="/"> Fazer login</Link>
          </span>
        </ContentContainer>
      </Container>
    </>
  );
};

export default SignUp;
