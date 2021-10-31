let refreshBtn = document.getElementById("refresh")
refreshBtn.addEventListener("click", function () {
    GetList()
})

function GetList() {
    let url = 'https://api.sheety.co/e6de24e9738d1ecea88c01732188175a/earringBooking/booking';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.booking);

            let bookingList = document.getElementById("bookingList")
            let bookingIds = []

            //deleting all rows in table
            for (let k = bookingList.rows.length - 1; k > 0; k--) {
                bookingList.deleteRow(k)
            }

            //loading all rows of booked earrings
            for (let i = 0; i < json.booking.length; i++) {
                let gEarringVariation = json.booking[i].earringVariation;
                let gQuantity = json.booking[i].quantity;
                let gName = json.booking[i].name;
                let gEmail = json.booking[i].email;
                let gRemarks = json.booking[i].remarks;
                let gId = json.booking[i].id;
                let btnId = "delete" + gId;

                let row = bookingList.insertRow(bookingList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gEarringVariation
                row.insertCell(2).innerHTML = gQuantity
                row.insertCell(3).innerHTML = gName
                row.insertCell(4).innerHTML = gEmail
                row.insertCell(4).innerHTML = gRemarks
                row.insertCell(5).innerHTML = "<button id ='" + btnId + "'type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteList(theId)
                })
            }
        });
}

function DeleteList(id) {
    let url = 'https://api.sheety.co/e6de24e9738d1ecea88c01732188175a/earringBooking/booking/2';
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("List with id " + id + " deleted!")
            GetList()
        });
}