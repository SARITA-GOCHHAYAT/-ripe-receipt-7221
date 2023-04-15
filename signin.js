   let form=document.querySelector("form");
   let login = document.getElementById("loginBtn");
    let signin = document.getElementById("signin");
    let nameinp = document.getElementById("name");
    let title = document.getElementById("title");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

 let lsSign=JSON.parse(localStorage.getItem("signdata"))||[];

login.addEventListener("click",function(event){
    event.preventDefault();
window.location.href="http://127.0.0.1:5501/login.html";
 });
 signin.addEventListener("click",function(event){
    if(nameinp.value=="" ||email.value==""||password.value==""){
        alert("Please fill the all inputs.😑");
    }
    else{
        let flag=false;
        lsSign.forEach(ele => {
            if(ele.email==email.value){
            flag=true;
        return flag;
            }
        });
    
    if(flag==true){
        window.location.href="http://127.0.0.1:5501/login.html";  
        alert("Hey! You are a exsisting User.Please login😚"); 
    }else{
    event.preventDefault();
    let obj={
        name:nameinp.value,
        email:email.value,
        password:password.value,
            }
        lsSign.push(obj);
        localStorage.setItem("signdata",JSON.stringify(lsSign));
        alert("signin successfully");
        window.location.href= "http://127.0.0.1:5501/product-bag.html";
    }
}
 });
  
