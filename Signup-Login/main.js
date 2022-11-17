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

// function addUserToStorage(){
//     JSON.stringify(userDatabase)
//     for(i=0;i<userDatabase.length; i++){
//         window.localStorage.setItem(`${i}`, JSON.stringify(userDatabase[i]))
//     }
// }
function addUserToStorage(arr){
    for(i=0;i<arr.length; i++){
        window.localStorage.setItem(`${i}`, JSON.stringify(arr[i]))
    }
}

function retrieveFromStorage(){
    Object.keys(localStorage).forEach((key) => {
        listUsers.push(JSON.parse(localStorage.getItem(key)));
    })

}

// ----- CREATE ACC CHECKS----- //
function checkForInput() {
    let name = document.getElementById("sup-name").value
    let email = document.getElementById("sup-email").value
    let username = document.getElementById("sup-user").value
    let pass = document.getElementById("sup-password").value
    let confPass = document.getElementById("sup-confirm").value
    // console.log(name)
    if (name === "" || email === ""|| user === ""|| pass === ""|| confPass === ""){
        return false
    }
    else {
        return true
    }
}


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

function checkPassReqs() {
    req1 = document.getElementsByClassName('pass-req')[0]
    req2 = document.getElementsByClassName('pass-req')[1]
    req3 = document.getElementsByClassName('pass-req')[2]
    req4 = document.getElementsByClassName('pass-req')[3]
    req5 = document.getElementsByClassName('pass-req')[4]

    // console.log(reqs)
    if (req1.classList.contains('pass-req-check') && req2.classList.contains('pass-req-check') && req3.classList.contains('pass-req-check') && req4.classList.contains('pass-req-check') && req5.classList.contains('pass-req-check')) {
        return true
    }
    else {
        return false
    }
}

// ----- event functions ----- //

$('.sup-submit').click(() => {
    if (checkForInput()){
    // && userDupeCheck() && checkForInput() && checkPassReqs() && checkConfirmPass()) {
        console.log(document.getElementById("sup-name").value)
        addUser();
        addUserToStorage(userDatabase)
        $('.sup-good').show()
        $('.sup-bad').hide()
        // $('.sup-name').val("")
        // $('.sup-email').val("")
        // $('.sup-user').val("")
        // $('.sup-password').val("")
        // $('.sup-confirm').val("")
    }
    else {
        $('.sup-bad').show()
        $('.sup-good').hide()
    }
});


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



// ----- Signup Password verification ----- //
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
    if (passUpper) {
        // console.log('has uppercase')
        $('.upper-req').addClass("pass-req-check")
        $('.upper-req ion-icon').attr("name", "checkmark-outline")
    }
    if (passLower) {
        // console.log('has lowercase')
        $('.lower-req').addClass("pass-req-check")
        $('.lower-req ion-icon').attr("name", "checkmark-outline")
    }
    if (passNum) {
        // console.log('has number')
        $('.num-req').addClass("pass-req-check")
        $('.num-req ion-icon').attr("name", "checkmark-outline")

    }
    if (passSpecial) {
        // console.log('has special char')
        $('.spec-req').addClass("pass-req-check")
        $('.spec-req ion-icon').attr("name", "checkmark-outline")
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
    retrieveFromStorage()
    for(users of listUsers){
        if(logUsername ==="bandido1" && logPassword === "P@ssword123"){
            // NEW
            $('.log-pass').val("")
            $('.log-user').val("")
            $('.err-mess').hide()
            $('#welcome').text(`Welcome ${users.firstName}`)
            $('#welcome').show()
            currentUser.push(users)
            window.localStorage.setItem("Current User", JSON.stringify(currentUser))
            console.log(currentUser)
        }
        else if( logUsername === users.username && logPassword === users.password){
            console.log(`Welcome ${users.firstName}`)
            $('.log-pass').val("")
            $('.log-user').val("")
            $('#welcome').text(`Welcome ${users.firstName}`)
            $('#welcome').show()
            $('.err-mess').hide()
            currentUser.push(users)
            window.localStorage.removeItem("Current User")
            window.localStorage.setItem("Current User", JSON.stringify(currentUser))
        }
        else if(logUsername === users.username && logPassword !== users.password){
            console.log("WRONG PASSWORD")
            $('.err-mess').text("WRONG PASSWORD")
            $('.err-mess').show()
            console.log(users)
        }
        else if(logUsername !== users.username && logPassword === users.password){
            console.log("WRONG USERNAME")
            $('.err-mess').text("USERNAME DOESNT MATCH PASSWORD")
            $('.err-mess').show()
        }
    }
})

function checkForInput() {
    if ($('.sup-user').value === '' || $('.sup-name').value === '' || $('.sup-email').value === '' || $('.sup-password').value === '') {
        return false;
    }
    else {
        return true;
    }
}
