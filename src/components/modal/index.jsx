import api from "../../services/api";
import { Button, CloseButton, Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import attItens from "../../services/attItens";

const Modal = ({ setShowModal, setItens }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const postItem = (data) => {
    api.post("itens/", data).then((res) => {
      attItens(setItens);
    });

    setShowModal(false);
  };
  return (
    <Form action="" onSubmit={handleSubmit(postItem)}>
      <CloseButton
        type="button"
        onClick={() => {
          setShowModal(false);
        }}
      >
        X
      </CloseButton>
      {errors.name && <span className="error">{errors.name.message}</span>}{" "}
      <input type="text" placeholder="nome do item" {...register("name")} />
      <Button>Adicionar</Button>
    </Form>
  );
};

export default Modal;
