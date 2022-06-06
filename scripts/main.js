function details(n,e,a,w){
  this.name=n;
  this.email=e;
  this.address=a;
  this.wallet=w;
}


function data(e){
    e.preventDefault()
    let name=document.getElementById("name").value;

    let email=document.getElementById("email").value;

    let address=document.getElementById("address").value;

    let amount=document.getElementById("amount").value;

    //console.log(name,email,address,amount)
  //  console.log("jkbgjgj")
  let users=new details(name,email,address,amount)
  console.log(users)
  let user1=JSON.parse(localStorage.getItem("user"))||[]
  
  //console.log(users)
  user1.push(users)

  localStorage.setItem("user",JSON.stringify(user1))
//   document.querySelector("#name").innerHTML=null;
  
  console.log(user1)

  
}
document.querySelector("#name").innerHTML=null;