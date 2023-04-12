import { useState } from "react";
import { IsModalContext } from "./isModalContext";

export type StateProps = {
  children: React.ReactNode;
};

export const IsModalState: React.FC<StateProps> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [projectId, setProjectId] = useState("");

  return (
    <IsModalContext.Provider
      value={{ isModal, setIsModal, projectId, setProjectId }}
    >
      {children}
    </IsModalContext.Provider>
  );
};
