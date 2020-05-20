import React,{useContext,useState} from 'react'


import './styles/FilterPanel.css';
import { Slider,Fade } from "shards-react";
import {FetchContext} from '../../../Context/FetchContext';
import {filter} from '../../../utils/LocalStore';

function FilterPanel() {
    const {data,setData} =useContext(FetchContext);
    const [start,setStart]=useState(20)
    const onClick=(e)=>{
    setData(filter({name:e.target.getAttribute('value'),description:e.target.getAttribute('value')}))
     
    }
    const onRange=(e)=>{
        setData(filter({outPrice:parseInt(e[0]),realPrice:parseInt(e[0])}))
        console.log(e[0])
        setStart(parseInt(e[0]))
    }
    const onColor=(e)=>{
        console.log(e.target.getAttribute('value'))
       Array.from( document.getElementsByClassName('color')).forEach(color =>color.innerHTML='');
        e.target.innerHTML =" &#10004";
        setData(filter({availablecolors:e.target.getAttribute('value')}));

    }
    return (
        <Fade  className="filter-panel" >

       <div className="item-link">
       <h5>Gender</h5>
        <ul>
            <li value="men" onClick={onClick}>Men</li>
            <li   value="women"  onClick={onClick}>Women</li>
        </ul>
       </div>
<div className="item-link">
       <h5>Price</h5>

<div style={{display: 'grid',gridTemplateColumns:'3fr 8fr'}}>
 <p style={{marginTop:'1.5em'}}>$ {start}</p>
       <Slider onChange={onRange} connect={[true, false]}  animate={true} start={[start]} range={{ min: 20, max: 1000 }} />
       
</div>
       
       </div>
       <div className="item-link">
       <h5>Brands</h5>
        <ul>
            <li>Polo</li>
            <li>Addidas</li>
            <li>Sky</li>
        </ul>
       </div>
       <div className="item-link">
       <h5>Colors</h5>
        <ol>
            <li onClick={onColor} className="color" value="green" style={{backgroundColor: 'green'}} ></li>
            <li onClick={onColor} className="color" value="blue" style={{backgroundColor: 'blue'}}></li>
            <li onClick={onColor} className="color" value="red"  style={{backgroundColor: 'red'}}></li>
            <li onClick={onColor} className="color" value="brown"  style={{backgroundColor: 'brown'}}></li>
        </ol>
       </div>
        </Fade>
    )
}

export default FilterPanel
