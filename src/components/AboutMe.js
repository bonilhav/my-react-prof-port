import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
    return (
        <Box /* sx={{ flexGrow: 1 }} */>
            <Grid container spacing={2}>
                <Container>
                    <Typography margin={2} variant="body1" gutterBottom>
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
            <Grid container spacing={2}>
                <Container container spacing={2}>
                    <Typography margin={2} variant="h5" gutterBottom component="div">
                        Skills
                    </Typography>
                    <Typography margin={2} variant="body1" gutterBottom>
                        Knowledge of HTML5, CSS3, JavaScript, jQuery, Node.js, PHP, Laravel, Express.js,
                        React.js, Database Theory, MongoDB, MySQL, Command Line, and Git.
                    </Typography>
                </Container>
            </Grid>
            <Grid container spacing={2}>
                <Container>
                    <Typography  margin={2} variant="h5" gutterBottom component="div">
                        Education
                    </Typography>
                    <Typography margin={2} variant="body1" gutterBottom>
                        Coding Bootcamp Certificate - Denver University College 2021
                        Bachelor's of Science - University of Colorado 2015
                    </Typography>
                </Container>
            </Grid>
        </Box>
    );
}


