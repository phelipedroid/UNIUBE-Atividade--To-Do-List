import React, { useState } from "react";
import "./App.css";
const App = () => {
  //Estado para armazenamento da lista de tarefas.
  const [tarefas, setTarefas] = useState([]);
  //Estado para controle dos filtros.
  const [filtro, setFiltro] = useState("Todas");
  //Estado para armazenar o valor atual do campo.
  const [novaTarefa, setnovaTarefa] = useState("");
  //Criar uma função para adicionar uma nova tarefa na lista.
  const adicionarTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, { nome: novaTarefa, concluido: false }]);
      setnovaTarefa(""); //Limpar o campo de entrada de texto.
    }
  };
  //Alternar o status concluido de uma tarefa.
  const toggleConcluido = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluido = !novasTarefas[index].concluido;
    setTarefas(novasTarefas); //Atualiza a lista de tarefas.
  };

  //Filtrar as tarefas com base no filtro selecionado.
  const tarefasFiltrados = tarefas.filter((item) => {
    if (filtro === "concluidos") return item.concluido;
    if (filtro === "pendentes") return !item.concluido;
    return true;
  });
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {/*Campo de entrada para um novo item e botão de adição*/}
      <input
        value={novaTarefa}
        onChange={(e) => setnovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar tarefa</button>
      {/*Botões para os filtros*/}
      <div>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("concluidos")}>Concluídos</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
      </div>
      {/*Lista de tarefas*/}
      <ul>
        {tarefasFiltrados.map((item, index) => (
          <li key={index} className={item.concluido ? "completed" : ""}>
            <input
              type="checkbox"
              checked={item.concluido}
              onChange={() => toggleConcluido(index)}
            />
            {item.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
