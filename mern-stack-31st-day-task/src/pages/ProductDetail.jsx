import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Customer from '../components/Customer'
import "./ProductDetail.css"
import ratingstar from "../assets/ratingstar.png"
import Review from '../components/Review'
const ProductDetail = () => {
  const [num,setNum]=useState(1)
  const {id}=useParams();
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedImg,setSelectedImg]=useState("")
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if (!response.ok) {
          throw new Error("Failed To Fetch Products")
        }
        const data = await response.json()
        setProducts(data)
        setSelectedImg(data.thumbnail)
        window.scrollTo(0, 0)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [id])
        
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message={error} />
  }

 function add (){
    setNum(num+1)
 }
 function sub(){
    setNum(num-1)
 }
  return (
    <div>
        <div className='product'>
            <div className='product9' >
            <img src={products.thumbnail} alt={products.title} style={{height:"100px",width:"100px", border:"0.5px solid black" ,borderRadius:"10px"}} onClick={()=>setSelectedImg(products.thumbnail)}/>
            <img src={products.images} alt={products.title} style={{height:"100px",width:"100px",border:"0.5px solid black",borderRadius:"10px"}} onClick={()=>setSelectedImg(products.images[0])} />
        </div>
        <div>
            <img src={selectedImg} alt="" style={{height:"300px" ,width:"300px",border:"0.5px solid black" ,borderRadius:"10px"}} />
        </div>
        <div>
            <h1 className='product1'>{products.title}</h1>
            <div className='product2'>
            <div style={{ display: 'flex', gap: '4px' }}>
             {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            style={{
            fontSize: '22px',
            lineHeight: '1',
            color: star <= Math.round(products.rating) ? '#FFC633' : '#E0E0E0' 
             }}
             >
             ★
           </span>
          ))}
          </div> 
            <p style={{marginTop:"4px"}}>{products.rating} /5</p>
        </div>
        <div className='product4'>
        <h4 >${Math.abs(Math.round((products.price * products.discountPercentage/100)-products.price))}</h4>
        <p className='product3'>{products.price}</p>
        </div>
        <div className='description'style={{marginBottom:"10px"}}>
          <p>{products.description}</p>
        </div>
        <div className='product6'>
        <div className='product5'>
            <p onClick={()=>(sub())}>-</p>
            <p>{num}</p>
            <p onClick={()=>(add())}>+</p>
        </div>
        <button className='product7'>Add To Cart</button>
        </div>
        </div>
        </div>
        <div className='Review1'>
          <h1>OUR HAPPY CUSTOMERS</h1>
          <div className='Review5'>
            {products.reviews.map((review)=>(
              <Review key={review} review={review}/>
            ))}
          </div>
        </div>
    </div>
  )
}
export default ProductDetail