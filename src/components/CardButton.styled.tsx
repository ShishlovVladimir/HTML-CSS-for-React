import styled from "styled-components";

export const CardButton = styled.button`
  box-sizing: border-box;
  flex: 0 0 86px;
  font-weight: 700;
  font-size: 10px;
  padding: 5px 20px;
  line-height: 2;
  color: #4e71fe;
  background-color: transparent;
  border-radius: 5px;
  outline: solid 2px #4e71fe;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  transition: 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #4e71fe;
    box-shadow: none;
  }
`;
