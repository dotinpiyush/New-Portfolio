var typed = new Typed(".typing", {

strings:[
"Web Designer",
"Frontend Developer",
"CSE Graduate"
],

typeSpeed:100,
backSpeed:60,
loop:true

});

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}

});

AOS.init();

//// for email
(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

document
.getElementById("contact-form")
.addEventListener("submit", function(event){

event.preventDefault();

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
)

.then(function(){

alert("Message sent successfully!");

}, function(){

alert("Failed to send message.");

});

});

