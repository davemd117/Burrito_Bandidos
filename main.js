// ----- SLICK SLIDER----- //
// $('.slider').slick({
//     // nextArrow: $('#slick-next1'),
//     // prevArrow: $('#slick-prev1'),
//       dots: true,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//       ]
//     });


let userDatabase = [];
let listUsers = [];
let currentUser = [];


// ----- user info class ----- //

class UserInfo {
    constructor(username, firstName, email, password) {
        this.username = username;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
       
    };
};

// test classes to populate storage
userDatabase.push(new UserInfo('bandido1', 'Owner', 'BurBand@email.com', 'Password123'));
userDatabase.push(new UserInfo('davemd', 'Dave', 'dave@email.com', 'Drum&'));
userDatabase.push(new UserInfo('preachey', 'Ryan', 'ryan@email.com', '$hort'));
userDatabase.push(new UserInfo('chris', 'Chris', 'chris@email.com', 'wr1ght'));

//Testing accnts in storage
window.onload =  addUserToStorage(userDatabase)



// ----- database functions ----- //

function addUser() {
    userDatabase.push(new UserInfo(
        $('.sup-user').val(),
        $('.sup-name').val(),
        $('.sup-email').val(),
        $('.sup-password').val()
    ));
}

function addUserToStorage(arr){
    for(i=0;i<arr.length; i++){
        window.localStorage.setItem(`${i}`, JSON.stringify(arr[i]))
    }
}

function retrieveFromStorage(arr){
    Object.keys(localStorage).forEach((key) => {
        arr.push(JSON.parse(localStorage.getItem(key)));
    })

}

// ----- CREATE ACC CHECKS----- //
//Checks if inputs are empty
function checkForInput() {
    if ($('.sup-user').val() === '' || $('.sup-name').val() === '' || $('.sup-email').val() === '' || $('.sup-password').val() === '') {
        return false;
    }
    else {
        return true;
    }
}

//Checks if username is already used
function userDupeCheck() {
    let userUsername = []
    userDatabase.forEach((user) => {
        console.log(user.username)
        userUsername.push(user.username)
    })
    console.log(userUsername.includes($('.sup-user').val()))
    if(userUsername.includes($('.sup-user').val())){
        return false
    }
    else{
        return true
    }
}

//Checks if email is already in use
function emailDupeCheck() {
    let userEmail = []
    userDatabase.forEach((user) => {
        console.log(user.email)
        userEmail.push(user.email)
    })
    console.log(userEmail.includes($('.sup-email').val()))
    if(userEmail.includes($('.sup-email').val())){
        return false
    }
    else{
        return true
    }
}

//Checks if password and confirm password are the same
function checkConfirmPass() {
    let pass = document.getElementById('sup-password').value
    let confirm = document.getElementById('sup-confirm').value
    if (pass === confirm) {
        return true
    }
    else {
        return false
    }
}

//Checks if all password requirements are met
function checkPassReqs() {
    req1 = document.getElementsByClassName('pass-req')[0]
    req2 = document.getElementsByClassName('pass-req')[1]
    req3 = document.getElementsByClassName('pass-req')[2]
    req4 = document.getElementsByClassName('pass-req')[3]
    req5 = document.getElementsByClassName('pass-req')[4]

    if (req1.classList.contains('pass-req-check') && req2.classList.contains('pass-req-check') && req3.classList.contains('pass-req-check') && req4.classList.contains('pass-req-check') && req5.classList.contains('pass-req-check')) {
        return true
    }
    else {
        return false
    }
}

// ----- event functions ----- //

//When signup button is clicked check form values for duplicates or empty fields
// Make new instance of UserInfo and push into userDatabase
// Send userDatabase to local storage
//Clear fields
$('.sup-submit').click(() => {
    if (userDupeCheck() && emailDupeCheck() && checkForInput() && checkPassReqs() && checkConfirmPass()){
        addUser();
        addUserToStorage(userDatabase)
        $('.sup-good').show()
        $('.sup-bad').hide()
        $('.sup-name').val("")
        $('.sup-email').val("")
        $('.sup-user').val("")
        $('.sup-password').val("")
        $('.sup-confirm').val("")
    }
    else {
        $('.sup-bad').show()
        $('.sup-good').hide()
    }
});

