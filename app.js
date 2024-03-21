const slider = document.getElementById('slider');
const slides = document.getElementsByClassName("stages__section-mobile-slide");
const dots = document.getElementsByClassName("stages__section-mobile-dot");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const memberPrevButton = document.getElementById("memberPrevButton");
const memberNextButton = document.getElementById("memberNextButton");
const prevButtonMobile = document.querySelector(".prev-button-mobile");
const nextButtonMobile = document.querySelector(".next-button-mobile");
const memberCard = document.querySelector(".members__list-card");
const memberListLine = document.querySelector(".members__list");
const prevNode = document.getElementsByClassName("members__list");
const memberSlides = document.getElementsByClassName("members__list-card");
const membersSlideNumber = document.querySelector(".members__number");
const membersSlideNumberMobile = document.querySelector(".members__number-mobile");

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-active";
  if (slideIndex === 1) {
    prevButton.className += " disabled";
  }
  
  if (slideIndex > 1) {
    prevButton.classList.remove("disabled");
  }

  if (slideIndex === slides.length) {
    nextButton.className += " disabled";
  }

  if (slideIndex < slides.length) {
    nextButton.classList.remove("disabled");
  }

  if (slideIndex === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (slideIndex === slides.length) {
    nextButton.disabled = true;
    
  } else {
    nextButton.disabled = false;
  }
}

let memberSlideIndex = 1;

let memberSlideIndexMobile = 1;

showMemberSlides(memberSlideIndex);

showMemberSlidesMobile(memberSlideIndexMobile);

memberNextButton.addEventListener ("click", function () {
  stopInterval();
  showMemberSlides(memberSlideIndex += 1);
});

memberPrevButton.addEventListener ("click", function () {
  stopInterval();
  showMemberSlides(memberSlideIndex -= 1);
});

function currentSlide(n) {
  showMemberSlides(memberSlideIndex = n);
}

function showMemberSlides(n) {
  let slides = document.getElementsByClassName("members__list-slide");
  if (n > slides.length) {
    memberSlideIndex = 1;
  }
  if (n < 1) {
    memberSlideIndex = slides.length;
  }

  for (let slide of slides) {
      slide.style.display = "none";
  }
  slides[memberSlideIndex - 1].style.display = "flex";
  
  if (memberSlideIndexMobile === 1) {
    membersSlideNumber.textContent = 3;
  } else {
    membersSlideNumber.textContent = 6;
  }
}

function showMemberSlidesMobile(n) {
  let slides = document.getElementsByClassName("members__list-card-mobile");
  if (n > slides.length) {
    memberSlideIndexMobile = 1;
  }
  if (n < 1) {
    memberSlideIndexMobile = slides.length;
  }

  for (let slide of slides) {
      slide.style.display = "none";
  }
  slides[memberSlideIndexMobile - 1].style.display = "flex";
  
  membersSlideNumberMobile.textContent = memberSlideIndexMobile;
}

let timer = setInterval(function(){
  memberSlideIndex++;
  showMemberSlides(memberSlideIndex);
}, 4000);

let timerMobile = setInterval(function(){
  memberSlideIndexMobile++;
  showMemberSlidesMobile(memberSlideIndexMobile);
}, 4000);

function stopInterval() {
  clearInterval(timer);
}

nextButtonMobile.addEventListener ("click", function () {
  showMemberSlidesMobile(memberSlideIndexMobile += 1);
});

prevButtonMobile.addEventListener ("click", function () {
  showMemberSlidesMobile(memberSlideIndexMobile -= 1);
});