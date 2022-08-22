import sidebar from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML=sidebar();

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

let fetchCountry = async(c) => {
    let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${c}`);
    let data= await res.json();
    console.log(data.articles);
    appendNews(data.articles);
}

fetchCountry(user.country);

let appendNews = (data) => {
    document.getElementById("news_container").innerHTML=null;
    data.map((el)=>{
        let div= document.createElement("div");
        div.setAttribute("class","news");
        div.addEventListener("click",()=>{
            localStorage.setItem("detailNews",JSON.stringify(el));
            window.location.href="./news.html";
        })
        let img= document.createElement("img");
        img.src=el.urlToImage;
        let title=document.createElement("h3");
        title.innerText=el.title;
        let desc= document.createElement("h4");
        desc.innerText=el.author;
        div.append(img,title,desc);
        document.getElementById("news_container").append(div);
    });
}

document.getElementById("in").addEventListener("click",()=>{
    fetchCountry("in");
});

document.getElementById("ch").addEventListener("click",()=>{
    fetchCountry("ch");
});

document.getElementById("us").addEventListener("click",()=>{
    fetchCountry("us");
});

document.getElementById("uk").addEventListener("click",()=>{
    fetchCountry("uk");
});

document.getElementById("nz").addEventListener("click",()=>{
    fetchCountry("nz");
});

const fetchNews = async({key}) => {
    if(key!="Enter") return;
    let query=document.getElementById("search").value;
    let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query}`);
    let data= await res.json();
    console.log(data.articles);
    appendNews(data.articles);
}

document.getElementById("search").addEventListener("keypress",fetchNews);