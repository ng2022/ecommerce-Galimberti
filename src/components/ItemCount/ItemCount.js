import React, { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// function ItemCount ({stock, onAdd}) {
//     const [counter, setCounter] = useState(1);

//     if(counter <1) {
//         setCounter(1);
//     } else if (counter > stock) {
//         setCounter(stock);
//     }
    
//     // if (stock ===0) {
//     //     counter=(0);
//     // }

//     return (
//     <ButtonGroup variant="outlined" aria-label="outlined button group">
//         <Button onClick={() => setCounter (counter -1)}>-</Button>
//         <Box component="span" sx={{ p: 2, border: '1px solid'}}>
//         <Typography>{counter}</Typography>
//         </Box>
//         <Button onClick={() => setCounter (counter +1)}>+</Button>
//         <Button onClick={onAdd = () => alert(counter)} disabled={stock <1}>Add product</Button>
//     </ButtonGroup>
//     );
// }





// function ItemCount ({stock, onAdd}) {
//     let [initial, setInitial] = useState(1);

//     let handlerCounterUp = () => {
//         setInitial(initial +1);
//     }

//     let handlerCounterDown = () => {
//         setInitial(initial -1);
//     }

//     if(initial <=1) {
//         handlerCounterDown = () => setInitial(initial);
//     } else if (initial > stock) {
//         setInitial(stock);
//     }

//     if (stock <1) {
//         initial=(0);
//     }

//     return (
//     <ButtonGroup variant="outlined" aria-label="outlined button group">
//         <Button onClick={handlerCounterDown}>-</Button>
//         <Box component="span" sx={{ p: 2, border: '1px solid'}}>
//         <Typography>{initial}</Typography>
//         </Box>
//         <Button onClick={handlerCounterUp}>+</Button>
//         <Button onClick={onAdd = () => alert(initial)} disabled={stock <1}>Add product</Button>
//     </ButtonGroup>
//     );
// }

// !!! CON INITIAL COME PROPS !!!
function ItemCount ({initial, stock, onAdd}) {
    const [counter, setCounter] = useState(initial);

    // let handlerCounterUp = () => {
    //     setCounter(initial +1);
    // }

    // let handlerCounterDown = () => {
    //     setCounter(initial -1);
    // }

    if(counter <0) {
        setCounter(0);
    } else if (counter > stock) {
        setCounter(stock);
    }

    if (stock ===0) {
        counter=(0);
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




// function ItemCount () {
//     let [initial, setInitial] = useState(1);
//     let [stock, setStock] = useState(5);

//     const handlerCounterUp = () => {
//         setInitial(initial +1);
//     }

//     let handlerCounterDown = () => {
//         setInitial(initial -1);
//     }

//     if(initial <=1) {
//         handlerCounterDown = () => setInitial(initial);
//     } else if (initial > stock) {
//         setInitial(stock);
//     }

//     return (
//     <ButtonGroup variant="outlined" aria-label="outlined button group">
//         <Button onClick={handlerCounterDown}>-</Button>
//         <Box component="span" sx={{ p: 2, border: '1px solid'}}>
//         <Typography>{initial}</Typography>
//         </Box>
//         <Button onClick={handlerCounterUp}>+</Button>
//     </ButtonGroup>
//     );
// }



// const ItemCount = () => {
//     const [counter, setCounter] = useState(0);

//     const handlerCopunterUp = () => {
//         setCounter(counter +1);
//     }

//     return (
//     <ButtonGroup variant="outlined" aria-label="outlined button group">
//         <Button onClick={(() => setCounter(counter -1))}>-</Button>
//         <Box component="span" sx={{ p: 2, border: '1px solid'}}>
//         <Typography>{counter}</Typography>
//         </Box>
//         <Button onClick={handlerCopunterUp}>+</Button>
//     </ButtonGroup>
//     );
// }

export default ItemCount;