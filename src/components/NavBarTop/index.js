import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './Page';
class NavBar extends Component {
    render() {
        const {navBar} = this.props;
        console.log(navBar);
        return (
            <Page navBar={navBar}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        navBar: state.NavBar,
    };
};
export default connect(mapStateToProps)(NavBar);