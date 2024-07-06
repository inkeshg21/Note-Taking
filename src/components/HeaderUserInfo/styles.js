import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin: 0 15px;

  @media (max-width: 900px) {
    margin: 16px 15px;
  }
`;

export const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-left: 8px;

  position: relative;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const NameCaption = styled.span`
  color: #666666;
  font-family: "Roboto";
  font-size: 16px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ShowOptionsButton = styled.button`
  width: 18px;
  height: 18px;
  background: #fff;
  box-shadow: 0 0 8px 1px #ccc;
  border-radius: 50%;

  position: absolute;
  top: 65%;
  left: 75%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
