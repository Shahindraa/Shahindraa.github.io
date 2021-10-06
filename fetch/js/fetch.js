function LoadUser(){
    let url ="https://randomuser.me/api/"

    fetch(url)
    .then((response) => response.json())
    .then (dat => {
        let fn = document.getElementById("firstname")
        let ln = document.getElementById("lastname")
        let phone = document.getElementById("phone")
        let img = document.getElementById("userImg")

        fn.innerHTML = data.results[0].name.first
        ln.innerHTML = data.results[0].name.last
        phone.innerHTML = data.results[0].phone
        img.src = data.results[0].picture.large
    })
}

let eLoadUser = document.getElementById("getRandomUser")
eLoadUser.addEventListener("click", function(){
    LoadUser()
})