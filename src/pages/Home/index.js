import React, { useContext } from 'react';
// import moment from 'moment';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../contex/ThemeContext';
import { LocaleContext } from '../../contex/LocaleContext';

const Index = ({ history }) => {
  const { locale, changeLocale } = useContext(LocaleContext);

  const redirect = () => {
    // import('moment')
    //   .then((moment) => {})
    //   .catch(() => {
    //     console.warn('momemnt not loaded');
    //   });
    history.push('/users');
  };

  console.warn('render');

  return (
    <div>
      <h1>Home Page</h1>
      <ThemeConsumer>{(value) => <h3>{value.theme}</h3>}</ThemeConsumer>
      <h3>{`Locale: ${locale}`}</h3>
      <button type="button" onClick={() => changeLocale(locale === 'en' ? 'es' : 'en')}>
        Change Locale
      </button>
      <button type="button" onClick={redirect}>
        Go To User
      </button>
    </div>
  );
};

Index.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Index;
