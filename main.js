// // WINDOW ONLOAD FUNCTIONS
// //Testing accnts in storage
// window.onload =  addUserToStorage(userDatabase)
// //Check if user is logged in
// window.onload = checkForUser();

// window.addEventListener("scroll", showOnScroll);
//  window.addEventListener("scroll", addSticky);
//  window.addEventListener("scroll", stickFooter);nhjjgjtgttt


let userDatabase = [];
let listUsers = [];
let currentUser = [];
let userMessage=[];

// ----- foodItems declared ----- //

var foodItems = JSON.parse(localStorage.getItem("foodItems"));

if (foodItems === null) {
    foodItems = [
        {
            id: 0,
            name: "Burrito de Bistec",
            price: 9.99,
            image: "bandidos_images/burrito_de_bistec.jpg",
            description: "Flour tortilla stuffed with steak and choice of toppings",
            calories: 920,
        },
        {
            id: 1,
            name: "Burrito de Carnitas",
            price: 8.99,
            image: "bandidos_images/burrito_de_carnitas.jpg",
            description: "Flour tortilla stuffed with pork and choice of toppings",
            calories: 920,
        },
        {
            id: 2,
            name: "Burrito de Chorizo",
            price: 8.99,
            image: "bandidos_images/burrito_de_chorizo.jpg",
            description: "Flour tortilla stuffed with mexican sausage and choice of toppings",
            calories: 920,
        },
        {
            id: 3,
            name: "Burrito de Pollo",
            price: 8.99,
            image: "bandidos_images/burrito_de_pollo.jpg",
            description: "Flour tortilla stuffed with chicken and choice of toppings",
            calories: 920,
        },
        {
            id: 4,
            name: "Burrito de Tinga",
            price: 8.99,
            image: "bandidos_images/burrito_de_tinga.jpg",
            description: "Flour tortilla stuffed with shredded chipotle chicken and choice of toppings",
            calories: 920,
        },
        {
            id: 5,
            name: "Steak Tacos",
            price: 12.99,
            image: "bandidos_images/steak_tacos.jpg",
            description: "Soft corn tortillas stuffed with steak and choice of toppings",
            calories: 920,
        },
        {
            id: 6,
            name: "Fish Tacos",
            price: 11.99,
            image: "bandidos_images/fish_tacos.jpg",
            description: "Soft corn tortillas stuffed with fish and choice of toppings",
            calories: 920,
        },
        {
            id: 7,
            name: "Shrimp Tacos",
            price: 11.99,
            image: "bandidos_images/shrimp_tacos.jpg",
            description: "Soft corn tortillas stuffed with shrimp and choice of toppings",
            calories: 920,
        },
        {
            id: 8,
            name: "Chicken Tacos",
            price: 11.99,
            image: "bandidos_images/chicken_tacos.jpg",
            description: "Soft corn tortillas stuffed with chicken and choice of toppings",
            calories: 920,
        },
        {
            id: 9,
            name: "Carnitas Tacos",
            price: 11.99,
            image: "bandidos_images/carnitas_tacos.jpg",
            description: "Soft corn tortillas stuffed with pork and choice of toppings",
            calories: 920,
        },
        {
            id: 10,
            name: "Steak Quesadillas",
            price: 13.99,
            image: "bandidos_images/steak_quesadillas.jpg",
            description: "Folded corn tortilla or flour tortilla stuffed with steak and choice of toppings",
            calories: 920,
        },
        {
            id: 11,
            name: "Chicken Quesadillas",
            price: 12.99,
            image: "bandidos_images/chicken_quesadillas.jpg",
            description: "Folded corn tortilla or flour tortilla stuffed with chicken and choice of toppings",
            calories: 920,
        },
        {
            id: 12,
            name: "Chorizo Quesadillas",
            price: 12.99,
            image: "bandidos_images/chorizo_quesadillas.jpg",
            description: "Folded corn tortilla or flour tortilla stuffed with Mexican sausage and choice of toppings",
            calories: 920,
        },
        {
            id: 13,
            name: "Carnitas Quesadillas",
            price: 12.99,
            image: "bandidos_images/carnitas_quesadillas.jpg",
            description: "Folded corn tortilla or flour tortilla stuffed with pork and choice of toppings",
            calories: 920,
        },
        {
            id: 14,
            name: "Picadillo Quesadillas",
            price: 12.99,
            image: "bandidos_images/picadillo_quesadillas.jpg",
            description: "Folded corn tortilla or flour tortilla stuffed with ground beef and choice of toppings",
            calories: 920,
        },
        {
            id: 15,
            name: "Enchiladas Rojas",
            price: 14.99,
            image: "bandidos_images/enchiladas_rojas.jpg",
            description: "Choice of steak, chicken or cheese topped with red chile sauce and choice of toppings.",
            calories: 920,
        },
        {
            id: 16,
            name: "Enchiladas Verdes",
            price: 14.99,
            image: "bandidos_images/enchiladas_verdes.jpg",
            description: "Choice of steak, chicken or cheese topped with green chile sauce and choice of toppings.",
            calories: 920,
        },
        {
            id: 17,
            name: "Enchiladas de Mole",
            price: 14.99,
            image: "bandidos_images/enchiladas_de_mole.jpg",
            description: "Stuffed with chicken and topped with mole and choice of toppings",
            calories: 920,
        },
        {
            id: 18,
            name: "Enchiladas Suizas",
            price: 14.99,
            image: "bandidos_images/enchiladas_suizas.jpg",
            description: "Stuffed with chicken, topped with Swiss cheese sauce",
            calories: 920,
        },
        {
            id: 19,
            name: "Super Burrito",
            price: 19.99,
            image: "bandidos_images/super_burrito.jpg",
            description: "A giant burrito stuffed with the hopes and dreams of all of Mexico",
            calories: 920,
        }
    ];
    localStorage.setItem('foodItems', JSON.stringify(foodItems));
};

