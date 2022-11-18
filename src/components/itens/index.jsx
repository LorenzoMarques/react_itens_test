import Column from "../column";
import { ItensContainer } from "./style";

const Itens = ({ itens }) => {
  const formatDate = (date) => {
    const data = new Date(date);

    const formattedDate =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    return formattedDate;
  };

  return (
    <ItensContainer>
      <Column columnName={"ID"} info={itens.map((element) => element.id)} />
      <Column
        columnName={"Nome do item"}
        info={itens.map((element) => element.name)}
      />
      <Column
        columnName={"Data de criação"}
        info={itens.map((element) => formatDate(element.created_at))}
      />
    </ItensContainer>
  );
};

export default Itens;
