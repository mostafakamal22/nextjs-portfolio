import { createContext } from "react";

export type IsModalContextType = {
  isModal: boolean;
  projectId: string;
  setProjectId: React.Dispatch<React.SetStateAction<string>>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const IsModalContext = createContext<IsModalContextType | null>(null);
