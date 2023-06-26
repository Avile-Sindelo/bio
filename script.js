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


const progressElems = document.querySelectorAll('.progress');
progressElems.forEach((bar) => console.log(bar.innerHTML));
console.log(progressElems);