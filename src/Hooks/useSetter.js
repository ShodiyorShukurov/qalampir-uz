import { useContext } from "react";
import { Context } from "../Context";

export const useSetter = (isSetterOnly = false) => {
  const { state, dispatch } = useContext(Context);
  return isSetterOnly ? [dispatch] : [state, dispatch];
};
