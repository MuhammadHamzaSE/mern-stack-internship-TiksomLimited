let data =  []
const products=document.querySelector(".products")
const searchProducts=document.getElementById("searchProducts")
const category=document.getElementById("category")
const sort=document.getElementById("sort")

async function getUser() {
    try{
    const response=await fetch ("https://dummyjson.com/products")
     data = await response.json()
    if(!response.ok){
        console.log("Something Went Wrong")  
    }else{

         renderHtml(data)
        
    }
    
    }catch(error){
        console.log(error.message)
    }
}

function renderHtml(item, filter = false){
    if (!filter) {
        item.products.forEach((user) => {
            const card=document.createElement("div")
            card.classList.add("card")
            const text=document.createElement("div")
            text.classList.add("text")
            const disc=document.createElement("div")
            disc.classList.add("discount")
            const pric=document.createElement("div")
            pric.classList.add("pric")

            const image=document.createElement("img")
            const title=document.createElement("h3")
            const card_category=document.createElement("p")
            const price=document.createElement("p")
            const rating=document.createElement("p")
            const stock_status=document.createElement("p")
            const detail_button=document.createElement("button")
            const discount=document.createElement("p")
            const discountPrice=document.createElement("h3")
            const originalPrice=document.createElement("p")
            // const finaPrice=document.createElement("h3")

            detail_button.classList.add("btn-detail")
            image.classList.add("image")
            title.classList.add("title")
            rating.classList.add("rating")
            stock_status.classList.add("stock")
            card_category.classList.add("category")

            

            image.src=user.thumbnail;
            title.textContent=user.title;
            discount.textContent=`-${user.discountPercentage}%`;
            card_category.textContent=user.category;
            price.textContent=user.price;
            rating.textContent=`⭐ ${user.rating}`;
            if(user.stock>10){
                stock_status.textContent="In Stock"
                stock_status.style.color="green"
            }else{
                stock_status.textContent="Out Stock";
                stock_status.style.color="red";
            }
            // stock_status.textContent=user.stock;
            detail_button.textContent="View Details";
            discountPrice.textContent=`$ ${Math.abs(Math.round((user.price*user.discountPercentage/100)-user.price))}`
            // finaPrice.textContent=Math.abs(discountPrice)
            originalPrice.textContent=user.price
            originalPrice.style.textDecoration="line-through"
            originalPrice.style.marginTop="2px"
            originalPrice.style.color="lightgrey"

            text.appendChild(rating)
            text.appendChild(stock_status)
            disc.appendChild(discount)
            pric.appendChild(discountPrice)
            pric.appendChild(originalPrice)
            
            card.appendChild(image)
            card.appendChild(disc)
            card.appendChild(title)
            card.appendChild(card_category)
            card.appendChild(text)
            // card.appendChild(rating)
            // card.appendChild(stock_status)
            // card.appendChild(discountPrice)
            // card.appendChild(originalPrice)
            card.appendChild(pric)

            // card.appendChild(finaPrice)
            card.appendChild(detail_button)
            products.appendChild(card)
            }); 
        
    }
    else{
        products.innerHTML=" "
        item.forEach((user) => {
            const card=document.createElement("div")
            card.classList.add("card")
            const text=document.createElement("div")
            text.classList.add("text")
            const disc=document.createElement("div")
            disc.classList.add("discount")
            const pric=document.createElement("div")
            pric.classList.add("pric")

            const image=document.createElement("img")
            const title=document.createElement("h3")
            const card_category=document.createElement("p")
            const price=document.createElement("p")
            const rating=document.createElement("p")
            const stock_status=document.createElement("p")
            const detail_button=document.createElement("button")
            const discount=document.createElement("p")
            const discountPrice=document.createElement("h3")
            const originalPrice=document.createElement("p")

            detail_button.classList.add("btn-detail")
            image.classList.add("image")
            title.classList.add("title")
            rating.classList.add("rating")
            stock_status.classList.add("stock")
            card_category.classList.add("category")

            

            image.src=user.thumbnail;
            title.textContent=user.title;
            discount.textContent=`-${user.discountPercentage}%`;
            card_category.textContent=user.category;
            price.textContent=user.price;
            rating.textContent=`⭐ ${user.rating}`;
            if(user.stock>10){
                stock_status.textContent="In Stock"
                stock_status.style.color="green"
            }else{
                stock_status.textContent="Out Stock";
                stock_status.style.color="red";
            }
            detail_button.textContent="View Details";
            discountPrice.textContent=`$ ${Math.abs(Math.round((user.price*user.discountPercentage/100)-user.price))}`
            originalPrice.textContent=user.price
            originalPrice.style.textDecoration="line-through"
            originalPrice.style.marginTop="2px"
            originalPrice.style.color="lightgrey"

            text.appendChild(rating)
            text.appendChild(stock_status)
            disc.appendChild(discount)
            pric.appendChild(discountPrice)
            pric.appendChild(originalPrice)
            
            card.appendChild(image)
            card.appendChild(disc)
            card.appendChild(title)
            card.appendChild(card_category)
            card.appendChild(text)
            card.appendChild(pric)
            card.appendChild(detail_button)

            products.appendChild(card)
            }); 
        
    }

}
function filteredProducts(){
    const searchProductByName=searchProducts.value.toLowerCase().trim()
    const categorySearch=category.value
    const sortProducts=sort.value

    const filteredResult=data.products.filter((item)=>{
        const finalProductSearch=item.title.toLowerCase().includes(searchProductByName)
        const finalCategorySearch=categorySearch==="all" || item.category===categorySearch

        return finalProductSearch && finalCategorySearch ;
    })
            if(sortProducts==="Low to High"){
           filteredResult.sort((a,b)=>a.price-b.price )
        }else if(sortProducts==="High To Low"){
            filteredResult.sort((a,b)=>b.price-a.price )
        }
    
    renderHtml(filteredResult, true)
}

searchProducts.addEventListener("input",filteredProducts)
category.addEventListener("change",filteredProducts)
sort.addEventListener("change",filteredProducts)
 getUser()