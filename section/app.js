

const btn=document.getElementsByClassName("btn");

const productInCartArray=[]
const minusPlus=document.getElementsByClassName("num").value;
console.log(minusPlus);

// minusPlus.addEventListener('click',changeQuantity)
// function changeQuantity(){
//     let newQty=document.getElementsByClassName("num").value;
//     console.log(newQty);

// }
// // --------------------------------------------------------------using Arroy function-------------------------------------------------

for(var i=0;i<btn.length;i++){
    let cartBtn=btn[i];
    cartBtn.addEventListener('click',()=>{
        // console.log(event.target.parentElement.parentElement.children[2].children[0].innerHTML);
        let productObj={
            image:event.target.parentElement.parentElement.children[0].children[0].src,
            name:event.target.parentElement.parentElement.children[1].children[0].innerHTML,
            price:event.target.parentElement.parentElement.children[2].children[0].innerHTML,
            // number:parseInt(event.target.parentElement.parentElement.children[2].children[0].innerHTML),
            totalPrice:parseInt(event.target.parentElement.parentElement.children[2].children[0].innerHTML),
            quantity: 1
        }
        addToLocalStorage(productObj)  //creatting a function to store the data from object "productObj"
    })
}


function addToLocalStorage(productObj){
  let number=document.getElementsByClassName("num").value;
 
 let cartItem=JSON.parse(localStorage.getItem('productIncart'))
 if(cartItem==null){
         productInCartArray.push(productObj)
         localStorage.setItem('productIncart',JSON.stringify(productInCartArray))
        console.log(cartItem);
 }
 else{
     cartItem.forEach(item => {
         if(productObj.name == item.name){ 
            productObj.quantity = item.quantity += 1;
            productObj.totalPrice = (item.price * productObj.quantity);
         }
         else{
            productInCartArray.push(item);
         }
        
     });
     productInCartArray.push(productObj);
 }
 localStorage.setItem('productIncart',JSON.stringify(productInCartArray))
 window.location.reload()
//console.log(productObj);

}


function displayCartItem()
{
    var html='';
    let cartItem=JSON.parse(localStorage.getItem('productIncart'))
    cartItem.forEach(item => {
        html = html + `
        <div class="cartItem">
        <div class="img" >
               <img src="${item.image}" alt="">
        </div>
        <div class="name">
             <h4>${item.name}</h4>
        </div>
        <div class="price">
                 <h4>${item.price}</h4>
        </div>
        <span> ${item.quantity}</span>
        <div class="totalprice">
        <h4>${item.totalPrice}</h4>
          </div>
      </div>
            `
    });
    document.querySelector('.cartList').innerHTML=html;

    // console.log(html);
}

 displayCartItem()

// // --------------------------------------------------------------using Normal function-------------------------------------------------
// //    btn.addEventListener('click',AddToCart())
// // function AddToCart()
// // {
 
// //    for(var i=0;i<btn.length;i++)
// //     {     
// //      console.log(event.target.parentElement.parentElement.children[0].children[0].src);
// //     } 
// // }
