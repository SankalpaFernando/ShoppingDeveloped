import React,{useState,useRef,useEffect} from "react";
import {useHistory} from "react-router-dom";

import "./Item.css";
import { Badge,Button,Modal, ModalBody, ModalHeader,ModalFooter } from "shards-react";

import { FaStar,FaShoppingCart,FaHeart } from "react-icons/fa";
import { Pagination, PaginationItem } from "@material-ui/lab";
import QtyBtn from '../../components/QtyBtn';
import {filter,setData} from '../../utils/LocalStore';

function Item(props) {
  
  const [open,setOpen] = useState(false);
  const item =Array.from(filter({id: props.location.state.id}))[0];
  let qtybtn=null;
  const toggle = () => {
    setOpen(!open);
  }
  
  const myQty =useRef(null);

const history = useHistory();
  return (
    <div className="item">
      <img src="https://place-hold.it/230x460" />
      <div className="item-description">
        <div className="item-name">
  <h3>{item.name.toUpperCase()}</h3>
          <Badge className="badge-item" theme="warning">
            New
          </Badge>
        </div>
        <div className="item-rating">
          <FaStar className="fa-star" />
          <FaStar className="fa-star" />
          <FaStar className="fa-star" />
          <FaStar className="fa-star" />
        </div>
        <p className="description">
          {item.description}
        </p>

        <div className="option-holder">
          <div className="item-size">
            <h5>Size</h5>
            <PaginationItem  page="XL" />
            <PaginationItem selected page="L" />
            <PaginationItem page="M" />
          </div>
          <div className="item-size">
            <h5>Color</h5>
            {
              item.availablecolors.map(color =><PaginationItem className="color-item" style={{backgroundColor:color}} page="" />)
            }
        
          </div>
        </div>

          <QtyBtn  ref={myQty} />

        <div className="item-btn-group">
          <Button onClick={()=>{setData({id:item.id,quantity:myQty.current.state.count});setOpen(true)}}>
             <FaShoppingCart/> Add to Cart</Button>
          <Button>
              <FaHeart /> Wishlist</Button>
        </div>

      </div>
      <Modal open={open} toggle={toggle}>
          <ModalHeader>Added</ModalHeader>
          <ModalBody>Your Item Has Been Added</ModalBody>
            <ModalFooter>
              <Button onClick={()=> history.push('/cart')} >Go to Cart  <FaShoppingCart/> </Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}

export default Item;
