import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

function Page(props){
  const isEmpty = props.length === 0;
  return (
    <Fragment>
      <CssBaseline />
        <div>
          {isEmpty ?
            <Typography>No existen datos</Typography>
            :
            <div>
              <h1>Bienvenido {props.Profile.fullName } </h1>
            </div>
            }
        </div>
    </Fragment>  
  );
}
export default Page;