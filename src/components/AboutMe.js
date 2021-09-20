import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import profPic from '../images/bonilhaVanessa.png';

const useStyles = makeStyles((theme) => ({
    font: {
        fontFamily: 'Nunito, Georgia, cursive, sans-serif',
        color: 'whitesmoke',
        padding: '5px',
        margin: '1%',
        lineHeight: '22px',
        fontSize: '1.20rem',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();
    return (
        <Box class="min-vh-100" sx={{ flexGrow: 1 }}>
            <Grid class="d-flex justify-content-center">
                <img src={profPic} alt="Resume" />
            </Grid>
            <Grid class="d-flex justify-content-center" container spacing={2}>
                <Container id="about-me">
                    <h1 class="m-1">
                        About Me
                    </h1>
                    <Typography className={classes.font} margin={2} variant="body1" gutterBottom>
                        I am Vanessa Bonilha. I was born and raised in Denver, CO. I am married with two fur babies. My family
                        immigrated from Brazil. I currently hold an American and Brazilian citizenship. I am currently working on
                        obtaining my Portuguese citizenship. My native language is English and I have
                        intermediate fluency in Portuguese. I studied finance for my Bachelor's degree. I have taken some Master's
                        courses
                        in Project Management. I currently work for a retirement financial institution. Previously I worked in their
                        contact center and currently
                        work as a fraud analyst.
                    </Typography>
                </Container>
            </Grid>
            <Grid class="d-flex justify-content-center" container spacing={2}>
                <Container id="about-me">
                    <h1 class="m-1">
                        Skills
                    </h1>
                    <Typography className={classes.font} margin={2} variant="body1" gutterBottom>
                        Knowledge of HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js,
                        React.js, Database Theory, MongoDB, MySQL, Command Line, and Git.
                    </Typography>
                </Container>
            </Grid>
            <Grid class="d-flex justify-content-center" container spacing={2}>
                <Container id="about-me">
                    <h1 class="m-1">
                        Education
                    </h1>
                    <Typography className={classes.font} margin={2} variant="body1" gutterBottom>
                        Coding Bootcamp Certificate - Denver University College 2021
                        Bachelor's of Science - University of Colorado 2015
                    </Typography>
                </Container>
            </Grid>
        </Box>
    );
}


