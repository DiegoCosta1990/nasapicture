import React from 'react';
import '../styles/Footer.css';
import { Container, Grid, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <Container id="text_movement5" className="footer" maxWidth="xxl">
            <Grid className="footer-container" container spacing={1} direction="row" justify="space-evenly" alignItems="center" alignContent="center" wrap="nowrap">
                <a id="text_movement6" href="https://github.com/DiegoCosta1990/"><GitHubIcon /></a>   
                <a id="text_movement7" href="https://www.linkedin.com/in/diego-alberto-costa-36338678/"><LinkedInIcon /></a>
                <a id="text_movement8" href="https://www.instagram.com/diegoalbertocosta/"><InstagramIcon /></a>
            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid className="footer-container" container spacing={1} direction="row" justify="space-evenly" alignItems="center" alignContent="center" wrap="nowrap">
              <Typography id="text_movement9" variant="h6" style={{color: 'white', fontFamily:'Cormorant'}}><i>Diego Costa Developer @ 2020</i></Typography>  
            </Grid>                     
        </Container>
    )
}

export default Footer;
