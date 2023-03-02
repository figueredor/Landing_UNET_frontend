import { useContext } from "react";
import AspirantesContext from "../context/AspirantesProvider";

const useAspirantes = () => {
    return useContext(AspirantesContext);
}

export default useAspirantes;