//Pressing Enter on signup form
 let supInputs = document.querySelectorAll(".sup-input")
supInputs.forEach((input) => {
    input.addEventListener("keypress", pressEnter)
})
function pressEnter(event){
   let inputs = document.querySelectorAll(".sup-input")
    if(event.keyCode === 13){
        for(i=0; i<inputs.length; i++){
            if(inputs[i] === this){
                i++
                inputs[i].focus()
            }
            else if(i === 3){
                return
            }
        }
    }
}
$('.log-user').keydown((event) =>{
    if(event.keyCode ===13){
        $('.log-pass').focus()
    }
})
$('.log-pass').keydown((event) =>{
    if(event.keyCode ===13){
        $('.log-submit').click()
    }
})

// -----Go to Log-in ----- //
$('.go-to-login').click(()=>{
    $('.form-log').css("transform", "scale(1)")
})

// -----Go Back To Home ----- //
$('.back-to-home').click(() => {
    $('.form-log').css("transform", "scale(0)")
})

// ----- Go to signup page ----- //
$('.go-to-sup').click(() => {
    $(".form-log").addClass('animate__animated')
    $('.form-log').toggleClass('animate__zoomOutLeft')
    $(".form-log").removeClass('animate__zoomInRight')

    $('.form-sup').css("visibility", "visible")
    $(".form-sup").addClass('animate__animated')
    $(".form-sup").toggleClass('animate__zoomInRight')
    $(".form-sup").removeClass('animate__zoomOutLeft')
});

// ----- Go Back to log-in----- //
$('.back-btn').click(() => {
    $(".form-sup").removeClass('animate__zoomInRight')
    $(".form-sup").addClass('animate__zoomOutLeft')

    $(".form-log").addClass('animate__zoomInRight')
    $(".form-log").removeClass('animate__zoomOutLeft')
});



// ----- Show password requirements ----- //

$('.sup-password').focusin(() => {
    $('.pass-needs').slideDown(500);
    $('.sup-password').focusout(() => {
        $('.pass-needs').slideUp(500);
    });
});



// ----- Signup Password requirement verification ----- //
$('.sup-password').on('input', () => {
    let pass = $('.sup-password').val();
    let passLength = pass.length;
    let passUpper = /[A-Z]/.test(pass);
    let passLower = /[a-z]/.test(pass);
    let passNum = /[0-9]/.test(pass);
    let passSpecial = /[^A-Za-z0-9]/.test(pass);

    if (passLength >= 8) {
        // console.log("more than 8")
        $('.length-req').addClass("pass-req-check")
        $('.length-req ion-icon').attr("name", "checkmark-outline")
    }
    else{
        $('.length-req').removeClass("pass-req-check")
        $('.length-req ion-icon').attr("name", "close-outline")
    }
    if (passUpper) {
        // console.log('has uppercase')
        $('.upper-req').addClass("pass-req-check")
        $('.upper-req ion-icon').attr("name", "checkmark-outline")
    }
    else{
        $('.upper-req').removeClass("pass-req-check")
        $('.upper-req ion-icon').attr("name", "close-outline")
    }
    if (passLower) {
        // console.log('has lowercase')
        $('.lower-req').addClass("pass-req-check")
        $('.lower-req ion-icon').attr("name", "checkmark-outline")
    }
    else{
        $('.lower-req').removeClass("pass-req-check")
        $('.lower-req ion-icon').attr("name", "close-outline")
    }
    if (passNum) {
        // console.log('has number')
        $('.num-req').addClass("pass-req-check")
        $('.num-req ion-icon').attr("name", "checkmark-outline")

    }
    else{
        $('.num-req').removeClass("pass-req-check")
        $('.num-req ion-icon').attr("name", "close-outline")
    }
    if (passSpecial) {
        // console.log('has special char')
        $('.spec-req').addClass("pass-req-check")
        $('.spec-req ion-icon').attr("name", "checkmark-outline")
    }
    else{
        $('.spec-req').removeClass("pass-req-check")
        $('.spec-req ion-icon').attr("name", "close-outline")
    }
    if (passLength < 8 || !passUpper || !passLower || !passNum || !passSpecial) {
        // console.log(false)
    }
    else {
        checkPassReqs()
    }
})

