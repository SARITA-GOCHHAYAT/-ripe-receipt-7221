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
    if(email.value==""||password.value==""){
        alert("Please fill the all inputs.😑");
    }else{
        let flag=false;
lsSign.forEach(function(e) {
    if(e.email === email.value && e.password ===password.value){
        flag=true;
     return flag;
    }
    
});
if(flag==true){
    alert("login successfully");
    window.location.href= "http://127.0.0.1:5501/product-bag.html";
}else{
    let a=false;
lsSign.forEach(function(f){
    if( e.email === email.value && e.password !==password.value ){
    a=true;
    return a;
    }
})
if(a==true){
    alert("wrong credential");
    password.value="";
}
    else{
        alert("new user");
        window.location.href= "http://127.0.0.1:5501/signin.html";
}
} 
    }
});
 