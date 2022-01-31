import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import '../ItemList/ItemList.css';

const Item = ({ data }) => {
  return (
    <Card  className='itemContainer'  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          from: {data.address.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          email: {data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;