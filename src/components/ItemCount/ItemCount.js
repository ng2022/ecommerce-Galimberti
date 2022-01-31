import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ItemCount ({initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial);

    if(counter < initial) {
        setCounter(initial);
    } else if (counter > stock) {
        setCounter(stock);
    }

    if (stock <1) {
        setCounter=(initial);
    }

    return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={() => setCounter (counter -1)}>-</Button>
        <Box component="span" sx={{ p: 2, border: '1px solid'}}>
        <Typography>{counter}</Typography>
        </Box>
        <Button onClick={() => setCounter (counter +1)}>+</Button>
        <Button onClick={onAdd = () => alert(counter)} disabled={stock <1}>Add product</Button>
    </ButtonGroup>
    );
}


export default ItemCount;