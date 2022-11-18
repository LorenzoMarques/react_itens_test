import { useState } from "react";
import "./App.css";
import Itens from "./components/itens";
import Modal from "./components/modal";
import { useEffect } from "react";
import api from "./services/api";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    api.get("itens/").then((res) => {
      setItens(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        {showModal && <Modal setShowModal={setShowModal} setItens={setItens} />}
        <button
          onClick={() => setShowModal(!showModal)}
          className="newItemButton"
        >
          + Novo item
        </button>
        <Itens itens={itens} />
      </div>
    </div>
  );
}

export default App;
