import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LocaleContext = createContext();

const Context = ({ children }) => {
  const [locale, setLocale] = useState('en');

  return (
    <LocaleContext.Provider
      value={{
        locale,
        changeLocale: (newLocale) => setLocale(newLocale),
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Context;
