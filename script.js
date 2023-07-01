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

(function(){
    emailjs.init("ZcSgXgprLloKsX4rN");
})();


function sendMail(){
    preventDefault();

    var params = {
        from_name: document.querySelector('#name-input').value,
        email_id: document.querySelector('#email-input').value,
        message: document.querySelector('#contact-message').value
    }

    const serviceID = "service_0uoqn1h";
    const templateID = "template_cfqu6aa";

    
   
    errorFree(params)? emailjs.send(serviceID, templateID, params)
        .then(function(res){
            alert('Success!!');
            console.log(res);
        }) : console.log('An error has occurred!');
        location.reload(false)
}

function errorFree(params){
    if(params.from_name == ''){
        alert('Please enter your name');
        return false;
    } else if(params.email_id == ''){
        alert('Please don\'t forget to enter your email address');
        return false;
    } else if(params.message == ''){
        alert('Please make sure you include a message for the developer');
        return false;
    } else {
        console.log('All the fields have been filled well, thank you!')
        return true;
    }
}

//  TypedJS
var typed = new Typed('#typed-element', {
    strings: ['Phambili', 'Avile', 'Nkwenkwezi'],
    typeSpeed: 150,
    loop: true,
  });

  console.log(typed);