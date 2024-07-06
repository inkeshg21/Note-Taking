import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 90%;
  min-height: 200px;

  position: relative;

  margin: 16px;
  padding: 40px 16px;

  background: #fff;
  box-shadow: 1px 1px 30px #ccc;
  border-radius: 20px;

  cursor: pointer;
  user-select: none;

  &::after {
    content: "";
    width: 45px;
    height: 80%;
    background: ${(props) =>
      props.colors &&
      `linear-gradient(#${props.colors[0]},#${props.colors[1]})`};
    border-radius: 30px;
    position: absolute;
    left: -10px;
    align-self: center;

    z-index: -1;
  }

  @media (max-width: 900px) {
    padding: 24px 16px;
    min-height: 130px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  align-self: start;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
`;

export const NoteTitle = styled.p`
  display: flex;

  max-width: 100%;

  color: #333;
  font-size: 20px;
  margin-left: 8px;
  font-weight: 700;

  overflow: hidden;
`;

export const QuickEditButton = styled.div`
  background: #fff;
  width: 25px;
  height: 25px;

  position: relative;
  align-self: start;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

export const StyledTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #${(props) => props.color};
  border-radius: 50px;

  padding: 8px 24px;

  margin: 8px;

  cursor: default;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    color: #fff;
  }
`;
