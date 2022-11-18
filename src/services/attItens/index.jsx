import api from "../api";

const attItens = (setItens) => {
  api.get("itens/").then((res) => {
    setItens(res.data);
  });
};

export default attItens;
