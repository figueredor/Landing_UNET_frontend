import useProfesores from "../hooks/useProfesores";
import ProfesoresPublicos from "./ProfesoresPublicos";

const MostrarProfesores = () => {

    const { profesores } = useProfesores()

  return (
    <>
    <section className=" grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
        { profesores.map( profesor => ( 
            <ProfesoresPublicos 
                key={profesor._id}
                profesor={profesor}
            />   
        ))}
        </section>
    
    </>
  )
}

export default MostrarProfesores