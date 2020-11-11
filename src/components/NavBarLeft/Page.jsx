import { CssBaseline } from '@material-ui/core';
import React, { Fragment } from 'react';

function Page(props){
    //const isEmpty = props.navNarLeft.length === 0;
    return (
        <Fragment>
            <CssBaseline />
            {props.navBarLeft.name}
        </Fragment>
    )
}

export default Page;