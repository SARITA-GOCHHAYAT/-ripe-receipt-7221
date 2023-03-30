 let login=document.getElementById("loginBtn");
 let signin=document.getElementById("signin");
 let title=document.getElementById("title");
 let email=document.getElementById("email");
 let password=document.getElementById("password");
let home=document.getElementById("home");
home.addEventListener("click",function(){
    window.location.href=""  ;
});
 let lsSign=JSON.parse(localStorage.getItem("sdata"))||[];
  signin.addEventListener("click",function(event){
    event.preventDefault();
 window.location.href="http://127.0.0.1:5501/signin.html"  ;
  });
  login.addEventListener("click",function(event){
    event.preventDefault();
lsSign.forEach(function(e) {
    if(e.email === email.value && e.password ===password.value){
        alert("LogIn sucessfully");
        window.location.href= "http://127.0.0.1:5501/product-bag.html";
    }else{
        alert("New User please SignIn");
        window.location.href= "http://127.0.0.1:5501/signin.html";
    } 
});
});
