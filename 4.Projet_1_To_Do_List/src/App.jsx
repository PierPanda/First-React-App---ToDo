import * as React from "react";
import { nanoid } from "nanoid";
import ListItem from "./components/ListItem.jsx";

function App() {
  const [todoList, setTodoList] = React.useState([
    // { id: nanoid(8), content: "item 1" },
    // { id: nanoid(8), content: "item 2" },
    // { id: nanoid(8), content: "item 3" },
  ]);

  const [todo, setTodo] = React.useState("");

  const [showValidation, setShowValidation] = React.useState(false);

  // Charger la todolist depuis le localStorage au montage du composant
  React.useEffect(() => {
    const storedList = localStorage.getItem("todoList");
    if (storedList) {
      setTodoList(JSON.parse(storedList));
    }
  }, []);

  // Sauvegarder la todolist dans le localStorage à chaque modification
  React.useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      setShowValidation(true);
      return;
    }
    setTodoList([...todoList, { id: nanoid(8), content: todo }]);
    setTodo("");
    setShowValidation(false);
  }

  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-8xl font-bold text-center text-slate-100 mb-32">
          To Do List
        </h1>
        <form onSubmit={handleSubmit} className="flex gap-2 h-12">
          <input
            type="text"
            name="todo-input"
            id="todo-input"
            placeholder="Ajouter une chose à faire
"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="mt-1 block bg-slate-50 w-full rounded p-2"
          />
          <button
            type="submit"
            name="todo-btn"
            id="todo-input"
            className={`mt-1 rounded bg-slate-400 py-2 px-4 cursor-pointer`}
          >
            +
          </button>
        </form>
        {showValidation && (
          <p className="text-red-500 text-sm">
            Le champ est vide, veuillez saisir quelque chose.
          </p>
        )}
        <ul className="mt-10 p-2 border-2 border-slate-800 rounded-lg ">
          {todoList.length === 0 && (
            <p className="text-white text-center">
              👍 Vous n&apos;avez plus rien à faire.
            </p>
          )}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListItem key={item.id} itemData={item} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
