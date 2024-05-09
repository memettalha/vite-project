import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';


export function Shop(){
    const shops = [{id:1,name:"Migros"},
        {id:2, name:"Teknosa"},
        {id:3, name:"Bim"},
        {id:4, name:"Carrefour"} 
    ]

    const categories = [{id:1, name:"elektronik"},
        {id:2, name:"şarküteri"},
        {id:3, name:"oyuncak"},
        {id:4, name:"bakliyat"},
        {id:5, name:"fırın"}]
    
    const [product, setProduct] =useState([]) 
    //Ürün Ekleme Stateti  
    const [newProduct , setNewProduct ] = useState({ 
        name:"",
        shop:"",
        category:"",
    })
    // Yeni bir ürün eklemek için kullanılan fonksiyonlar.
  const [productName, setProductName] = useState('');
  const [selectedShop, setSelectedShop] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [products, setProducts] = useState([]);



  // Yeni bir ürün eklemek için kullanılan fonksiyon.
  const handleInputChange = (e) => {
    const{name, value} = e.target;
    setNewProduct((prevProduct) =>({
        ...prevProduct,
        [name]:value,
    }));
  };
    return(
        <div>   

            <label Htmlfor="item">Marketler</label>
        <input type="search"  id="item" list="item-datalist" name="item"/>
        <datalist id="item-datalist">
          <option id="">Migros</option>
          <option>Teknosa</option>
          <option>Bim</option>
        </datalist>
        <label Htmlfor="item2">Kategori</label>
        <input type="search"  id="item2" list="item-datalist2" name="item2"/>
        <datalist id="item-datalist2">
          <option>Elektronik</option>
          <option>Şarküteri</option>
          <option>Oyuncak</option>
          <option>Bakliyat</option>
          <option>Fırın</option>
        </datalist>
        <br/><br/>
            <label htmlFor='first'>Ürün Adı</label>
            <Form.Control type="text" placeholder="Normal text" id="first" value="" onChange=""/>
            <label htmlFor='second'>Hangi Market</label>
            <Form.Control type="text" placeholder="Normal text" id="second" value="" onChange="" />
            <label htmlFor='third'>Kategori</label>
            <Form.Control type="text" placeholder="Normal text" id="third" value="" onChange="" />
        <br />
       
        </div>

    )
}