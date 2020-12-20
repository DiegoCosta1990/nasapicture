import React, { useEffect } from 'react';
import '../styles/Home.css';
import { Container, Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Circ } from 'gsap';
import { gsap } from 'gsap';
import Footer from './Footer';

   

function Home() { 
    const h1Mobile = useMediaQuery('(max-width:440px)');   

    useEffect(() => {
        gsap.from("#text", 
            {
                duration: 2.5, 
                opacity: 0, 
                y:-80,
                ease: Circ.easeOut 
            }
        );
        gsap.from("#button", 
            {
                duration: 2.5, 
                opacity: 0, 
                y:80,
                ease: Circ.easeOut 
            }
        );
        gsap.from("#text_movement6", 
            {
                duration: 2.5, 
                opacity: 0, 
                y:80,
                ease: Circ.easeOut 
            }
        );
        gsap.from("#text_movement7", 
            {
                duration: 8, 
                opacity: 0, 
                y:80,
                ease: Circ.easeOut 
            }
        );
        gsap.from("#text_movement8", 
            {
                duration: 10, 
                opacity: 0, 
                y:80,
                ease: Circ.easeOut 
            }
        );        
        gsap.from("#text_movement9", 
            {
                duration: 12, 
                opacity: 0, 
                y:80,
                ease: Circ.easeOut 
            }
        );
    }, []);

  
    return (          
        <>
        <Container className="hero" maxWidth="xxl"></Container>     

        <Grid className="container" container direction="column" justify="center" alignItems="center" alignContent="center" wrap="nowrap">
                {h1Mobile ? <Typography style={{ fontSize: '4.5rem'}} id="text" variant="h1" color="initial">Welcome to the NASA A.P.O.D</Typography> : <Typography id="text" variant="h1" color="initial">Welcome to the NASA A.P.O.D</Typography> }
                <Typography id="text" variant="h4" color="initial">Press the button below and get your Astronomic Picture of the Day </Typography>
                <br/>
                <Typography id="text" variant="h5" color="initial">Powered by the NASA OPEN API</Typography>
                <br/>
                <br/>
                <Button id="button" variant="contained" size="large" color="primary">
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/nasapicture">
                        Pic of the Day
                    </Link>
                </Button>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer />
        </Grid> 
        </>  
    )
}

export default Home;
