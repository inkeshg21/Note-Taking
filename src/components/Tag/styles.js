import styled, { css } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  border: 3px solid #${(props) => props.color};
  border-radius: 50px;

  padding: 6px 20px;

  margin: 8px;

  font-family: "Roboto";

  user-select: none;

  ${(props) =>
    props.isSelected &&
    css`
      background: #${(containerProps) => containerProps.color};
    `}

  > span {
    color: #${(props) => props.color};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;

    ${(props) =>
      props.isSelected &&
      css`
        color: #fff;
      `}
  }
`;
