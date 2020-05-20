import React,{useContext} from "react";
import './styles/Header.css';
import { FormInput,Button } from "shards-react";
import { FaShoppingCart } from 'react-icons/fa';
import {FetchContext} from '../../../Context/FetchContext';
import {filter} from '../../../utils/LocalStore';

import {useHistory} from 'react-router-dom';

function Header() {

  const history = useHistory();

  const {data,setData} =useContext(FetchContext);
  const onChange=(e)=>{
   setData(filter({name:e.target.value,description:e.target.value}))
   console.log(data);
  }
  return (
    <div className="header">
        <h1>Cloth.Me</h1>
      <div className="search-panel">
      <FormInput onChange={onChange} className="search-input" placeholder="Search..." />
      <Button className="btn-cart" onClick={() =>history.push('/cart')} ><FaShoppingCart/></Button>
      </div>
    </div>
  );
}

export default Header;
