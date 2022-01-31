import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function ItemCount ({initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial);

    function sumar () {
        if (counter < stock) {
                setCounter(counter +1)
        }
    }

    function restar () {
            if (counter != initial) {
                setCounter(counter -1)
            }
    }

    // if(counter < initial) {
    //     setCounter(initial);
    // } else if (counter > stock) {
    //     setCounter(stock);
    // }

    return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={restar}>-</Button>
        <Box component="span" sx={{ p: 2, border: '1px solid'}}>
        <Typography>{stock ==0 ? 0 : counter}</Typography>
        </Box>
        <Button onClick={sumar}>+</Button>
        <Button onClick={onAdd = () => alert(counter)} disabled={stock <1}>Add product</Button>
    </ButtonGroup>
    );
}


export default ItemCount;