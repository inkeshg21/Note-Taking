import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../components/Tag";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: start;
`;

export const ContentContainer = styled.div`
  width: 50%;

  margin: 80px auto;

  @media (max-width: 900px) {
    width: 80%;

    margin-top: 30px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 60px;

  > h1 {
    color: #8d8e8e;
    margin-bottom: 30px;
  }

  @media (max-width: 900px) {
    margin-bottom: 30px;

    > h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
`;

export const StyledTag = styled(Tag)`
  @media (max-width: 900px) {
    border-width: 2px;
    > span {
      font-size: 12px;
    }
  }
`;

export const TagsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NullContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;

  > h3 {
    color: #aeafaf;
    font-size: 32px;

    margin: 24px 0;
  }

  > p {
    color: #aeafaf;
    font-size: 20px;

    max-width: 70%;
  }
`;

export const Panel = styled.div`
  margin-top: 60px;

  display: flex;
  flex-direction: column;

  > h1 {
    color: #8d8e8e;
    margin-bottom: 30px;
  }

  @media (max-width: 900px) {
    margin-top: 30px;

    > h1 {
      font-size: 24px;
    }
  }
`;

export const ActionsPanel = styled.div`
  display: flex;

  width: 80%;

  > button > span {
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 700;
  }

  > button + button {
    margin-left: 16px;
  }

  > button + a {
    margin-left: 16px;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    width: 100%;

    > button:nth-child(1) {
      margin-top: 16px;
    }

    > button:nth-child(2) {
      order: -2;
      margin-left: 0;
    }

    > a:nth-child(3) {
      order: -1;
      margin-left: 8px;
    }

    > button > span {
      font-size: 12px;
    }
  }
`;

export const CancelButton = styled.button`
  background: #bbb;
  padding: 12px 20px;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  background: #f65757;
  padding: 12px 20px;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditButton = styled(Link)`
  background: #557dac;
  padding: 12px 20px;

  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    > span {
      font-size: 12px;
    }
  }
`;
