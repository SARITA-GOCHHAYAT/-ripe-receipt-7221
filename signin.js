    let login = document.getElementById("loginBtn");
    let signin = document.getElementById("signin");
    let nameinp = document.getElementById("name");
    let title = document.getElementById("title");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let home=document.getElementById("home");

 
login.addEventListener("click",function(event){
    event.preventDefault();
window.location.href="http://127.0.0.1:5500/login.html";
 });

 home.addEventListener("click",function(){
    window.location.href="http://127.0.0.1:5500/index.html"  ;
});

    let lsSign = JSON.parse(localStorage.getItem("signdata")) || [];

    signin.addEventListener("submit", function (event) {
       
        event.preventDefault();

        
        lsSign.forEach(function (e) {
            if (e.email === email.value) {
                alert("Existed User");
                window.location.href = "http://127.0.0.1:5500/login.html";
                alert("Please Login here");
            } else {
                let obj = {
                name: nameinp.value,
                email: email.value,
                password: password.value,
            }
            lsSign.push(obj);
                alert("sign in succesfully");
                window.location.href = "http://127.0.0.1:5500/product.html";
                localStorage.setItem("signdata", JSON.stringify(lsSign));
            }
        }); 
    });
