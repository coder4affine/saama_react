// function component
// class component
import React from 'react';
import PropTypes from 'prop-types';

const c = 'new vale';

class App extends React.Component {
  state = {
    text: '',
  };

  buttonClick = () => {
    const { text } = this.state;

    alert(text);
  };

  render() {
    console.log('render');
    const { title, caption } = this.props;
    const { text } = this.state;
    return (
      <>
        <h1>{title}</h1>
        <h2>{caption}</h2>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            this.setState({ text: event.target.value });
          }}
        />
        <h1>{text}</h1>
        <button type="button" onClick={this.buttonClick}>
          Submit
        </button>
      </>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
};

App.defaultProps = {
  title: 'Hello Word',
  caption: 'How are you?',
};

export default App;

// import React from 'react';
// import PropTypes from 'prop-types';

// const App = ({ title, caption }) => (
//   <>
//     <h1>{title}</h1>
//     <h2>{caption}</h2>
//     <input type="password" />
//   </>
// );

// export default App;
