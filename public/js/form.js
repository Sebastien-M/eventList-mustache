"use strict";




let step1 = document.getElementById("step1")
let step2 = document.getElementById("step2")
let step3 = document.getElementById("step3")
let send1 = document.getElementById("send1")
let send2 = document.getElementById("send2")
let finalsend = document.getElementById("finalsend")
let titre1 = document.getElementById('titre1');
let titre2 = document.getElementById('titre2');
let titre3 = document.getElementById('titre3');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');



send1.addEventListener('click', function(e) {
    step1.style.opacity = 0;
    step1.style.display = 'none';
    titre1.style.display = "none";
    titre2.style.display = "block";
    step2.style.display = 'block';

    setTimeout(function() {

        step2.style.opacity = 1;
    }, 10);
    e.preventDefault();

})
send2.addEventListener('click', function(e) {
    step2.style.opacity = 0;
    step2.style.display = 'none';
    titre2.style.display = "none";
    titre3.style.display = "block";
    step3.style.display = 'block';

    setTimeout(function() {

        step3.style.opacity = 1;
    }, 10);
    e.preventDefault();

})
back2.addEventListener('click', function(e) {
    titre2.style.display = "none";
    step2.style.display = 'none';
    step1.style.display = 'block';
    titre1.style.display = "block";


    setTimeout(function() {

        step1.style.opacity = 1;
    }, 10);

    e.preventDefault();

})
back3.addEventListener('click', function(e) {
    titre3.style.display = "none";
    step3.style.display = 'none';
    step2.style.display = 'block';
    titre2.style.display = "block";

    setTimeout(function() {

        step2.style.opacity = 1;
    }, 10);

    e.preventDefault();

})



document.querySelector("#endForm").addEventListener("click", function(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let orga = document.getElementById("orga").value;
    let cat = document.getElementById("cat").value;
    let loca = document.getElementById("location").value;
    let date = document.getElementById("date").value;
    let text = document.getElementById("text").value;
    if (title === "" ||
        orga === "" ||
        cat === "" ||
        loca === "" ||
        date === "" ||
        text === "") {
        console.log("All fields must be completed");
        // document.querySelector("#statut").textContent = "Error";


        document.querySelector('#endForm').innerHTML = '<i class= "fa fa-times" aria-hidden="true"></i>';
        document.querySelector('#endForm').className = "btnP btn btn-danger col-md-2";
        document.querySelector("#result").textContent = "All fields must be completed!";
        setTimeout(function() {
            document.querySelector('#endForm').innerHTML = '<i class= "fa fa-check" aria-hidden="true"></i>';
            document.querySelector('#endForm').className = "btnP btn btn-success col-md-2";

        }, 1000);



    } else {
        console.log("OK");
        // document.querySelector("#statut").textContent = "Complete";
        document.querySelector("#result").textContent = "You have successfully completed all steps.";

        //SENDING AJAX REQUEST TO THE PAGE /EVENT/ADD HANDLED BY EXPRESS SERVER
        let params = "name=" + title + "&location=" + loca + "&orga=" + orga + "&cat=" + cat + "&date=" + date + "&desc=" + text;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/event/add', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Form sent");
                    window.location = "/";
                }
            }
        }
        xhr.send(params);

    }
});