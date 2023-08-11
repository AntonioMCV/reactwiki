import { useSelector } from "react-redux";

import CounterToolkit from "components/ReduxToolkit/CounterToolkit";
import Header from "components/ReduxToolkit/Header";
import Auth from "components/ReduxToolkit/Auth";
import UserProfile from "components/ReduxToolkit/UserProfile";
import { useTranslation } from "react-i18next"


const ToolkitPage = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const {t} = useTranslation(["pages"])
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">
        {t('libraries.redux.reduxToolkit.title')}
      </h1>
      <p className="alert alert-warning" dangerouslySetInnerHTML={{__html: t('libraries.redux.reduxToolkit.warningBox')}} />
      <div className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('libraries.redux.reduxToolkit.infoBox')}} />
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <CounterToolkit />
    </>
  );
};

export default ToolkitPage;
