//  let api='https://masai-vouchers-api.herokuapp.com/api/vouchers'
//  console.log(api)

async function voucher(){
    let url='https://masai-vouchers-api.herokuapp.com/api/vouchers'
    let res=await fetch(url)
    let data=await res.json()
    append(data[0].vouchers)
    console.log(data)
}

let i=0
function append(data){
 //console.log(data)
 let user1=JSON.parse(localStorage.getItem("user"))||[]
 let container =document.querySelector('.voucher')

 data.forEach(function(ele){
     //console.log(ele.name)
     let div=document.createElement("div")
     div.setAttribute("id","voucher_list")
     let name=document.createElement("p")
     name.innerText=ele.name
     let img=document.createElement("img")
     img.src=ele.image;

     let price=document.createElement("p")
     price.innerText=ele.price;

     let btn=document.createElement("button")
     btn.innerText="BUY"
     btn.setAttribute("class","buy_voucher")
     btn.addEventListener("click",function(){
         store(data[i])
         i++
     })
     //let buy=document.querySelector("#buy_voucher").innerText;
     //console.log(buy)
     //document.querySelector(".buy_voucher").addEventListener("onclick",store())

      div.append(name,img,price,btn)
     container.append(div);

 })
}
//voucher()

function store(index){
  
    let user1=JSON.parse(localStorage.getItem("user"))||[]
    console.log(index)
    for(let i=0;i<user1.length;i++){
        if(user1[i].wallet>index.price){
            alert("Hurray! purchase successful")
        }
        else{
            alert("Sorry! insufficient balance")
        }
    }
    window.location.href="purchase.html"
    console.log(user1[i].wallet)
    console.log(index.price)
    let purch=index;
    let voucher=JSON.parse(localStorage.getItem('purchase'))||[]
    voucher.push(purch);
    localStorage.setItem("purchase",JSON.stringify(voucher))
}
voucher()
