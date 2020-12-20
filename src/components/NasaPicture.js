import React, { useEffect, useState } from 'react';
import '../styles/NasaPicture.css';
import axios from 'axios';
import { Container, Grid, Typography, GridList } from '@material-ui/core';
import { gsap, Circ } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackToHomeButton from './BackToHomeButton';
import Footer from './Footer';





const apiKey = '4WD73NC4lUMSMugjxCCEbEhhhemxXNPvcFqaAmK2';

function NasaPicture() {

    const [picture, setPicture] = useState([]);
  


    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".page_title", 
            {
                duration: 3, 
                opacity: 0, 
                y:-80,
                ease: Circ.easeOut 
            }
        );
        gsap.from(".image", 
        {
            duration: 2, 
            opacity: 0, 
            y:-40,
            ease: Circ.easeOut 
        }
    );
        gsap.from("#text_movement1", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            } ,
            duration: 2, 
            opacity: 0, 
            x: 100
        }
    );
        gsap.from("#text_movement2", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            } ,
            duration: 2.5, 
            opacity: 0, 
            x: -100
        }
    );
        gsap.from("#text_movement3", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            } ,
            duration: 3.5, 
            opacity: 0, 
            x: 100
        }
    );
        gsap.from("#text_movement4", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            },
            duration: 5, 
            opacity: 0, 
            x: -100
        }
    );
        gsap.from("#text_movement5", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            },
            duration: 5, 
            opacity: 0, 
            x: -100
        }
    );
        gsap.from("#text_movement6", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            },
            duration: 6, 
            opacity: 0, 
            x: 30
        }
    );
        gsap.from("#text_movement7", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            },
            duration: 9, 
            opacity: 0, 
            x: 60
        }
    );
        gsap.from("#text_movement8", 
        {
            scrollTrigger:{
                trigger: "#text_movement1",
                toggleActions:"restart restart none none"
            },
            duration: 12, 
            opacity: 0, 
            x: 90
        }
    );

    const fetchAPI = async () => {
        try {
          await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => {
                setPicture(res.data)
            });
        } catch (error) {
            return <div>{error.message}</div>;
        }
    } 
     fetchAPI();
    }, []);

    return (
                <>
                    <Container className="picture-bg" maxWidth="xxl"></Container>
                    <Container className="nasa_picture" maxWidth="xxl">
                        <Grid className="blur" container spacing={1} direction="column" justify="center" alignItems="center" alignContent="center" wrap="nowrap">
                            <Typography id="text_title" className="page_title" variant="h2" color="initial"> Astronomy Picture Of The Day </Typography>
                            <GridList className="image" cellHeight="auto">
                                <img src={picture.url} alt="Nasa_picture"/>
                            </GridList>
                            <br/>
                            <br/>              
                            <Typography id="text_movement1" className="title" variant="h4">{picture.title} by {picture.copyright}</Typography>
                            <br/>
                            <Typography id="text_movement2" variant="h5" style={{color: 'white'}}>{picture.date}</Typography>
                            <br/>
                            <Typography id="text_movement3" className="explanation" variant="caption">{picture.explanation}</Typography>
                            <br/>
                            <br/>
                            <BackToHomeButton />
                            <br/>
                            <br/>
                            <Footer />
                        </Grid>     
                    </Container>
        </>     
    )
}

export default NasaPicture;
