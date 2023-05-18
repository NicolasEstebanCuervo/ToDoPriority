import React from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import { useTareaContext } from './FunctionContext';
import styled from '@emotion/styled'

const ContenedorListaDeTareas = styled.div`
  margin: 15px;
`

function ListaDeTareas() {
  const {
    manejarEnvioFnc,
    descripcion,
    cambioTimeFnc,
    titulo,
    hora,
    cambioDescripcionFnc,
    cambioTituloFnc,
    ponerHiddenFnc,
    hidden,
    tareas,
    eliminarTareaFnc,
    completarTareaFnc,
  } = useTareaContext();
  return (
    <div>
      <TareaFormulario 
        manejarEnvioFnc={manejarEnvioFnc} 
        descripcion={descripcion} 
        cambioTimeFnc={cambioTimeFnc} 
        titulo={titulo}
        hora={hora}
        cambioDescripcionFnc={cambioDescripcionFnc}
        cambioTituloFnc={cambioTituloFnc}
        ponerHiddenFnc={ponerHiddenFnc}
        hidden={hidden}
        />
      <ContenedorListaDeTareas hidden={!hidden}>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            descripcion={tarea.descripcion}
            titulo={tarea.titulo}
            time={tarea.time}
            completada={tarea.completada}
            completarTareaFnc={completarTareaFnc}
            eliminarTareaFnc={eliminarTareaFnc}
          />
        ))}
      </ContenedorListaDeTareas>
    </div>
  );
}

export default ListaDeTareas;
