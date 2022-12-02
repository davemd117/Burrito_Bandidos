


let userDatabase = [];
let listUsers = [];
let currentUser = [];


// ----- user info class ----- //

class UserInfo {
    constructor(username, firstName, email, password,points,favorites) {
        this.username = username;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.points = points
        this.favorites = favorites
       
    };
};

// test classes to populate storage
userDatabase.push(new UserInfo('bandido1', 'Owner', 'BurBand@email.com', 'Password123', 100000000000));
userDatabase.push(new UserInfo('davemd', 'Dave', 'dave@email.com', 'Drum&',100000000000));
userDatabase.push(new UserInfo('preachey', 'Ryan', 'ryan@email.com', '$hort',100000000000));
userDatabase.push(new UserInfo('chris', 'Chris', 'chris@email.com', 'wr1ght',100000000000));

//Testing accnts in storage
window.onload =  addUserToStorage(userDatabase)



// ----- database functions ----- //

function addUser() {
    userDatabase.push(new UserInfo(
        $('.sup-user').val(),
        $('.sup-name').val(),
        $('.sup-email').val(),
        $('.sup-password').val(),
        500,
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
    $(".form-log").removeClass('animate__zoomInRight')
    $(".form-log").removeClass('animate__zoomOutLeft')
    $(".form-log").removeClass('animate__animated')
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
            window.localStorage.setItem("Current User", JSON.stringify(currentUser))
            showSignout()
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
            showSignout()
            console.log("user")
            window.location.href = "menu.html"
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
function showSignout(){
    let currentUser = JSON.parse(localStorage.getItem('Current User'));
    logbtn = document.getElementById("go-to-login")
    profbtn = document.getElementById("go-to-profile")
    logbtn.style.display = "none"
    profbtn.style.display = "block"
    profbtn.innerHTML = `${currentUser[0].firstName}\'s Profile`
    // POPULATE PROFILE
    let usersname = currentUser[0].firstName
    let usersemail = currentUser[0].email
    let userspoints = currentUser[0].points
    let displayname = document.getElementById("users-name")
    let displayemail = document.getElementById("users-email")
    displaypoints = document.getElementById("users-points")
    displayname.innerHTML = usersname
    displayemail.innerHTML = usersemail
    displaypoints.innerHTML = `Points: ${userspoints}`
}

// SIGNOUT
function checkForUser(){
    logbtn = document.getElementById("go-to-login")
    profbtn = document.getElementById("go-to-profile")
    
    if(window.localStorage.getItem("Current User")){
        let currentUser = JSON.parse(localStorage.getItem('Current User'));
        profbtn.style.display = "block"
        logbtn.style.display = "none"
        profbtn.innerHTML = `${currentUser[0].firstName}\'s Profile`
        // POPULATE PROFILE
        let usersname = currentUser[0].firstName
        let usersemail = currentUser[0].email
        let userspoints = currentUser[0].points
        let displayname = document.getElementById("users-name")
        let displayemail = document.getElementById("users-email")
        displaypoints = document.getElementById("users-points")
        displayname.innerHTML = usersname
        displayemail.innerHTML = usersemail
        displaypoints.innerHTML = `Points: ${userspoints}`
    }
    else{
        console.log("NOT There")
        profbtn.style.display = "none"
        logbtn.style.display = "block"
    }
}
$("#go-to-profile").click(() => {
    profile = document.getElementById("profile-form")
    profile.style.transform = "scale(1)"
 })
 $("#exit-profile").click(() => {
    profile = document.getElementById("profile-form")
    profile.style.transform = "scale(0)"
 })
$("#sign-out").click(() => {
    localStorage.removeItem("Current User")
 })


 window.addEventListener("scroll", showOnScroll);
 window.addEventListener("scroll", addSticky);
 window.addEventListener("scroll", stickFooter);
 window.onload = checkForUser()



// STICKY NAV
function addSticky(){
    let nav = document.getElementById("nav-bar")
    let foot = document.getElementById("footer")
    let sticky = nav.offsetTop
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky")
        foot.classList.remove("animate__slideOutDown")
        foot.classList.add("animate__slideInUp")
        foot.classList.add("footer-sticky")
        
    } else {
        nav.classList.remove("sticky");
        foot.classList.remove("animate__slideInUp")
        foot.classList.add("animate__slideOutDown")
    }
}
function stickFooter(){
    let foot = document.getElementById("footer")
    let bottom = document.getElementById("bottom")
    let nav = document.getElementById("nav-bar")
    let windowsHeight = window.innerHeight
    var stickpoint = bottom.getBoundingClientRect().top
    if (stickpoint < windowsHeight - 50) {
        nav.style.opacity = "0"
        foot.classList.add("stick")
        foot.classList.remove("footer-sticky")
        
        
    } else {
        nav.style.opacity = "1"
        foot.classList.remove("stick");
        foot.classList.add("footer-sticky")
    }
}
// HAMBURGER MENU
$('#ham-menu').click(() => {
   openNav()

})
$('.exit-sidebar').click(() => {
    closeNav()
 })

let sections = document.querySelectorAll('section')
sections.forEach((section) => {
    section.addEventListener('click', closeNav)
})
function openNav(){
    $(".side-bar").removeClass("animate__slideOutRight")
    $(".side-bar").show()
}
function closeNav(){
    $(".side-bar").addClass("animate__slideOutRight")

}

// SHOW BACKGROUNDS ON SCROLL
 function showOnScroll(){
    var sections = document.querySelectorAll('.reveal')

    for(i=0; i<sections.length; i++){
        var windowHeight = window.innerHeight
        var sectionTop = sections[i].getBoundingClientRect().top
        var revealpoint = 100;
        if(sectionTop < windowHeight - revealpoint){
            sections[i].style.opacity = "1"
            let sectionItems = sections[i].children
            for(j=0;  j < sectionItems.length; j++){
                sectionItems[j].style.transition = "3s"
                sectionItems[j].style.opacity = '1'
            }
        }
        else{
            sections[i].style.opacity = "0"
            let sectionItems = sections[i].children
            for(j=0;  j < sectionItems.length; j++){
                sectionItems[j].style.opacity = "0"
            }
        }
    }
 }