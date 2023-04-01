 let login=document.getElementById("loginBtn");
 let signin=document.getElementById("signin");
 let title=document.getElementById("title");
 let email=document.getElementById("email");
 let password=document.getElementById("password");
let home=document.getElementById("home");
let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];
  signin.addEventListener("click",function(event){
    event.preventDefault();
 window.location.href="http://127.0.0.1:5501/signin.html"  ;
  });
  login.addEventListener("click",function(event){
    event.preventDefault();
lsSign.forEach(function(e) {
    if(e.email === email.value && e.password ===password.value){
        alert("login successfully");
        window.location.href= "http://127.0.0.1:5501/product-bag.html";
    }else if(e.email !== email.value && e.password ===password.value || e.email === email.value && e.password !==password.value ){
   alert("wrong credential");
    }
    else{
        alert("new user");
        window.location.href= "http://127.0.0.1:5501/signin.html";
    } 
});
});
