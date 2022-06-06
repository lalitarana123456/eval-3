// let prchaseitem=JSON.parse(localStorage.getItem("purchase"))||[]

function append(){
    let purchaseitem=JSON.parse(localStorage.getItem("purchase"))||[]
    let container=document.getElementById('purchased_vouchers')
    let balance=document.getElementById('wallet_balance')
    purchaseitem.foreach(function(ele){
     let div=document.createElement("div")
     let name=document.createElement("p")
     name.innerText=ele.name;

     let img=document.createElement("img")
     img.src=ele.image;

     let price=document.createElement("p");
     price.innerText=ele.price;

     let h3=document.createElement("h3");
     h3.innerText=(purchaseitem[i].price-ele.price)
     balance.append(h3)
     div.append(name,img,price,h3)
     container.append(div,balance);
   })
   
}
append()