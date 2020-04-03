import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider
      value={{
        theme,
        changeTheme: (newTheme) => setTheme(newTheme),
      }}
    >
      {children}
    </ThemeProvider>
  );
};

ThemeContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeContext;
