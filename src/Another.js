import React, { Component } from 'react';
import withCopyRight from './withCopyRight';
@withCopyRight


class Another extends Component {
    render() {
        return (
            <>
                Another {this.props.name}
            </>
        )
    }
}
export default Another
