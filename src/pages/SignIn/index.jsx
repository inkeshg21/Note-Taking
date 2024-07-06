import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';
import {
  Container,
  ContentContainer,
  BackgroundContainer,
  StyledInput,
} from './styles';
import bonecaoDoPosto from '../../assets/bonecao-do-posto.svg';
import { useAuth } from '../../hooks/auth';

const SignIn = () => {
  const [inputErrors, setInputErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      setInputErrors({});

      try {
        const schema = yup.object().shape({
          email: yup
            .string()
            .email('Formato de e-mail inválido')
            .required('E-mail obrigatório'),
          password: yup.string().required('Senha obrigatória'),
        });

        setLoading(prev => {
          if (!prev) {
            return true;
          }

          return prev;
        });

        const formValuesArray = new FormData(e.target).entries();

        const formValues = Array.from(formValuesArray).reduce(
          (prev, formEntryArray) => {
            prev[formEntryArray[0]] = formEntryArray[1]; //eslint-disable-line

            return prev;
          },
          {},
        );

        await schema.validate(formValues, {
          abortEarly: false,
        });

        await signIn(formValues);

        setLoading(false);

        toast.success('Login realizado com sucesso 🤘');

        history.push('/dashboard');
      } catch (err) {
        setLoading(prev => {
          if (prev) {
            return false;
          }

          return prev;
        });

        if (err instanceof yup.ValidationError) {
          const inputErrorsObject = err.inner.reduce((prev, error) => {
            prev[error.path] = !!error.message;

            if (error.message) {
              toast.error(error.message);
            }

            return prev;
          }, {});

          setInputErrors(prev => {
            const errorsObject = {};
            Object.assign(errorsObject, prev);
            Object.assign(errorsObject, inputErrorsObject);

            return errorsObject;
          });

          return;
        }

        toast.error('Credenciais inválidas, tente novamente.');
      }
    },
    [setInputErrors, signIn, history],
  );

  const handleFormChange = useCallback(
    e => {
      if (inputErrors && inputErrors[e.target.name]) {
        setInputErrors(prev => {
          const newState = { ...prev };
          newState[e.target.name] = false;
          return newState;
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
          <img src={bonecaoDoPosto} alt="Bonecão do posto" />
          <h2>Acesse de qualquer lugar</h2>
          <p>
            Você pode acessar suas anotações de qualquer lugar e a qualquer
            momento.
          </p>
        </BackgroundContainer>
        <ContentContainer>
          <Logo />

          <h2>Fazer login</h2>
          <p>
            Bem vindo! Se autentifique no sistema para criar e acessar suas
            notas.
          </p>

          {!loading && (
            <form onSubmit={handleSubmit} onChange={handleFormChange}>
              <StyledInput
                icon="FiUser"
                size={18}
                name="email"
                placeholder="E-mail"
                hasError={inputErrors.email}
              />
              <StyledInput
                icon="FiLock"
                size={18}
                type="password"
                name="password"
                placeholder="Senha"
                hasError={inputErrors.password}
              />

              <button type="submit">
                <span>Fazer Login</span>
                <FaLongArrowAltRight size={18} />
              </button>

              <span>
                Não possui uma conta?
                <Link to="/signup"> Crie uma conta.</Link>
              </span>
            </form>
          )}

          {loading && <Loading />}
        </ContentContainer>
      </Container>
    </>
  );
};

export default SignIn;
