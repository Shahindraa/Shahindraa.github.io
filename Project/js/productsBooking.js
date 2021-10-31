let bookBtn = document.getElementById("book")
bookBtn.addEventListener("click", function () {
    let userEarringVariation = document.getElementById("userEarringVariation")
    let userEarringVariationVal = userEarringVariation.value

    let userQuantity = document.getElementById("userQuantity")
    let userQuantityVal = userQuantity.value

    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    book(userEarringVariationVal, userQuantityVal, userNameVal, userEmailVal, userRemarksVal)
})

function book(userEarringVariation, userQuantity, userName, userEmail, userRemarks) {
    let url = 'https://api.sheety.co/e6de24e9738d1ecea88c01732188175a/earringBooking/booking';
    let body = {
        booking: {
            earringVariation: userEarringVariation,
            quantity: userQuantity,
            name: userName,
            email: userEmail,
            remarks: userRemarks,

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
            alert("Thank you " + json.booking.name + "! for your " + json.booking.earringVariation + " earrings booking!")
        });
}

