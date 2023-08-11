import React from 'react';
import Api from 'components/API/API';
import { useTranslation } from "react-i18next"

function ApiPage() {
  const {t} = useTranslation(["pages"])

  return (
    <React.Fragment>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('others.apis.title')}</h1>
      <p className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('others.apis.infoBox')}} />
      <Api/>
    </React.Fragment>
  );
}

export default ApiPage;