// ----- user info class ----- //

class UserInfo {
    constructor(username, firstName, email, password,points,address,phone,favorites) {
        this.username = username;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.points = points
        this.phone = phone;
        this.address = address;
        this.favorites = favorites
       
    };
};




// test classes to populate storage
userDatabase.push(new UserInfo('bandido1', 'Owner', 'BurBand@email.com', 'Password123', 100, "", "",""));
userDatabase.push(new UserInfo('davemd', 'Dave', 'dave@email.com', 'Drum&',100, "", "",""));
userDatabase.push(new UserInfo('preachey', 'Ryan', 'ryan@email.com', '$hort',100, "", "",""));
userDatabase.push(new UserInfo('chris', 'Chris', 'chris@email.com', 'wr1ght',100,"123 Abcde, Dr","555-555-5555"));




// ----- database functions ----- //

function addUser() {
    userDatabase.push(new UserInfo(
        $('.sup-user').val(),
        $('.sup-name').val(),
        $('.sup-email').val(),
        $('.sup-password').val(),
        50,
        $('.sup-phone').val(),
        $('.sup-addy').val(),
        50
    ));
}

function addUserToStorage(arr){
    for(i=0;i<arr.length; i++){
        window.localStorage.setItem(`${i}`, JSON.stringify(arr[i]))
    }
}
function getKeyFromStorage(key, arr){
    if(window.localStorage.getItem(key)!== null){
        arr.push(JSON.parse(localStorage.getItem(key)))
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
function checkUsername(){
    let storedUsers = []
    let usernames = []
    let storage = window.localStorage
    for(i=0;i<storage.length;i++){
        getKeyFromStorage(`${i}`, storedUsers)
        if(storedUsers[i]!==null && storedUsers[i]!==undefined){
            // console.log(storedUsers[i].username)
            storedUsernames = storedUsers[i].username
            // console.log(storedUsernames)
            usernames.push(storedUsernames)
        }
    }
    // console.log()
    if(usernames.includes($(".sup-user").val())){
        // console.log("ITS THERE")
        return false
    }
    else{
        // console.log("not there")
        return true
    }
}
// function userDupeCheck() {
//     let userUsername = []
//     userDatabase.forEach((user) => {
//         // console.log(user.username)
//         userUsername.push(user.username)
//     })
//     // console.log(userUsername.includes($('.sup-user').val()))
//     if(userUsername.includes($('.sup-user').val())){
//         return false
//     }
//     else{
//         return true
//     }
// }


//Checks if email is already in use
function checkEmail(){
    let storedUsers = []
    let emails = []
    let storage = window.localStorage
    for(i=0;i<storage.length;i++){
        getKeyFromStorage(`${i}`, storedUsers)
        if(storedUsers[i]!==null && storedUsers[i]!==undefined){
            console.log(storedUsers[i].email)
            storedEmails = storedUsers[i].email
            // console.log(storedEmails)
            emails.push(storedEmails)
        }
    }
    // console.log()
    if(emails.includes($(".sup-email").val())){
        console.log("ITS THERE")
        return false
    }
    else{
        console.log("not there")
        return true
    }
}

// function emailDupeCheck() {
//     let userEmail = []
//     userDatabase.forEach((user) => {
//         // console.log(user.email)
//         userEmail.push(user.email)
//     })
//     // console.log(userEmail.includes($('.sup-email').val()))
//     if(userEmail.includes($('.sup-email').val())){
//         return false
//     }
//     else{
//         return true
//     }
// }

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
    if (checkUsername() && checkEmail() && checkForInput() && checkPassReqs() && checkConfirmPass()){
        addUser();
        addUserToStorage(userDatabase)
        $('.sup-good').show()
        $('.sup-bad').hide()
        $('.sup-name').val("")
        $('.sup-email').val("")
        $('.sup-user').val("")
        $('.sup-phone').val("")
        $('.sup-addy').val("")
        $('.sup-password').val("")
        $('.sup-confirm').val("")
    }
    else {
        // checkEmail()
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
            user = window.localStorage.getItem("0")
            owner = JSON.parse(user)
            console.log(owner.email)
            $('.err-mess').hide()
            $('#welcome').text(`Welcome ${owner.firstName}`)
            $('#welcome').show()
            // console.log(users[0])
            currentUser.length = 0
            currentUser.push(owner)
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
            // console.log("user")
            window.location.href = "menu.html"
        }
        else if(logUsername === users.username && logPassword !== users.password){
            // console.log("WRONG PASSWORD")
            $('.err-mess').text("WRONG PASSWORD")
            $('.err-mess').show()
        }
        else if(logUsername !== users.username && logPassword === users.password){
            // console.log("WRONG USERNAME")
            $('.err-mess').text("USERNAME DOESNT MATCH PASSWORD")
            $('.err-mess').show()
        }
        else if( logUsername === '' || logPassword === ''){
            $('.err-mess').text("One or both of the fields are empty")
            $('.err-mess').show()
        }
    }
})

