// @flow
import React, { Component } from 'react';


type State = {
  prop1: number
};

type Props = {
  prop1?: number
};

/**
 * A super component !
 */
class App extends Component {

  state: State;
  props: Props;

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
