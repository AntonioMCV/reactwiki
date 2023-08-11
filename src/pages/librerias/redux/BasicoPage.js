import CounterBasico from "components/ReduxBasico/CounterBasico";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


const BasicoPage = () => {
  const {t} = useTranslation(["pages"])
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('libraries.redux.reduxBasic.title')}</h1>
      <p className="alert alert-warning" dangerouslySetInnerHTML={{__html: t('libraries.redux.reduxBasic.warningBox')}} />
      <div className="alert alert-secondary">
        <span dangerouslySetInnerHTML={{__html: t('libraries.redux.reduxBasic.infoBox1st')}} />

        <p>
          {t('libraries.redux.reduxBasic.infoBox2nd')} <Link to="/librerias/redux/toolkit">Redux Toolkit</Link>
        </p>
      </div>
      <CounterBasico />
    </>
  );
};

export default BasicoPage;
