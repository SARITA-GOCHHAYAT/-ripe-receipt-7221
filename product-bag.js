// let men_api="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products?sex=men";
// let api="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products?search=tabby";
// let wallets="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products/?type=wallets";
// let women="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products/?sex=female";

let cont=document.getElementById("container");
let inp=document.getElementById("input");
let api="https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products?search=tabby";
let empty=[];
fetch(api).then(function(res){
    return res.json();
})
.then(function(data){
empty=data;
    display(data);
})
.catch(function(err){
    console.log(err);
})

function display(data){
    data.forEach(e => {
        let div=document.createElement("div");
        div.setAttribute("id","cont-div");
let topdiv=document.createElement("div");
topdiv.setAttribute("id","topdiv");
let left=document.createElement("p");
left.innerHTML="<";
left.setAttribute("class","sign");
let img=document.createElement("img");
img.setAttribute("src",e.image1);
let right=document.createElement("p");
right.innerHTML=">";
right.setAttribute("class","sign");
let botdiv=document.createElement("div");
let name=document.createElement("h2");
name.innerHTML=e.name;
let price=document.createElement("h4");
price.innerHTML=e.price;
let discount=document.createElement("h4");
discount.innerHTML=e.discount;
let sex=document.createElement("p");
sex.innerHTML=e.sex;
let type=document.createElement("p");
type.innerHTML=e.type;
let color=document.createElement("p");
color.innerHTML=e.color;
let buttdiv=document.createElement("div");
buttdiv.setAttribute("id","buttdiv");
let wishbtn=document.createElement("button");
wishbtn.innerHTML="Wishlist";
wishbtn.setAttribute("id","wishbtn");
let cartbtn=document.createElement("button");
cartbtn.innerHTML="Add To Cart";
cartbtn.setAttribute("id","cartbtn");
buttdiv.append(wishbtn,cartbtn);
topdiv.append(left,img,right);
botdiv.append(name,price,discount,sex,type,color);
div.append(topdiv,botdiv,buttdiv);
cont.append(div);
    });
}

inp.addEventListener("input",function(){
    let filtered=empty.filter(function(e){
        if(e.name.toUpperCase().includes(inp.ariaValueMax.toUpperCase())===true){
            return true;
        }else{
            return false;
        }
    })
    display(filtered);
})