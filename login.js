 let login=document.getElementById("loginBtn");
 let signin=document.getElementById("signin");
 let title=document.getElementById("title");
 let email=document.getElementById("email");
 let password=document.getElementById("password");
let home=document.getElementById("home");
let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];
  signin.addEventListener("click",function(event){
    event.preventDefault();
 window.location.href="http://127.0.0.1:5500/-ripe-receipt-7221/signin.html"  ;
  });

  login.addEventListener("click",function(event){
    event.preventDefault();
    if(email.value==""||password.value==""){
        alert("Please fill the all inputs.😑");
    }else{
        let flag=false;
lsSign.forEach(function(e) {
    if(e.email === email.value && e.password ===password.value){
        alert("login successfully");
        window.location.href= "http://127.0.0.1:5500/-ripe-receipt-7221/product-bag.html";
        flag=true;
     return flag;
    }
    
});
if(flag==false){
    let a=false;
lsSign.forEach(function(e){
    if( e.email === email.value && e.password !==password.value ){
    a=true;
    alert("wrong credential");
    password.value="";
    return a;
    }
});
    if(a===false){
        alert("new user😲,Please signin from here.");
        window.location.href= "http://127.0.0.1:5500/-ripe-receipt-7221/signin.html";
}
}
} 
});
 