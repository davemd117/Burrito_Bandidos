let interest = ["hiking", "working", "eating", "talking", "jet skiing", "racing"]
// select 3 interest randomly
let randomInterest = interest[Math.floor(Math.random() * interest.length)]
let randomInterest2 = interest[Math.floor(Math.random() * interest.length)]
let applicants = document.querySelectorAll(".applicant")
let showApplication = document.querySelector(".showApplication")
applicants.forEach(applicant => {
    applicant.addEventListener("click", function(){
        showApplication.innerHTML = ""
        applicantName1 = this.innerText
        showApplication.innerHTML = `
        <div class="resumeHeader">
        <h1>Resume</h1>
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
    <li>pick at some point</li>
    <li>pick at some point</li>
    <li>pick at some point</li>
  </ul>
  <h1 class="head">Education</h1>
  <ul>
    <a href="#">
      <li>Insert school name</li>
    </a>
    <a href="#">
      <li>Insert school name</li>
    </a>
    <a href="#">
    <li>Insert school name</li>
    </a>
  </ul>
  <h1 class="head">Experience</h1>
  <ul>
    <li>Insert past experience</li>
    <li>Insert past experience</li>
    <li>Insert past experience</li>
  </ul>
</div>

        `
    })
})



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

