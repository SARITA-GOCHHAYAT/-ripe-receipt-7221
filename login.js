 let login=document.getElementById("loginBtn");
 let signin=document.getElementById("signin");
 let title=document.getElementById("title");
 let email=document.getElementById("email");
 let password=document.getElementById("password");
let home=document.getElementById("home");
home.addEventListener("click",function(){
    window.location.href=""  ;
});
 let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];
  signin.addEventListener("click",function(event){
    event.preventDefault();
 window.location.href="http://127.0.0.1:5500/signin.html"  ;
  });
  login.addEventListener("click",function(event){
    event.preventDefault();
lsSign.forEach(function(e) {
    if(e.email === email.value && e.password ===password.value){
        alert("LogIn sucessfully");
        window.location.href= "http://127.0.0.1:5500/product.html";
    }else{
        alert("New User please SignIn");
        window.location.href= "http://127.0.0.1:5500/signin.html";
    } 
});
});
