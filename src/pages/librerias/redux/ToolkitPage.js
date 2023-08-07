import { useSelector } from "react-redux";

import CounterToolkit from "components/ReduxToolkit/CounterToolkit";
import Header from "components/ReduxToolkit/Header";
import Auth from "components/ReduxToolkit/Auth";
import UserProfile from "components/ReduxToolkit/UserProfile";

const ToolkitPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">
        Redux Toolkit
      </h1>
      <p className="alert alert-warning">
        Si el componente no funciona recuerda que para poder usar este
        componente es necesario <b>utilizar la store toolkit</b>, cambiando en{" "}
        <b>src\index.js</b> la linea 16{" "}
        <b>storeReduxbasic por storeReduxToolkit</b>.
      </p>
      <div className="alert alert-secondary">
        <p>
          Redux Toolkit es un conjunto de herramientas y utilidades diseñadas
          para hacer que el proceso de desarrollo con Redux sea más eficiente,
          más sencillo y menos propenso a errores. Fue creado por el mismo
          equipo que desarrolló Redux y está destinado a simplificar muchas de
          las tareas comunes que se realizan al configurar y administrar una
          tienda de Redux.
          <br />
          <br />
          Redux Toolkit ofrece varias características y beneficios que facilitan
          el desarrollo de aplicaciones utilizando Redux:
        </p>
        <ul>
          <li>
            <b>Configuración simplificada:</b> Redux Toolkit proporciona una
            función llamada configureStore() que simplifica la configuración
            inicial de tu almacén (store) Redux. Esta función incorpora
            configuraciones y características recomendadas, como la
            inmutabilidad automática y el manejo de devolución de llamadas de
            thunk (para acciones asíncronas).
          </li>
          <li>
            <b>Acciones y reductores simplificados:</b> Redux Toolkit ofrece una
            función createSlice() que combina la definición de acciones y
            reductores en una única función. Esto elimina gran parte de la
            repetición de código que suele ocurrir al definir acciones y
            reductores por separado.
          </li>
          <li>
            <b>Manejo automático de la inmutabilidad:</b> Redux Toolkit utiliza
            la biblioteca "Immer" para simplificar la creación de nuevos estados
            inmutables. Esto significa que puedes modificar el estado como si
            fuera mutable, y Redux Toolkit se encargará de crear una copia
            inmutable automáticamente.
          </li>
          <li>
            <b>Integración de DevTools:</b> Redux DevTools es una herramienta
            muy útil para depurar y rastrear el estado y las acciones en tu
            aplicación. Redux Toolkit incluye la configuración de DevTools de
            manera predeterminada, lo que facilita su integración y uso.
          </li>
          <li>
            <b>Mejor soporte para acciones asíncronas:</b> Redux Toolkit incluye
            la capacidad de manejar acciones asíncronas más fácilmente mediante
            el middleware "Redux Thunk" y otros enfoques, lo que facilita la
            realización de operaciones asincrónicas como llamadas a API.
          </li>
        </ul>
      </div>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <CounterToolkit />
    </>
  );
};

export default ToolkitPage;
