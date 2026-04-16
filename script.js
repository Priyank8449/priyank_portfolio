function  openWhatsapp(){
   let phoneNumber = "918449816393"; 
  let message = "Hello Priyank, I visited your portfolio!";
  
  let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  
  window.open(url, "_blank");
}
function openLinkedin(){
    window.open("https://www.linkedin.com/in/priyank-chaudhary-271b43320/","_blank")
}


function goToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}