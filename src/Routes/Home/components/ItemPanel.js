import React,{Fragment,useContext} from 'react'
import './styles/ItemPanel.css';
import ShoppingCard from '../../../components/ShoppingCard';
import {FetchContext} from '../../../Context/FetchContext';

function ItemPanel() {
    const {data,setData} = useContext(FetchContext);
    const Data= Array.from(data)
    return (
       <div className="item-panel">
            
    {
        Data.map((item=><ShoppingCard id={item.id} key={item.id} title={item.name} description={item.description} availablecolors={item.availablecolors} outprice={item.outPrice} realprice={item.realPrice}/>))
    }
       </div>
    )
}

export default ItemPanel
