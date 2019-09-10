import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import './index.css';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});


export default function Learning() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.incimages.com/uploaded_files/image/970x450/rey-seven-nm-mZ4Cs2I-unsplash_397351.jpg"
                    title="Ancient History"
                />
                <CardContent className="TextLeft">
                    <Typography gutterBottom variant="h5" component="h2">
                        Ancient History
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{paddingLeft: 16, paddingRight: 16}}>
                <Grid container spacing={1}>
                    <Grid className="TextLeft" item xs={6}>
                        <p style={{fontSize: 12}}>10 minute read</p>
                    </Grid>
                    <Grid className="TextRight" item xs={6}>
                        <p style={{fontSize: 12}}>28793 views</p>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}


