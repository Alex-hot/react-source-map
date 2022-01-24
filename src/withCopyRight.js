import React, { Component } from 'react';

const withCopyRight = (YourComponent) => {
    return class WithCopyRight extends Component {
        render(){
            return (
                <>
                    <YourComponent {...this.props} />
                    <div>高阶组件</div>
                </>
            )
        }
    }
}

export default withCopyRight