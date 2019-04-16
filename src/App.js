import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      header: "The Amazing Increase The Counter App!"
    }
  }

  UNSAFE_componentWillMount() {
    console.log('***** App Component ******');
    console.log('Will Mount LifeCycle');
    console.log('************');
  }

  componentDidMount() {
    console.log('***** App Component ******');
    console.log('Did Mount LifeCycle');
    console.log('************');
  }

  componentWillReceiveProps(nextProps) {
    console.log('***** App Component ******');
    console.log('Will Receive Props LifeCycle');
    console.log('************');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('***** App Component ******');
    console.log('should component update? LifeCycle');
    console.log('************');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('***** App Component ******');
    console.log('component will update LifeCycle');
    console.log('current props', this.props);
    console.log('next props', nextProps);
    console.log('current state', this.state);
    console.log('next state', nextState);
    console.log('everything looks good, lets update it!');
    console.log('************');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('***** App Component ******');
    console.log('component did update LifeCycle');
    console.log('do i need to send anything via fetch? Or start any animations?')
    console.log('great job!!');
    console.log('************');
  }

  componentWillUnmount() {
    console.log('***** App Component ******');
    console.log('component will unmount LifeCycle');
    console.log("you won't see this one because App never unmounts, but if I was a component rendered in a container, and you decided to view another container then i would be called as soon as I wasn't rendered anymore");
    console.log('************');
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
      header: this.state.header + "!"
    });
  }

  render() {
    console.log('***** App Component ******');
    console.log("Render, wait didn't you know this was part of the lifecycle too??");
    console.log('************');
    return (
      <div className="App">
      {
        this.state.counter > 10 ? null : <Header header={this.state.header} />
      }
        {this.state.counter}<button onClick={this.handleClick}>Increase Me!</button>
      </div>
    );
  }
}

export default App;
