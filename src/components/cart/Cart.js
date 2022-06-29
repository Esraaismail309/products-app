import { Table, TableBody, TableCell, TableHead, TableRow, tableCellClasses, TableContainer, IconButton, Badge, Button, TableFooter, Box } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { decreaseCart, increaseCart, removeCartAction } from '../../store/Cart/CartActions';
import { Link } from 'react-router-dom';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const Cart = () => {
  const dispatch = useDispatch()
  const product = useSelector((data) => data.cart)

  const handleRemoveItemFromCart = (product) => {
    dispatch(removeCartAction(product))
  }
  const handleIncrease = (product) => {
    dispatch(increaseCart(product))
  }
  const handleDecrease = (product) => {
    dispatch(decreaseCart(product))
  }
  const getTotalPrice = () => {
    if (product.products.length) {
      const yy = product.products.map((ele) => {
        if (ele?.price !== undefined) {
          return Math.floor(ele.quantity * ele?.price)
        }
        else {
          return Math.floor(ele?.quantity * 30)
        }
      })
      const total = yy.reduce((total, amount) => total + amount)
      return total
    }
  }

  useEffect(() => {
    getTotalPrice()
  }, [])

  // console.log(product);
  return (
    <Container>
      {product.products.length >= 1 ? (
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Index</StyledTableCell>
                <StyledTableCell >Image</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Quantity</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.products.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell >{i + 1}</StyledTableCell>
                  <StyledTableCell scope="row">
                    <img src={row.image} alt={row.title} width='30%' />
                  </StyledTableCell>
                  <StyledTableCell >{row.title}</StyledTableCell>
                  <StyledTableCell >
                    <Badge color="error" type='button' badgeContent="-" sx={{ mr: 2 }} onClick={() => { handleDecrease(row) }} />
                    {row.quantity}
                    <Badge color="primary" type='button' badgeContent="+" sx={{ ml: 2 }} onClick={() => { handleIncrease(row) }} />
                  </StyledTableCell>
                  <StyledTableCell >{row.price}</StyledTableCell>
                  <StyledTableCell >
                    <IconButton aria-label="delete" color='error' onClick={() => { handleRemoveItemFromCart(row) }}>
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>))}
            </TableBody>

          </Table>
          <Box width={'100%'} py={3} >
            <Box width={'40%'} display={'inline-block'} pl={3} >
              <Link to={'/products'} style={{ textDecoration: 'none', backgroundColor: 'black', padding: '7px 12px', color: 'white', borderRadius: '4px' }} >
                Continue Shopping
              </Link>
            </Box>


            <Box width={'50%'} m={3} >  <strong >Total price :{getTotalPrice()} </strong></Box>
          </Box>
        </TableContainer>
      ) : <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3>Your Cart Is Empty</h3>
        <Button variant='contained'>
          <Link to={'/products'} style={{ textDecoration: 'none', color: 'white' }}>
            Go Shopping
          </Link>
        </Button>
      </div>}
    </Container>

  )
}






// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

