var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }
   
  let body= document.body
  
  let container=document.createElement('div')
  container.classList.add('container')

  let imgContainer= document.createElement('div')
  imgContainer.classList.add('container1')

  let img= document.createElement('img')
  img.classList.add('preview')

  img.src=productData.preview
  body.append(container)
  container.append(imgContainer)
  imgContainer.append(img)

  let textContainer= document.createElement('div')
  textContainer.classList.add('container2')

  let headingText= document.createElement('div')
  headingText.classList.add('heading-text')
  let heading= document.createElement("h1")
  

  heading=productData.name
  body.append(container)
  container.append(textContainer)
  textContainer.append(headingText)
  headingText.append(heading)
  
  let paragraph=document.createElement('div')
  paragraph.classList.add('para')
  let para=document.createElement('p')
  

  para=productData.brand
  body.append(container)
  container.append(textContainer)
  textContainer.append(paragraph)
  paragraph.append(para)

  let priceVal= document.createElement('div')
  priceVal.classList.add('price')
  let price=document.createElement('h1')

  price=productData.price
  body.append(container)
  container.append(textContainer)
  textContainer.append(priceVal)
  priceVal.append("Rs ",price)

  let heading1=document.createElement("div")
  heading1.classList.add('heading1')
  let desc=document.createElement('h1')

  body.append(container)
  container.append(textContainer)
  textContainer.append(heading1)
  heading1.append(desc)
  desc.append("Description")

  let paraVal=document.createElement('div')
  paraVal.classList.add('paraVal')
  let content=document.createElement('p')

  content=productData.description
  body.append(container)
  container.append(textContainer)
  textContainer.append(paraVal)
  paraVal.append(content)

  let product=document.createElement('div')
  product.classList.add('para2')
  let para3=document.createElement('p')

  body.append(container)
  container.append(textContainer)
  textContainer.append(product)
  product.append(para3)
  para3.append("Product Preview")
  
  let active= document.createElement("div")
  active.classList.add('active')
  let active1=document.createElement('p')

  body.append(container)
  container.append(textContainer)
  textContainer.append(active)

  for(let i=0; i<=productData.photos.length; i++){
    //console.log(i)

    let img1=document.createElement('img')
    img1.classList.add("preview-images")
    
    //rendering the images 
    img1.setAttribute('src',productData.photos[i])
    
    //appending the images on top of the screen
    body.append(container)
    container.append(textContainer)
    textContainer.append(img1)
  }

  const element= document.querySelectorAll(".preview-images")
  
  //creating active class for each element.
  element.forEach((elm)=>{
    elm.addEventListener("click", ()=>{
      document.querySelector('.active').classList.remove("active")
      elm.classList.add('active')

      
     //rendering the img on preview(left-hand) side image
      img.setAttribute("src",elm.src)
      
    })
  })
