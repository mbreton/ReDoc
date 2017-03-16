import React, { Component } from 'react';

/**
 * A super component !
 */
class App extends Component {

  static propTypes = {
    /**
     * This property is mandatory
     */
    prop1: React.PropTypes.number.isRequired,
  };

  contructor() {
    this.state = {
      prop1: 1,
    };
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
