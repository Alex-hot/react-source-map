import React, { Component } from 'react'

const withCopyright = (YourComponent) => {
  return class WithCopyright extends Component {
    render() {
      return (
        <>
          <YourComponent {...this.props} />
          <div>&copy;  &emsp;组件</div>
        </>
      )
    }
  }  
}

export default withCopyright