import { useTranslation } from "react-i18next"

const HomePage = () => {
  const {t} = useTranslation(["home"])

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('reactWiki')}</h1>

      <p className="alert alert-warning" dangerouslySetInnerHTML={{__html: t('warningBox')}}/>
      <h2 className="text-center mb-5">{t('introduction')}</h2>
      <h5 className="text-center" dangerouslySetInnerHTML={{__html: t('introductionDetails')}}/>
      <div className="text-center mb-5 fs-5">
        <ul className="d-inline-block">
          <li>
            <a
              href="https://github.com/AntonioMCV/reactwiki"
              target="_blank"
              rel="noreferrer"
            >
              {t('gitHub')}
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io/s/github/AntonioMCV/reactwiki"
              target="_blank"
              rel="noreferrer"
            >
              {t('sandBox')}
            </a>
          </li>
        </ul>
      </div>

      <div className="alert alert-secondary">
        <h3 className="mb-4">{t('infoBoxTitle')}</h3>
        <p dangerouslySetInnerHTML={{__html: t('infoBox')}}/>
      </div>
    </>
  );
};

export default HomePage;
