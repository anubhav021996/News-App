import sidebar from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML=sidebar();

document.getElementById("home_link").addEventListener("click",()=>{
    window.location.href="./index.html";
});

document.getElementById("world_news_link").addEventListener("click",()=>{
    window.location.href="./worldNews.html";
});

let user= JSON.parse(localStorage.getItem("user"));
let country;
if(user.country=="in") country="India"
else if(user.country=="us") country="USA"
else if(user.country=="ch") country="China"
else if(user.country=="uk") country="UK"
else country="New Zealand"

document.getElementById("image").src=user.image;
document.getElementById("name").innerText=user.name;
document.getElementById("email").innerText=user.email;
document.getElementById("country").innerText=country;

let detailNews= JSON.parse(localStorage.getItem("detailNews"));

let appendNews = (data) => {
    let container= document.getElementById("show_news");

    let img= document.createElement("img");
    img.src=data.urlToImage;
    let title=document.createElement("h3");
    title.innerText=data.title;
    let desc= document.createElement("h4");
    desc.innerText=data.description;
    container.append(img,title,desc);
}

appendNews(detailNews);