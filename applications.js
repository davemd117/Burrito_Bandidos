let interest = ["hiking", "working", "eating", "talking", "jet skiing", "racing", 'ski ball', 'fishing', 'snorkling', 'swimming', 'reading', 'writing', 'drawing', 'painting', 'singing', 'dancing', 'playing', 'gaming', 'coding', 'programming', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating',
]
let skills = ["hiking", "working", "eating", "talking", "jet skiing", "racing", 'ski ball', 'fishing', 'snorkling', 'swimming', 'reading', 'writing', 'drawing', 'painting', 'singing', 'dancing', 'playing', 'gaming', 'coding', 'programming', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening', 'cooking', 'baking', 'making', 'crafting', 'knitting', 'crocheting', 'sewing', 'making', 'building', 'creating', 'exploring', 'traveling', 'hunting', 'farming', 'gardening',]
let education = ['West Chester University', 'Millersville University', 'Kutztown University', 'Rutgers University', 'Drexel University', 'Shippensburg University', 'Bloomsberg University', "Penn State University", "Temple University", "University of Pennsylvania", "University of Delaware", "University of Maryland", "University of Virginia", "University of North Carolina", "University of South Carolina", "University of Georgia", "University of Florida", "University of Alabama", "University of Mississippi", "University of Tennessee", "University of Arkansas", "University of Texas", "University of Oklahoma", "University of Kansas", "University of Missouri", "University of Nebraska", "University of Iowa", "University of Minnesota", "University of Wisconsin", "University of Illinois", "University of Michigan", "University of Indiana", "University of Kentucky", "University of Ohio", "University of West Virginia", "University of Colorado", "University of New Mexico", "University of Arizona", "University of Nevada", "University of California", "University of Oregon", "University of Washington", "University of Idaho", "University of Montana", "University of Wyoming", "University of Alaska", "University of Hawaii", "University of New York", "University of Vermont", "University of Connecticut", "University of Rhode Island", "University of Massachusetts", "University of Maine", "University of New Hampshire", "University of New Jersey", "University of North Dakota", "University of South Dakota", "University of Montana", "University of Wyoming", "University of Alaska", "University of Hawaii", "University of New York", "University of Vermont", "University of Connecticut"]
let referral = ["Mary", "James", "April", "Phil", "Bam", "Don Veto", "Jason", "Jimmy", "George", "Jorge", "Marie", "Lisa", "Paul", "Aron", "Aaron", "Kane", "Philly", "Tyler", "Alex", "Dave", "Stephanie", "Bob", "Ryan", "Edward", "Naruto", "Sauske", "Ichigo"]
let experience = ['Cook', 'Dish-Washer', "Waiter", "Waitress", "Bartender", "Host", "Hostess", "Manager", "Assistant Manager", "Supervisor", "Regional Manager", "Line Cook", "Head Cook", "Chef", "Head Chef", "Barista", "Delivery Driver", "Truck Driver", "Network Admin", "Software Engineer"]
let randomInterest = interest[Math.floor(Math.random() * interest.length)]
let randomInterest2 = interest[Math.floor(Math.random() * interest.length)+1]
let randomSkill = skills[Math.floor(Math.random() * skills.length)]
let randomSkill2 = skills[Math.floor(Math.random() * skills.length)+1]
let randomEducation = education[Math.floor(Math.random() * education.length)]
let randomEducation2 = education[Math.floor(Math.random() * education.length)-1]
let randomReferral = referral[Math.floor(Math.random() * referral.length)]
let randomReferral2 = referral[Math.floor(Math.random() * referral.length)+1]
let randomExperience = experience[Math.floor(Math.random() * experience.length)]
let randomExperience2 = experience[Math.floor(Math.random() * experience.length)+1]
let applicants = document.querySelectorAll(".applicant")
let showApplication = document.querySelector(".showApplication")

function renderApplicants() {
applicants.forEach(applicant => {
    applicant.addEventListener("click", function() {
        showApplication.innerHTML = ""
        applicantName1 = this.innerHTML
        showApplication.innerHTML = `
        <div class="resumeHeader">
          <h1>Resume</h1>
          <ion-icon name="close-circle-outline" class="exit"></ion-icon>
          <h2>${applicantName1}</h2>
          <h2>${applicantName1}@email.com</h2>
        </div>
        <div class="stuff">
          <h1 class="head">Interests</h1>
          <ul>
            <li>${randomInterest}</li>
            <li>${randomInterest2}</li>
          </ul>
          <h1 class="head">Skills</h1>
          <ul>
            <li>${randomSkill}</li>
            <li>${randomSkill2}</li>
          </ul>
          <h1 class="head">Education</h1>
          <ul>
              <li>${randomEducation}</li>
              <li>${randomEducation2}</li>
          </ul>
          <h1 class="head">Referral</h1>
          <ul>
            <li>${randomReferral}</li>
            <li>${randomReferral2}</li>
          </ul>
          <h1 class="head">Experience</h1>
          <ul>
            <li>${randomExperience}</li>
            <li>${randomExperience2}</li>
          </ul>
        </div>
        <ul>
        `
        let exit = document.querySelector(".exit")
        exit.addEventListener("click", function() {
        showApplication.innerHTML = `
        <h2>Clicking an applicants name from the list on the left will show their application here.</h2>
        <img class="showApplicationImg" src="/receipt_images/bandidos_name_logo.png" alt="">`
      })
    })
  })
}

renderApplicants();






//  hamburger menu
$('#ham-menu').click(() => {
    openNav()
 
 })
 $('.exit-sidebar').click(() => {
     closeNav()
  })
 
 function openNav(){
     $(".side-bar").removeClass("animate__slideOutRight")
     $(".side-bar").show()
 }
 function closeNav(){
     $(".side-bar").addClass("animate__slideOutRight")
        $(".side-bar").hide()
 
 }

 function checkForUser(){
  logbtn = document.getElementById("go-to-login")
  profbtn = document.getElementById("go-to-profile")
  
  if(window.localStorage.getItem("Current User")){
      let currentUser = JSON.parse(localStorage.getItem('Current User'));
      profbtn.style.display = "block"
      // logbtn.style.display = "none"
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
      // logbtn.style.display = "block"
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


checkForUser()