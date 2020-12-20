import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const BackToHomeButton = () => {
    return (
        <Button id="text_movement4" variant="contained" size="large" color="primary" >
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                Back to Home
            </Link>  
        </Button>    
    )
}

export default BackToHomeButton;
