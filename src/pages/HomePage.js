const HomePage = () => {
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">React Wiki</h1>
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
    </>
  );
};

export default HomePage;
