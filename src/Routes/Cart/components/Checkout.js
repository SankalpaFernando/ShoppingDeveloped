import React,{useState,Fragment,useContext} from 'react'
import './Checkout.css'
import { Button,Modal,ModalHeader,ModalBody,FormInput } from "shards-react";
import CartTotal from './CartTotal';
import {getData,filter} from '../../../utils/LocalStore';
import {TotalContext} from '../../../Context/TotalContext';


function Checkout() {
    //Consumes the TotalContext
    const {total,setTotal} = useContext(TotalContext);
    //Assign a  temporary accumulator to avoid calling the Hook multiple times.
    let realTotal =0;
    //Assigns the State for the Modal
    const [open,setOpen] = useState(false);
    //Handles the toggling of the Modal
    const toggle=()=>{
        setOpen(open?false:true);
    }
    //Gets the Data from the Local Storage
    const items = getData();
    //Maps the Data According to the ID
    const itemComponents=items.map(item=>{
        const product =Array.from(filter({id:item.id}))[0];
        
        realTotal += parseInt(product.realPrice)*parseInt(item.quantity);
        return(
            <div className="price-details">
                <div className="details">{product.name.toUpperCase()}</div>
                <div className="price">$ {parseInt(product.realPrice)*parseInt(item.quantity)}</div>

            </div>
        )
    })
    setTotal(realTotal);
   
    return (

        <div className="checkout">
            <div className="coupon">
                <p>Coupon</p>
                <Button className="btn-coupon" outline squared onClick={toggle}  >Apply Coupon</Button>
                <Modal open={open} toggle={toggle}>
          <ModalHeader>Apply Coupon </ModalHeader>
          <ModalBody>
          <FormInput placeholder="Enter the Coupon Code" />
          <Button className="apply-btn" >Apply Code</Button> 
          </ModalBody>
        </Modal>
            </div>
            <hr/>
        <div className="price-details-holder">
            <h6>Price Details</h6>
           
            {itemComponents}
            <div className="total-details-holder">
                <div className="total-details">Total</div>
    <div className="price">$ {total}</div>
            </div>
        </div>
        </div>
    )
}

export default Checkout
