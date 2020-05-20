import React from "react";
import {Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Button,
} from "shards-react";
import PaginationItem from '@material-ui/lab/Pagination';
import {useHistory} from 'react-router-dom';


import './ShoppingCard.css'
function ShoppingCard({id,title,description,outprice,realprice,availablecolors}) {

  const history =useHistory();

  return (
    <Card className="shopping-card" style={{ maxWidth: "300px" }}>
    <CardHeader className="card-header">{title.toUpperCase()}</CardHeader>
    <CardImg src="https://place-hold.it/300x200" />
    <CardBody>
  <p className="card-description" >{description}</p>
  <div className="card-price">
  <p className="card-out">$ {outprice}</p>
  <p className="card-real">$ {realprice}</p>
  </div>
  <div className="card-link">
       
        <ol>
       {
       
          availablecolors.map(color=> <li style={{backgroundColor: color,border:(color==='white'? '2px solid rgb(66, 66, 66)':'0') }} ></li>)
       }
           
          
        </ol>
       </div>
      <Button className="card-btn" onClick={() => history.push('/item',{id})} >View</Button>
    </CardBody>
  </Card>
  )
}

export default ShoppingCard;
