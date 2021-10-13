let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function(){
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    bookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)
})

function bookNow(userName, userEmail, userPax, userRemarks){
    let url = 'https://api.sheety.co/e6de24e9738d1ecea88c01732188175a/bookingApp/bookings';
    let body = {
      booking: {
        name: userName,
        email: userEmail,
        pax: userPax,
        remarks: userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
      console.log(json.booking.length);
          alert(json.booking.name + " added in the list!")
    });
}