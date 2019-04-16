import React, { Component } from 'react'

export class Header extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('***** Header Component ******')
    console.log('Will Receive Props LifeCycle');
    console.log('current props', this.props);
    console.log('next props', nextProps);
    console.log('************');
  }

  componentWillUnmount() {
    console.log('***** Header Component ******');
    console.log('component will unmount LifeCycle');
    console.log("I'm no longer being rendered, so this is going to be called! Time to clear out any event handlers, timeout events, or any intervals!");
    console.log('************');
  }

  render() {
    console.log('***** Header Component ******');
    console.log("Render, wait didn't you know this was part of the lifecycle too??");
    console.log('************');
    return (
      <header>
        <h1>{this.props.header}</h1>
      </header>
    )
  }
}

export default Header;
