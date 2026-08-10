import React from 'react'
import { useState } from 'react'

const Products = () => {
        const products=[
        {id:1,name:"Laptop",company:"Dell",price:80000,manufacturing_date:"12-03-2020"},
        {id:2,name:"CPU",company:"Hp",price:50000,manufacturing_date:"12-05-2022"},
        {id:3,name:"Printer",company:"HP",price:25000,manufacturing_date:"18-11-2023"}
    ]
    let [searchTerm,setSearchTerm]=useState("");
    const filteredProducts=products.filter((product)=>{
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  return (
    <div style={{textAlign:'center'}}>
        <p>----------------------------------------------------------------------------</p>
        <h2>Products Dashboard</h2>
        <input type="text" placeholder='Enter the Product Name :' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <br />
        <br />
        {filteredProducts.length>0 ?(
            filteredProducts.map((product)=>{
                return <li key={product.id}>
                    ID: {product.id} -
                    Name : {product.name} - Company : {product.company} - Price : {product.price} - Manufacturing Date : {product.manufacturing_date} 
                </li>
            })
        ):(
            <h3>No Student Found</h3>
        )}
    </div>
  )
}

export default Products
