import React,{useState} from 'react'
import { Button, ButtonGroup } from "shards-react";
import './QtyBtn.css';

class QtyBtn extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            count:1
        }
        this.increment =this.increment.bind(this);
        this.decrement =this.decrement.bind(this);

    }
    increment = ()=>{
        this.setState(()=>{
            return  {count:this.state.count+1}
        })
    }
    decrement = ()=>{
        this.setState(()=> {
           return {count:this.state.count===1?1:this.state.count-1}
        })
    
    }
    render(){
         const cName= this.props.className||"qty-btn-group";
    return (
        <ButtonGroup  className={cName}>
        <Button onClick={this.increment} >+</Button>
    <Button>{this.state.count}</Button>
        <Button onClick={this.decrement}>-</Button>
      </ButtonGroup>
    )
    }
   
}

export default QtyBtn
