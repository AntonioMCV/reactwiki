import Counter from "components/ReduxCounter/Counter";

const BasicoPage = () => {
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">Redux básico</h1>
      <p className="alert alert-secondary">
        Cada componente puede tener su propio estado que cambia con el tiempo,
        por ejemplo, el número de "Me gusta" en una publicación o la información
        del usuario.
        <br />
        <br />
        Sin embargo, cuando tu aplicación crece,{" "}
        <b>
          mantener un seguimiento de todos estos estados puede volverse
          complicado
        </b>
        . Aquí es donde <b>Redux</b> entra en juego para ayudarte:
        <br />
        <br />        
        <ul>
          <li>
            <b>Almacén (Store)</b>: Piensa en el almacén de Redux como un gran
            contenedor para todos los estados importantes de tu aplicación. Es
            como un lugar central donde guardas información relevante, como la
            información del usuario, las publicaciones, etc.
          </li>
          <li>
            <b>Acciones (Actions)</b>: Las acciones en Redux son como
            solicitudes para cambiar algo en tu almacén. Por ejemplo, si alguien
            hace clic en un botón "Me gusta", eso genera una "acción" para
            aumentar el contador de "Me gusta". Las acciones son pequeños
            objetos que describen qué sucedió.
          </li>
          <li>
            <b>Reductores (Reducers)</b>: Los reductores son como las personas
            encargadas de procesar esas acciones y hacer cambios en el almacén.
            Toman la acción y actualizan el estado en función de lo que debería
            cambiar. Por ejemplo, un reductor tomará la acción de "Aumentar Me
            gusta" y ajustará el número de Me gusta en el estado del almacén.{" "}
          </li>
          <li>
            <b>Despachar (Dispatch)</b>: Es como decirle a Redux que ocurrió
            algo y que debe manejarlo. Por ejemplo, cuando alguien hace clic en
            un botón, puedes "despachar" una acción, que luego será manejada por
            los reductores para actualizar el estado en el almacén.{" "}
          </li>
          <li>
            <b>Suscribirse (Subscribe)</b>: Puedes "suscribir" componentes
            específicos al almacén de Redux. Esto significa que esos componentes
            serán notificados cada vez que el estado en el almacén cambie. De
            esta manera, puedes actualizar automáticamente la interfaz de
            usuario para que coincida con el estado actual.{" "}
          </li>
        </ul>
        En resumen, Redux trabaja en conjunto con React para ayudarte a manejar
        el estado de tu aplicación de una manera más organizada y predecible. Te
        brinda una estructura clara para gestionar cambios en el estado, lo que
        es especialmente útil cuando tu aplicación se vuelve más grande y
        compleja.
        <br />
        <br />
        Para poder utilizarlo debemos:
        <ul>
          <li><b>Instalarnos</b> los paquetes npm <b>redux y react-redux</b></li>
          <li><b>Importar el Provider</b> Redux y <b>envolver los componentes</b>.</li>
          <li><b>Crear nuestra Store y pasarla como atributo en el componente Provider</b></li>
          <li><b>Usar useSelector, useDispatch</b> de react-redux en los componentes donde queramos cambiar el estado de Redux</li>
        </ul>
      </p>
      <Counter />
    </>
  );
};

export default BasicoPage;