// ----- Log-in ----- //

$('.log-submit').click(() => {
    let logPassword = $('.log-pass').val()
    let logUsername = $('.log-user').val()
    retrieveFromStorage(listUsers) // Grab local storage and push it into listUsers
    for(users of listUsers){
        if(logUsername ==="bandido1" && logPassword === "Password123" ){
            console.log(users)
            // $('.log-pass').val("")
            // $('.log-user').val("")
            $('.err-mess').hide()
            $('#welcome').text(`Welcome ${users.firstName}`)
            $('#welcome').show()
            // console.log(users[0])
            currentUser.length = 0
            currentUser.push(users)
            window.localStorage.removeItem("Current User")
            window.localStorage.setItem("Current User", JSON.stringify(currentUser[0]))
            window.location.href = "Manager-Menu-Page.html"
        }
        else if(logUsername === users.username && logPassword === users.password){
            // $('.log-pass').val("")
            // $('.log-user').val("")
            $('#welcome').text(`Welcome ${users.firstName}`)
            $('#welcome').show()
            $('.err-mess').hide()
            currentUser.length = 0
            currentUser.push(users)
            window.localStorage.removeItem("Current User")
            window.localStorage.setItem("Current User", JSON.stringify(currentUser))
            console.log("user")
            // window.location.href = "https://www.google.com/"
           
            

        }
        else if(logUsername === users.username && logPassword !== users.password){
            console.log("WRONG PASSWORD")
            $('.err-mess').text("WRONG PASSWORD")
            $('.err-mess').show()
            
        }
        else if(logUsername !== users.username && logPassword === users.password){
            console.log("WRONG USERNAME")
            $('.err-mess').text("USERNAME DOESNT MATCH PASSWORD")
            $('.err-mess').show()
        }
        else if( logUsername === '' || logPassword === ''){
            $('.err-mess').text("One or both of the fields are empty")
            $('.err-mess').show()
        }
    }
})

//make signout button
function makeSignout(){
    // let logBtn = document.getElementById('go-to-login')
    let nav = document.getElementById('nav-links')
    let link = document.createElement('a')
    link.removeAttribute("href")
    link.classList.add("go-to-profile")
    link.setAttribute("id", "go-to-profile")

    let navLink = document.createElement('li')
    navLink.innerHTML = "Profile"
    link.appendChild(navLink)
    nav.appendChild(link)

}
// STICKY NAV
function addSticky(){
    let nav = document.getElementById("nav-bar")
    let sticky = nav.offsetTop
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky")
        // nav.classList.remove("clear")
    } else {
        nav.classList.remove("sticky");
        // nav.classList.add("clear")
    }
}
// SHOW BACKGROUNDS ON SCROLL
 function showOnScroll(){
    var sections = document.querySelectorAll('.reveal')

    for(i=0; i<sections.length; i++){
        var windowHeight = window.innerHeight
        var sectionTop = sections[i].getBoundingClientRect().top
        var revealpoint = 150;

        if(sectionTop < windowHeight - revealpoint){
            sections[i].classList.remove('animate__fadeOutLeft')
            sections[i].classList.add('animate__fadeInLeft')
            let sectionItems = sections[i].children
            console.log(sectionItems)
            for(j=0;  j < sectionItems.length; j++){
                sectionItems[j].classList.remove("animate__lightSpeedOutLeft")
                sectionItems[j].classList.add("animate__animated")
                sectionItems[j].classList.add("animate__delay-1s")
                sectionItems[j].classList.add("animate__lightSpeedInRight")
            }
        }
        else{
            sections[i].classList.remove('animate__fadeInLeft')
            sections[i].classList.add('animate__fadeOutLeft')
            let sectionItems = sections[i].children
            for(j=0;  j < sectionItems.length; j++){
                sectionItems[j].classList.remove("animate__lightSpeedInRight")
                sectionItems[j].classList.add("animate__lightSpeedOutLeft")
            }
        }
    }
 }

 window.addEventListener("scroll", showOnScroll);
 window.addEventListener("scroll", addSticky);
