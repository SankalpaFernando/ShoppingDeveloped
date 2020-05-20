import React,{useContext} from 'react'
import './CartTotal.css';
import {Button} from 'shards-react';
import {FaHome} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import {TotalContext} from '../../../Context/TotalContext';

function CartTotal() {
    const history= useHistory();
    const {total,setTotal} = useContext(TotalContext);

    return (
        <div className="cart-total">
            <p>Cart Items</p>
            <p className="total-cart">Total:</p>
    <p className="total-cart-value">$ {total}</p>
            <Button onClick={() =>history.push('/')}  className="total-btn-cart" ><FaHome/></Button>
        </div>
    )
}

export default CartTotal
