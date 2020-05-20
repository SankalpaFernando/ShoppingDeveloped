//LocalStore Component
//This holds the functions and some dummy data for storing and retrieving from Local Storage.

//Dummy Data for Application
export const data = [
  {
    id: 1,
    name: "men shirt",
    img:
      "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cat: "Men",
    outPrice: 45,
    realPrice: 42,
    description: "Men Shirt SeaGreen Solid Round Neck",
    availablecolors: ["blue", "white"],
    availablesizes: ["11", "12", "13"],
  },
  {
    id: 2,
    name: "tshirt",
    img:
      "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cat: "Men",
    outPrice: 600,
    realPrice: 540,
    description: "Men Tshirt SeaGreen Solid Round Neck",
    availablecolors: ["blue", "green"],
    availablesizes: ["11", "12", "13"],
  },
  {
    id: 3,
    name: "skirt",
    img:
      "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cat: "Women",
    outPrice: 640,
    realPrice: 540,
    description: "Women Skirt SeaGreen Solid ",
    availablecolors: ["red", "white"],
    availablesizes: ["11", "12", "13"],
  },
  {
    id: 4,
    name: "denim",
    img:
      "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cat: "Men",
    outPrice: 800,
    realPrice: 570,
    description: "Men Denim SeaGreen Solid ",
    availablecolors: ["aqua", "green"],
    availablesizes: ["11", "12", "13"],
  },
  {
    id: 5,
    name: "belt",
    img:
      "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cat: "Women",
    outPrice: 500,
    realPrice:320,
    description: "Men Belt SeaGreen Solid ",
    availablecolors: ["perl", "navy"],
    availablesizes: ["11", "12", "13"],
  },
  {
    id: 6,
    name: "sunglasses",
    img:
      "https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    cat: "Women",
    outPrice: 580,
    realPrice: 200,
    description: "Women Sunglass SeaGreen Solid ",
    availablecolors: ["pink", "brown"],
    availablesizes: ["11", "12", "13"],
  },
];


//This function allows to insert Data into the Local Storage
export const setData = (data) => {
  if (typeof data == "object") {
    const setData = [data,...getData()];
    localStorage.clear();
    localStorage.setItem("Cart", JSON.stringify(setData));
  } else {
    throw new Error("Invalid Data");
  }
};

//This function allows to get Data from the Local Storage
export const getData = () => {
  return JSON.parse(localStorage.getItem("Cart")) || [];
};


//This function is used to filter out the data from the Dummy Data
export const filter = (searchTerm) => {
  if (typeof searchTerm == "object") {
   
    const filteredData = [];

    data.filter((item) => {
      for (let key in searchTerm) {
        //Filtering for Numbers
        if(key=='outPrice' || key=='realPrice'){
            if(item[key]>=searchTerm[key]){
                filteredData.push(item);
            }
        }//Filtering for Colors
        else if(key=='availablecolors')
        {
            item['availablecolors'].forEach(color =>{
              if(color===searchTerm['availablecolors']){
                    filteredData.push(item);
              }
            })
        }//Filtering for Rest
        else{
          if (item[key].toString().toLowerCase().indexOf(searchTerm[key].toString()) > -1) {
          filteredData.push(item);
        }
        }
        
      }
    });
    //Return Data as a Set to avoid repeating values
    return new Set(filteredData);
  } else {
    throw new Error("Invalid Search Type");
  }
};

//Remove Specific ID related Data from the Local Storage
export const remove = (id)=>{
    let items = getData();
    let filtered= items.filter(item=>!(item.id===id))
    localStorage.clear();
    localStorage.setItem('Cart',JSON.stringify(filtered));
   
}
//Update Specific ID related Data
export const update=(id,quantity)=>{
  let items=getData();
  let filtered=items.filter(item => !(item.id===id));
  localStorage.clear();
  filtered.push({id,quantity});
  localStorage.setItem('Cart',JSON.stringify(filtered));

}