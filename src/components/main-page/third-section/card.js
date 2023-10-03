import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import './styles.css';


function MediaCard(props) {
  const { image, headline } = props;

  return (
    <Card className="card-container">
      <CardActionArea tabIndex={-1}>
        <CardMedia component="img" height="300" image={image} title={`Image of ${headline}`} />
        <CardContent>
          <Typography variant="h5" component="h2" className="card-headline">
            {headline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaCard;
