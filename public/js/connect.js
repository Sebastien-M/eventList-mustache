let conect = document.querySelector('#formCo')
let sign = document.querySelector('#cobtn')
let welcom = document.querySelector('#rm');





conect.style.display = "none";


sign.addEventListener('click', function() {
    conect.style.display = "block";
    welcom.style.display = "none";

})