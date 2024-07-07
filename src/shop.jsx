import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Button } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import styled from 'styled-components';




export function Shop(){
    const shops = [
        {id:1, name:"Migros"},
        {id:2, name:"Teknosa"},
        {id:3, name:"Bim"},
        {id:4, name:"Carrefour"} 
    ]
    const categories = [
        {id:1, name:"elektronik"},
        {id:2, name:"şarküteri"},
        {id:3, name:"oyuncak"},
        {id:4, name:"bakliyat"},
        {id:5, name:"fırın"}]
    
        //Ürün state
    const [products,setProducts] = useState([]);
        //Input States
      const [productName, setProductName] = useState("");
      const [productShop, setProductShop] = useState("");
      const [productCategory, setProductCategory] = useState("");

      const [FilteredName, setProductFilteredName] = useState("");
      const [FilteredShopID, setFilteredShopID] = useState("");
      const [FilteredCategoryId, setFilteredCategoryId] = useState("");
      const [FilteredStatus, setFilteredStatus] = ("");
      //Ürün Ekleme
      const handleAddProduct  = () => {

        const product = {
          id:nanoid(),
          name:productName,
          category:productCategory,
          shop:productShop,
        }
        setProducts([...products,product])
      }
    return(
        <div>
          <div className = "d-flex align-items-end">  
        
         <Form.Control type="text" placeholder="Name" value={productName} onChange={(e) => {setProductName(e.target.value)}} />

       <Form.Select aria-label="Default select example" value={productShop} onChange={(e) => {setProductShop(e.target.value)}}>
           <option>Marketler</option>
           {shops.map((shop) => <option key={shop.id} value={shop.id}>{shop.name}</option>)}
         </Form.Select>

         <Form.Select aria-label="Default select example" value={productCategory} onChange={(e) => {setProductCategory(e.target.value)}}>
           <option>Kategoriler</option>
           {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
         </Form.Select>
    
         <Button onClick={handleAddProduct}>Ekle</Button>
         </div>
         <div className = "d-flex align-items-end">  
         <Form.Control type="text" placeholder="FilterName" value={FilteredName} onChange={(e) => {setProductFilteredName(e.target.value)}} />
         <Form.Check
            inline
            label="sıfırla"
            name="group1"
            type={"radio"}
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="alınmış"
            name="alınmış"
            type={"radio"}
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="alınmamış"
            type={"radio"}
            id={`inline-radio-3`}
          />
<Form.Select aria-label="Default select example" value={FilteredShopID} onChange={(e) => {setFilteredShopID(e.target.value)}}>
    <option>Filter Shop</option>
    {shops.map((shop) => <option key={shop.id} value={shop.id}>{shop.name}</option>)}
  </Form.Select>

  <Form.Select aria-label="Default select example" value={FilteredCategoryId} onChange={(e) => {setFilteredCategoryId(e.target.value)}}>
    <option>Filter Category</option>
    {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
  </Form.Select>

    </div>
     <Table>
      <thead>
        <tr key={products.id}>
          <th>Name</th>
          <th>Shop</th>
          <th>Category</th>
          <th>id</th>
          <th>Sil</th>  
        </tr>
      </thead>
      <tbody>
        {products.map((product) => 
        <tr style={{
          textDecoration: product.isBought ? "line-through" : "none",
        }}   onClick={() => {
          const updatedProducts = products.map((oldProduct) =>
         { if(oldProduct.id === product.id){
            return {...oldProduct, isBougth:true}
          }else{
            return oldProduct;
          }}
         ) 
         console.log(updatedProducts)

         setProducts(...updatedProducts)
         }} key={product.id}>
          <td>{product.name}</td>
          <td>{shops.find((shop) => (shop.id === parseInt(product.shop))).name}</td>
          <td>{categories.find((category) => (category.id === parseInt(product.category))).name}</td>
          <td>{product.id}</td>
          <IconButton/>
        </tr>)} 
      </tbody>
     </Table>
        </div>

    )
}