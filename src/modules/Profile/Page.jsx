import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Page(props){
  const isEmpty = props.length === 0;
  return (
    <Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
          {isEmpty ?
            <Typography>No existen datos</Typography>
            :
            <div>
              <h1>Bienvenido {props.profile.fullName } </h1>
            </div>
            }
        </Container>
    </Fragment>  
  );
}
export default Page;