//clicking the name of an applicant from the list of applicants will display the applicant's resume in showApplication div
let applicants = document.querySelectorAll(".applicant")
let showApplication = document.querySelector(".showApplication")
applicants.forEach(applicant => {
    applicant.addEventListener("click", function(){
        applicantName1 = this.innerText
        showApplication.innerHTML = `
        
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

