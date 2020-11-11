import React, { Fragment } from 'react';
import NavBarTop from '../../components/NavBarTop';
import NavBarLeft from '../../components/NavBarLeft';

function Page(props) {
    return (
        <Fragment>
            <NavBarTop />

            <NavBarLeft />
        </Fragment>
    )
}

export default Page;