//make Profile button
function showSignout(){
    let currentUser = JSON.parse(localStorage.getItem('Current User'));
    // if(currentUser[0.firstName === "Owner"])
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
    let logbtn = document.getElementById("go-to-login")
    let profbtn = document.getElementById("go-to-profile")

    let manager = document.getElementById("manager-tab")
    let managerSide = document.getElementById("manager-tab-sidebar")

    let reviewName = document.getElementById("contact-name")
    let reviewEmail = document.getElementById("contact-email")
    let storedUser = window.localStorage.getItem("Current User")
    let loggedUser = JSON.parse(storedUser)
    // let userName = loggedUser.firstName
    if(storedUser){
        console.log(storedUser)
        if(loggedUser[0].firstName === "Owner"){
            let manager = document.getElementById("manager-tab")
            let managerSide = document.getElementById("manager-tab-sidebar")
            console.log("owner")
            manager.style.display = "block"
            managerSide.style.display = "block"
            // POPULATE PROFILE DISPLAY
            let usersname = loggedUser[0].firstName
            let usersemail = loggedUser[0].email
            let userspoints = loggedUser[0].points
            let usersphone = loggedUser[0].phone
            let usersaddress = loggedUser[0].address
            // let favs = loggedUser[0].favorites
            console.log(usersphone,usersaddress)
            let displayname = document.getElementById("users-name")
            let displayemail = document.getElementById("users-email")
            let displayphone = document.getElementById("users-phone")
            let displayaddress = document.getElementById("users-addy")
            let displaypoints = document.getElementById("users-points")
            let displayfavs = document.getElementById("favs")
            displayname.innerHTML = usersname
            displayemail.innerHTML = usersemail
            displayphone.innerHTML = usersphone
            displayaddress.innerHTML = usersaddress
            displaypoints.innerHTML = `Points: ${userspoints}`
            // displayfavs.innerHTML = favs
            profbtn.style.display = "block"
            logbtn.style.display = "none"
            profbtn.innerHTML = `${loggedUser[0].firstName}\'s Profile`
        }
        else{
            console.log(loggedUser)
            // console.log(userName)
            let manager = document.getElementById("manager-tab")
            let managerSide = document.getElementById("manager-tab-sidebar")
            // let currentUser = JSON.parse(localStorage.getItem('Current User'));
            manager.style.display = "none"
            managerSide.style.display = "none"
            profbtn.style.display = "block"
            logbtn.style.display = "none"
            profbtn.innerHTML = `${loggedUser[0].firstName}\'s Profile`
            // POPULATE PROFILE DISPLAY
            let usersname = loggedUser[0].firstName
            let usersemail = loggedUser[0].email
            let userspoints = loggedUser[0].points
            let usersphone = loggedUser[0].phone
            let usersaddress = loggedUser[0].address
            console.log(usersphone,usersaddress)
            let displayname = document.getElementById("users-name")
            let displayemail = document.getElementById("users-email")
            let displayphone = document.getElementById("users-phone")
            let displayaddress = document.getElementById("users-addy")
            let displaypoints = document.getElementById("users-points")
            displayname.innerHTML = usersname
            displayemail.innerHTML = usersemail
            displayphone.innerHTML = usersphone
            displayaddress.innerHTML = usersaddress
            displaypoints.innerHTML = `Points: ${userspoints}`
            // Leave a message section
            reviewName.value = usersname
            reviewEmail.value = usersemail
        }
    }
    else{
        let manager = document.getElementById("manager-tab")
        let managerSide = document.getElementById("manager-tab-sidebar")
        console.log("NOT There")
        profbtn.style.display = "none"
        logbtn.style.display = "block"
        manager.style.display = "none"
        managerSide.style.display = "none"
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
    // document.location.reload()
    // console.log("REFRESH")
    localStorage.removeItem("Current User")
    // checkForUser
 })


