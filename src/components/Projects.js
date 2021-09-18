import * as React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    card: {
        margin: theme.spacing(2),
    }
}));

export const MediaCard = ({ projects }) => {
    const classes = useStyles();

    return (
        <div >
        <Grid className={classes.root} >
            {projects.map((project) => (
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={project.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {`${project.name}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {`${project.info}`}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
        </div>
    );
};

export default MediaCard;