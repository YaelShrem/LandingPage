/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*todo: all under here....*/

/*===== View the letter =====*/
/*The idea...*/
var letter_id=document.getElementById("id");
const students=[];
const student={
    'id':0000,
    'name':'yossi',
    'gan':'yarkonim',
    'after_gan': true
};

for(var i=0;i<students.length;i++)
{
    if(letter_id==students[i].id)
        /*the variable will be the id, so the letter can be watched...*/
        letter_id;
    else
        alert("התלמיד/ה לא מופיע במערכת, אנא פנה למשרדים: 039315031");
}
/*===== Subscribe =====*/


/*===== Unsubscribe =====*/


//if(students[i].after_gan==true)










