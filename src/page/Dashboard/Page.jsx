import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
//Modules - Components
import Profile from '../../modules/Profile/Page';

function Page(props) {
    const isEmpty = props.profile.length === 0;
    return (
        <Fragment>
            <CssBaseline />
            <div>
            {isEmpty ?
                <Typography></Typography>
                :
              <div>
                <h1>Dashboard</h1>
                <Profile profile={props.profile} />
              </div>
              
            }
            </div>
        </Fragment>
    )
}

export default Page;