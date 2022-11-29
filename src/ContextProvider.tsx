import { createContext, FC, ReactElement, useState } from "react";

interface ContextState {
    username: string;
    setUsername: (username: string) => void;
    points: number;
    setPoints: (points: number) => void;
  }

  interface ContextProviderProps {
    children: ReactElement;
  }

const defaultContextValue = {} as ContextState;
export const Context = createContext(defaultContextValue);

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(0);

  return (
    <Context.Provider
      value={{
        username,
        setUsername,
        points,
        setPoints
      }}
    >
      {children}
    </Context.Provider>
  );
};
