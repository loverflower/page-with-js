'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(mov => mov.addEventListener('click', openModal)); ////forEach works with pseudomassivami like querySelector return.
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////bumbling
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  const reference = e.target.getAttribute('href');

  if (e.target.classList.contains('nav__link')) {
    document.querySelector(reference).scrollIntoView({ behavior: 'smooth' });
  }
});

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////Lections///////////////////////

// const message = document.querySelector('.btn--scroll-to');
// const name = document.querySelector('.section__description');
// let timer;
// message.addEventListener('click', function (e) {
//   e.preventDefault();
//   message.classList.add('hidden');
//   timer = setTimeout(function () {
//     if (message.classList.contains('hidden')) {
//       message.classList.remove('hidden');
//     }
//   }, 5000);
//   if (name.style.fontSize === '40px') {
//     name.style.fontSize = '20px';
//   } else name.style.fontSize = '40px';
// });

// name.addEventListener('click', function (e) {
//   e.preventDefault();
//   clearTimeout(timer);
//   message.classList.remove('hidden');
//   name.textContent = 'Got you!';
// });

console.log(`-----------Lesson 1 ---------------`);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body); //////////select element
console.log(document.querySelector('.header')); ////return first element with class .header
// const allSections = console.log(document.querySelectorAll('.section')); ///we get NodeList with all section elements

// document.getElementById('#section--1');
// const allButtons = document.getElementsByTagName('button'); ///return all the buttons in HTML collection! if we delete one of the buttons collection updated automaticly.

// document.getElementsByClassName('btn'); //// return HTML collection with btn's classes

// ///////////////CREATING AND INSERTING ELEMENTS /////////////
// const html = 'Ya';
// document.querySelector(`.header`).insertAdjacentHTML('afterbegin', html); /// the most modern and usefull way to implement new peace of code.

// ////other ways crating
// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookie to improved functionallity';
// message.innerHTML =
//   'We use cookie to improved functionallity . <button class="btn btn--close-cookie">Got some cookies</button>';

// // header.prepend(message); ////we inserted our message to the Dom. Prepend method put message as the first child of header.

// header.append(message); /// last child; ////we can put the one element on webpage

// header.append(message.cloneNode(true)); ////we make a clone of our message ( true means we are copying this message with all child elements - deep cloning) and we can use our message and its clone in diferent parts of our webpage.

// header.before(message); /// insert this message before (not inside like append and prepend do) <div class = 'header' </div>)
// header.after(message); insert this message after (not inside like append and prepend do) <div class = 'header' </div>)

///////////DELETE ELEMENTS/////////////////
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function (e) {
//     message.remove();

//     // message.parentElement.firstChild(message);  old way delete element.
//   });

console.log(`++++++++STYLES ATRIBUTES AND CLASSES+++++++++++`);

////////////////////////////////////////
/////////////LECTION 2//////////////////
////////////////////////////////////////
////////////++++++++STYLES ATRIBUTES AND CLASSES+++++++++++////////////

// message.style.backgroundColor = '#37383d'; ///we just setinline styles. it means we write down it just in html with atributes style.
// message.style.width = '120%';

// console.log(message.style.height); // we got nothing because we didnt write it down like inline style ( height is written in style.css but we can achive it with this method)
// console.log(message.style.backgroundColor); /// we got background because of str 110!

// console.log(getComputedStyle(message)); /// we get huge object that contains everything about message and styles property too. and from here we can get styles like color, height and etc
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height); ///display real height even if we didnt set them manually.
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'blue');

//////ATRIBUTES///////////////
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className); ////get atribute class.

logo.alt = 'Beautifull minimalist loop'; ///set some value to alt
logo.setAttribute('company', 'Bankist'); /// set new atribute (unregular because company isn't standart atribute.)
console.log(logo.getAttribute('company')); ///using only method getatribute() we can get unregular atribute like company

