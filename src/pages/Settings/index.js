/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const Index = ({ locale, theme, changeLocale, changeTheme }) => (
  <div>
    <h1>Settings Page</h1>
    <h3>{`Locale: ${locale}`}</h3>
    <h3>{`Theme: ${theme}`}</h3>
    <button type="button" onClick={() => changeLocale(locale === 'en' ? 'es' : 'en')}>
      Change Locale
    </button>
    <button type="button" onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
      Change Theme
    </button>
  </div>
);

Index.propTypes = {};

const mapStoreToProps = (state) => ({
  locale: state.locale,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeLocale: (payload) => dispatch({ type: 'CHANGE_LOCALE', payload }),
  changeTheme: (payload) => dispatch({ type: 'CHANGE_THEME', payload }),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Index);
