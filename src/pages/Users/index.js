import React from 'react';
import { ThemeConsumer } from '../../contex/ThemeContext';
// import PropTypes from 'prop-types';

const Index = (props) => {
  console.warn('props', props);
  console.warn('rerender');
  return (
    <div>
      <h1>Users Page</h1>
      <ThemeConsumer>
        {({ theme, changeTheme }) => (
          <div>
            <h3>{theme}</h3>
            <button
              type="button"
              onClick={() => {
                changeTheme(theme === 'light' ? 'dark' : 'light');
              }}
            >
              Change Theme
            </button>
          </div>
        )}
      </ThemeConsumer>
    </div>
  );
};

Index.propTypes = {};

export default Index;
