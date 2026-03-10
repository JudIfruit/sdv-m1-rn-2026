import { createContext, FC, PropsWithChildren, useState } from "react";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

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
    setTodos([
      { id: 1, title: "Apprendre React", completed: true },
      { id: 2, title: "Apprendre React Native", completed: false },
    ]);
  };
  const addTodo = async (title: string) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map((t) => t.id || 0)) + 1,
      title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <TodoContext.Provider value={{ todos, getTodos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
