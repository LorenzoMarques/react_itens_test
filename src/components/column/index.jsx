import { ColumnContainer } from "./style";

const Column = ({ columnName, info }) => {
  return (
    <ColumnContainer columnName={columnName}>
      <h3>{columnName}</h3>
      {info.map((element) => (
        <p>{element}</p>
      ))}
    </ColumnContainer>
  );
};

export default Column;
