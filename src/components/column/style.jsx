import styled from "styled-components";

export const ColumnContainer = styled.div`
  min-height: 250px;
  margin-right: 2px;
  background-color: #acacac;
  width: ${(props) =>
    props.columnName === "ID"
      ? "100px"
      : props.columnName === "Nome do item"
      ? "300px"
      : "170px"};

  h3 {
    color: white;
    background-color: #4040ee;
    width: 100%;
    margin-top: 0px;
  }

  p {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #6e6e6e;
    padding-bottom: 10px;
  }
`;
