/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

const submitUser= () => {
    let userData= {
        name: document.getElementById("name").value,
        image: document.getElementById("image").value,
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
    }

    localStorage.setItem("user",JSON.stringify(userData));

    document.getElementById("name").value=null;
    document.getElementById("image").value=null;
    document.getElementById("email").value=null;
    document.getElementById("country").value=null;
}

document.getElementById("submit").addEventListener("click",submitUser);