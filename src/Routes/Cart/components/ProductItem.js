import React,{useRef} from "react";
import "./ProductItem.css";
import { Slider,Button } from "shards-react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Pagination, PaginationItem } from "@material-ui/lab";
import QtyBtn from '../../../components/QtyBtn';
import {remove,update} from '../../../utils/LocalStore';
import {useHistory} from 'react-router-dom';

function ProductItem({id,name,outPrice,realPrice}) {

  const off = Math.round( (parseInt(realPrice)/parseInt(outPrice))*100);
  const history= useHistory();
  const qtyRef=useRef(null);

  return (
    <div className="product-item">
      <img src="https://place-hold.it/130x220" alt="" srcset="" />
      <div className="product-details">
        <h4>{name.toUpperCase()}</h4>
        <div className="product-deals">
  <div className="off">Flat {off}% off</div>
          <div className="divider"></div>
  <div className="old-price">${realPrice}</div>
        </div>
        <div className="product-option">
          <div className="option-size">
            <h5>Size</h5>
            <PaginationItem size='small' page="XL" />
            <PaginationItem size='small' selected page="L" />
            <PaginationItem size='small' page="M" />
          </div>
          <div className="option-size">
            <h5>Color</h5>
            <PaginationItem
            size='small'
              className="color-item"
              style={{ backgroundColor: "#0f0" }}
              page=""
            />
            <PaginationItem size='small' style={{ backgroundColor: "#00f" }} page="" />
            <PaginationItem size='small' style={{ backgroundColor: "#f00" }} page="" />
          </div>
          <QtyBtn  ref={qtyRef} className="option-qty" />
        
        </div>
        <div className="option-btn-group">
          <Button className="option-btn" onClick={() =>{ remove(id);history.push('/cart')}}>
             Remove</Button>
          <Button onClick={() =>{update(id,qtyRef.current.state.count);history.push('/cart')}}>
          Update</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