console.log(logo.src); // http://127.0.0.1:5500/img/logo.png  - root reference

console.log(logo.getAttribute('src')); ///img/logo.png - relative reference
console.log(logo.dataset.versionNumber); ////atribute data

console.log(`---------------classes----------------`);
////////////classes/////////////
logo.classList.add('f', 'j');
logo.classList.remove('f', 'j');
logo.classList.toggle('f', 'j');
logo.classList.contains('f', 'j');

//////////lesson 3 ////////// implementig smoooth scrolling

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect()); ///show object with cuerent values TOP,X and etc for btnScrollTo relates to viewport
//   console.log(`Current scrol X/Y`, window.pageXOffset, window.pageYOffset); /// x and y from start of page to top of current position

//   console.log(
//     'height/width client',
//     document.documentElement.clientHeight, ///// get with and height client viewport.
//     document.documentElement.clientWidth
//   );

//   // /////scrollind old way
//   // window.scrollTo(s1coords.left + pageXOffset, s1coords.top + pageYOffset);
//   // /////// scrollind old way with lazy smoth efect ( we need to put object with property behavior)
//   // window.scrollTo({
//   //   left: s1coords.left + pageXOffset,
//   //   top: s1coords.top + pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   ////modern wayyy!
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

///////////////LESSON 4 EVENTS ////////////////////////
console.log(`---------------------lesson 4-----------------------`);

// const alertH1 = function (e) {
//   alert('addEventListener GREAT'); ///when we hover over H2 we will get this message
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener GREAT');
// }; ///the same like addlistener but more old thing

/////////////LESSON 5 //////////////
console.log(`----------lesson 5 ------------`);
//////////BUMBLING//////////////// see programm above!

///////////////// lesson 6 //////////// traversing

const h11 = document.querySelector('h1');
/// Going downwards
h11.querySelectorAll('.highlight'); ///we choose all classes highlight inside h1
console.log(h11.children); //HTMLCollection(3) [span.highlight, br, span.highlight]

// h11.firstElementChild.style.color = 'white';
// h11.lastElementChild.style.color = 'black';

////// going upwards
// console.log(h11.parentNode); /// direct parent h1
// console.log(h1.parentElement);
// h11.closest('.header').style.background = 'var(--gradient-secondary)'; //we find parent witth class .header and change background

////selecting simbling element
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children); ///trick to get all simblings HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]

// const m = [...h1.parentElement.children]; // collection to array!

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

const tabContainer = document.querySelector('.operations__tab-container');
// const navLinks = document.querySelector('.nav__links');
const operationsTab2 = document.querySelector('.operations__tab--2');
const operationsTab3 = document.querySelector('.operations__tab--3');
const operationsText1 = document.querySelector('.operations__content--1');
const operationsText2 = document.querySelector('.operations__content--2');
const operationsText3 = document.querySelector('.operations__content--3');
const allButtonsAll = document.querySelectorAll('.operations__tab');
const allTextes = document.querySelectorAll('.operations__content');

// my code
// tabContainer.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target == e.currentTarget) return;
//   if (
//     !e.target.classList.contains('operations__tab--active') &&
//     e.target.parentElement == this
//   ) {
//     allButtonsAll.forEach(mov =>
//       mov.classList.remove('operations__tab--active')
//     );

//     e.target.classList.add('operations__tab--active');
//   }
//   let currentButton;
//   if (e.target.parentElement == this) {
//     currentButton = e.target.dataset.tab;
//     console.log(currentButton);
//     allTextes.forEach(function (mov, i) {
//       if (+currentButton === i + 1) {
//         mov.classList.add('operations__content--active');
//       } else {
//         mov.classList.remove('operations__content--active');
//       }
//     });
//   } else {
//     currentButton = e.target.parentElement.dataset['tab'];
//     allTextes.forEach(function (mov, i) {
//       if (+currentButton === i + 1) {
//         mov.classList.add('operations__content--active');
//       } else {
//         mov.classList.remove('operations__content--active');
//       }
//     });
//     allButtonsAll.forEach(mov =>
//       mov.classList.remove('operations__tab--active')
//     );
//     e.target.parentElement.classList.add('operations__tab--active');
//   }
// });

tabContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  allButtonsAll.forEach(mov => mov.classList.remove('operations__tab--active'));
  document
    .querySelector(`.operations__tab--${clicked.dataset.tab}`)
    .classList.add(`operations__tab--active`);

  allTextes.forEach(function (mov) {
    mov.classList.remove('operations__content--active');
  });

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// Menu fade animation
const navigation = document.querySelector('.nav');
const funcNew = function (e, opacity) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);

    const currentElement = e.target;
    const simbling = currentElement
      .closest('nav')
      .querySelectorAll('.nav__link');

    const logo = document.querySelector('.nav__logo');
    console.log(simbling);
    simbling.forEach(mov => {
      if (mov !== e.target) {
        mov.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

// const navigation = document.querySelector('.nav');
// navigation.addEventListener('mouseover', function (e) {
//   funcNew(e, 0.5);
// });

// navigation.addEventListener('mouseout', function (e) {
//   funcNew(e, 1);
// });

navigation.addEventListener('mouseover', funcNew.bind(0.5));

navigation.addEventListener('mouseout', funcNew.bind(1));

//////////sticky navigation
const targetNav = document.querySelector('.nav');
const targetEl = document.querySelector('#section--1');
const targetHeader = document.querySelector('.header');
const heightDinamicHeader = targetNav.getBoundingClientRect().height;
console.log(heightDinamicHeader);
const autoSlide = true;

const obseverFunc = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    targetNav.classList.add('sticky');
  } else {
    targetNav.classList.remove('sticky');
  }
};

const observer = new IntersectionObserver(obseverFunc, {
  root: null,
  threshold: 0,
  rootMargin: `-${heightDinamicHeader}px`,
});
observer.observe(targetHeader);

/////////// reveal sections/ //////
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove(`section--hidden`);
    sectionObserver.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.style.transition = '0s';
  section.classList.add('section--hidden');
  section.style.transition = `1s`;
});

//////LAZY LOADING IMAGES/////

const funcImgObserver = function (ebentries) {
  const [entry] = ebentries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.setAttribute('src', entry.target.dataset.src);
  //entry.target.src = entry.target.dataset.src; can do like this
  ///entry.target.classList.remove('lazy-img');  this is not good idea, because images can be not uploaded and at this moment we deleted lazy class. If bad internet it will be look ugly
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  imgObserver.unobserve(entry.target);
};

const imgLazy = document.querySelectorAll('.lazy-img');
const imgObserver = new IntersectionObserver(funcImgObserver, {
  root: null,
  threshold: 0.7,
});

imgLazy.forEach(mov => imgObserver.observe(mov));

//////slider/////
const allSlides = document.querySelectorAll('.slide');
const buttonLeft = document.querySelector('.slider__btn--left');
const buttonRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
let count = 0;

const goTo = function (count) {
  allSlides.forEach(
    (mov, i) => (mov.style.transform = `translateX(${(i - count) * 100}%)`)
  );
};

const createDots = function () {
  allSlides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const slideForward = function () {
  if (count >= allSlides.length - 1) {
    count = 0;
  } else {
    count++;
  }
  goTo(count);
  activateDots(count);
};

const slideBack = function () {
  if (count <= 0) {
    count = allSlides.length - 1;
  } else {
    count--;
  }
  goTo(count);
  activateDots(count);
};

goTo(0);
createDots();
activateDots(0);

buttonRight.addEventListener('click', slideForward);
buttonLeft.addEventListener('click', slideBack);

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goTo(slide);

    activateDots(slide);
  }
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowRight') {
    slideForward();
  } else if (e.code === 'ArrowLeft') {
    slideBack();
  }
});
