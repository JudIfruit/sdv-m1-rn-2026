import { createContext, FC, PropsWithChildren, useState } from "react";
import { getTodosOnDummyJson } from "../api/dummyJsonApi";
import { Todo } from "../api/dummyJsonApiTypes";

interface TodoContextProps {
  todos: Todo[];
  getTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  getTodos: async () => {},
  addTodo: async (title: string) => {},
});

export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const getTodos = async () => {
    const apiTodos = await getTodosOnDummyJson();
    if (apiTodos === null) {
      // TODO: handle error
    } else {
      setTodos(apiTodos.todos);
    }
  };
  const addTodo = async (title: string) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map((t) => t.id || 0)) + 1,
      todo: title,
      completed: false,
      userId: 5,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <TodoContext.Provider value={{ todos, getTodos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
