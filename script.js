//Intersection observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => {
    observer.observe(elem);
});


//Send email
const submitBtn = document.querySelector('#submitBtn');
const fullName = document.querySelector('#name-input');
const emailID = document.querySelector('#email-input');
const emailMessage = document.querySelector('#contact-message');

submitBtn.addEventListener('click', ()=>{
    if(fullName.value == ''){
        alert('Please fill in your name');
    } else if(emailID.value == ''){
        alert('Please enter your email address')
    } else if(emailMessage.value == ''){
        alert('Please include a message in your email for the developer to read.')
    } else { //All fields filled successfully
        var params = {
            from_name: fullName.value,
            email_id: emailID.value,
            message: emailMessage.value
        }

        emailjs.send("service_0uoqn1h", "template_cfqu6aa", params)
                .then(function(res){
                    alert('Success!!' + res.status);
                });
    }

});