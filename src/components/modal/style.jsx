import styled from "styled-components";

export const Form = styled.form`
  background-color: #3b3bf6;
  width: 250px;
  height: 125px;
  border-radius: 15px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  input {
    border-radius: 10px;
    height: 25px;
    border: unset;
    padding-left: 10px;
  }
`;

export const CloseButton = styled.button`
  color: white;
  width: 25px;
  background-color: transparent;
  border: unset;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: unset;
  width: 125px;
  height: 25px;
`;
