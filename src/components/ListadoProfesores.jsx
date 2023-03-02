import useProfesores from '../hooks/useProfesores';
import Profesores from './Profesores';


const ListadoProfesores = () => {

  const { profesores } = useProfesores();

  return (
    <>
      { profesores.length ? (
        <>
          <h2 className="font-black text-3 text-center text-3xl text-white">Administra tus {''} <span className="text-lime-400 font-bold"> Profesores</span></h2>
          
          { profesores.map( profesor => (
            <Profesores 
              key={profesor._id}
              profesor={profesor}
            />
          ))}
        </>
      ) : 
      (
        <>
          <h2 className="font-black text-3 text-center text-white">No hay profesores</h2>
        </>
      )}
    </>
  )
}

export default ListadoProfesores