//  window.addEventListener("scroll", showOnScroll);
//  window.addEventListener("scroll", addSticky);
//  window.addEventListener("scroll", stickFooter);
 



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
    $(".side-links").css("visibility", "visible")
}
function closeNav(){
    $(".side-bar").addClass("animate__slideOutRight")
    $(".side-links").css("visibility","hidden")

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








// CONTACT US

class message{
    constructor(name,email,subject,message){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}

function storeMessage(){
    userMessage.push(new message(
        $("#contact-name").val(),
        $("#contact-email").val(),
        $("#contact-subject").val(),
        $("#contact-message").val()
    ))
}
$(".contact-submit").click(() =>{
    if($("#contact-name").val() ===""||$("#contact-email").val() ===""||$("#contact-message").val() ===""){
        $(".contact-good").hide()
        $(".contact-err").show()
        $(".contact-err").addClass("animate__headShake")
    }
    else{
        
    storeMessage();
   let  stringMessage = JSON.stringify(userMessage)
    window.localStorage.setItem("Message", stringMessage)
        $(".contact-err").hide()
        $(".contact-good").addClass("animate__bounce")
        $(".contact-good").show()
        $("#contact-name").val("") 
        $("#contact-email").val("") 
        $("#contact-subject").val("") 
        $("#contact-message").val("") 
    }
})

$('.contact-form-input').focus(()=>{
    $(".contact-good").hide()
    $(".contact-good").removeClass("animate__bounce")
})

//  Review stars
function starReview(){
    let thank = document.getElementById("thank-review")
    let stars =document.querySelectorAll(".star")
    // console.log(this.parentNode.parentNode)
    let container = this.parentNode.parentNode;
    let star = this.id;
    if(star === "4-star"){
        stars[0].name = "star"
        stars[1].name = "star"
        stars[2].name = "star"
        stars[3].name = "star"
       this.name = "star"
       let storedReview = JSON.stringify(star)
       window.localStorage.setItem("Review",storedReview )
        
    }
    else if(star === "3-star"){
        stars[0].name = "star"
        stars[1].name = "star"
        stars[2].name = "star"
        let storedReview = JSON.stringify(star)
       window.localStorage.setItem("Review",storedReview )
    }
    else if(star === "2-star"){
        stars[0].name = "star"
        stars[1].name = "star"
        let storedReview = JSON.stringify(review)
       window.localStorage.setItem("Review",storedReview )
    }
    else{
        stars[0].name = "star"
        let storedReview = JSON.stringify(review)
       window.localStorage.setItem("Review",storedReview )
    }

    container.style.opacity= ".5"
    thank.innerHTML = "Thank you for leaving a rating"
    stars.forEach((star)=>{
    star.removeEventListener("click", starReview)
    star.style.cursor = "default"
})
}
let stars =document.querySelectorAll(".star")
stars.forEach((star)=>{
    star.addEventListener("click", starReview)
})


// WINDOW ONLOAD FUNCTIONS
//Testing accnts in storage
window.onload =  addUserToStorage(userDatabase)

// window.onload = retrieveFromStorage()
//Check if user is logged in
window.onload = checkForUser();
// window.onload = customizePage();

window.addEventListener("scroll", showOnScroll);
 window.addEventListener("scroll", addSticky);
 window.addEventListener("scroll", stickFooter);