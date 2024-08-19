import { Route, Routes } from "react-router-dom";
import { NotFound } from "@/core/components";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};
