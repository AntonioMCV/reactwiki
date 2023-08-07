const HomePage = () => {
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">React Wiki</h1>
      <p className="alert alert-warning">
        <b>
          Esta Wiki esta pensada para gente que ya posee cierto conocimiento con
          React
        </b>{" "}
        pero que por diferentes motivos se han olvidado de algunas de sus
        funciones o necesita reforzarlas.
      </p>
      <h2 className="text-center mb-5">Introducción</h2>
      <h5 className="text-center mb-5">
        Aquí encontraremos varios ejemplos para saber utilizar las principales
        ventajas de React.
        <br />
        <br />
        Ten presente que por motivos de incompatibilidad se han tenido que
        eliminar las llavecillas de los cuadros de codigos de ejemplos y no es
        completamente fiel a como realmente hay que escribirlo.
        <br />
        <br />
        Si lo necesitas siempre puedes recurrir al código original en:
        <br />
        <br />
        <ul className="d-inline-block">
          <li>
            <a
              href="https://github.com/AntonioMCV/reactwiki"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io/s/github/AntonioMCV/reactwiki"
              target="_blank"
              rel="noreferrer"
            >
              Sandbox
            </a>
          </li>
        </ul>
      </h5>

      <div className="alert alert-secondary">
        <h3 className="mb-4">¿Que es React?</h3>
        <p>
          La tecnología "React", también conocida como "React.js" o simplemente
          "React", es una biblioteca de JavaScript desarrollada por Facebook. Se
          utiliza para construir interfaces de usuario interactivas y
          reutilizables en aplicaciones web. React se centra en la creación de
          componentes reutilizables que representan diferentes partes de la
          interfaz de usuario y su estado.
          <br />
          <br />
          La principal característica de React es su enfoque en la construcción
          de interfaces de usuario mediante la utilización de componentes. Un
          componente en React es una unidad independiente que puede contener su
          propia lógica y estado, y puede renderizarse en la interfaz de usuario
          de acuerdo con las actualizaciones del estado. Esto permite la
          creación de interfaces de usuario modulares y escalables.
          <br />
          <br />
          React utiliza un modelo de programación llamado "Virtual DOM" (DOM
          Virtual), que es una representación en memoria de la estructura actual
          de la interfaz de usuario. Cuando el estado de un componente cambia,
          React genera una actualización virtual del DOM en lugar de manipular
          directamente el DOM del navegador. Luego, compara esta actualización
          virtual con la versión anterior para determinar los cambios reales que
          deben aplicarse al DOM real. Esta técnica de optimización ayuda a
          mejorar el rendimiento y la eficiencia de las aplicaciones.
          <br />
          <br />
          React es muy popular en el desarrollo web moderno y se combina a
          menudo con otras bibliotecas y herramientas para construir
          aplicaciones completas. Para administrar el estado de las aplicaciones
          en React, se pueden usar soluciones como "Redux" o "Mobx". Además,
          React puede integrarse con marcos de trabajo de desarrollo web como
          "React Router" para manejar la navegación y "Axios" para realizar
          solicitudes HTTP.
          <br />
          <br />
          En resumen, React es una tecnología que permite construir interfaces
          de usuario interactivas y dinámicas en aplicaciones web a través de
          componentes reutilizables y un enfoque eficiente en la manipulación
          del DOM.
        </p>
      </div>
    </>
  );
};

export default HomePage;
