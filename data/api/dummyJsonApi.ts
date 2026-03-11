import { GetTodosResponse } from "./dummyJsonApiTypes";

const TODOS_URL = "https://dummyjson.com/todos";

export const getTodosOnDummyJson =
  async (): Promise<GetTodosResponse | null> => {
    try {
      const response = await fetch(TODOS_URL, { method: "GET" });
      if (response.ok) {
        return (await response.json()) as GetTodosResponse;
      }
      throw new Error(`Could not get todos, status: ${response.status}`);
    } catch (e) {
      console.error("Something went wrong while getting todos on DummyJson", e);
    }
    return null;
  };
