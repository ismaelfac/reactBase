import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './Page';

class Dashboard extends Component {
    render() {
        const {profile} = this.props;
        return (
            <Page profile={profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    };
};
export default connect(mapStateToProps)(Dashboard);