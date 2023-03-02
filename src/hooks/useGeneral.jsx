import { useContext } from "react";
import GeneralContext from "../context/GeneralProdiver";

const useGeneral = () => {
    return useContext(GeneralContext);
}

export default useGeneral;