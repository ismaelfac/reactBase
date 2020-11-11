import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './Page';

class NavBar extends Component {
    render() {
        const {navBarLeft} = this.props;
        return (
            <Page navBarLeft={navBarLeft}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navBarLeft: state.navBarLeft,
    };
};
export default connect(mapStateToProps)(NavBar);