import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';


// 初始化 Swiper
var banner = new Swiper(".mybanner", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 30,       // Slide之間的間距
  centeredSlides: false,  // 不居中顯示，確保左邊有預覽部分
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,             // 循環播放
});

var swiper = new Swiper(".mybadge", {
  slidesPerView: 'auto',  
  spaceBetween: 8,       
  loop: true,
});

var swiper = new Swiper(".mycard-1", {
  slidesPerView: 'auto', 
  spaceBetween: 24,      
  loop: true,
  pagination: {
    el: ".swiper-pagination-1",
  },
});

var swiper = new Swiper(".mycard-2", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  loop: true,
  pagination: {
    el: ".swiper-pagination-2",
  },
});

var swiper = new Swiper(".mycard-3", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  loop: true,
  pagination: {
    el: ".swiper-pagination-3",
  },
});

var swiper = new Swiper(".mycard-4", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  loop: true,
  pagination: {
    el: ".swiper-pagination-4",
  },
});

var swiper = new Swiper(".mycard-5", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  loop: true,
  pagination: {
    el: ".swiper-pagination-5",
  },
});

var swiper = new Swiper(".mycard-6", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  pagination: {
    el: ".swiper-pagination-6",
  },
});

var swiper = new Swiper(".course-badge-1", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 8,       // Slide之間的間距
  // loop: true,
});

var swiper = new Swiper(".course-badge-2", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 8,       // Slide之間的間距
  // loop: true,
});

var swiper = new Swiper(".mycard-7", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  pagination: {
    el: ".swiper-pagination-7",
  },
});

var mycard_8 = new Swiper(".mycard-8", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 8,       // Slide之間的間距
  centeredSlides: false,  // 不居中顯示，確保左邊有預覽部分
  pagination: {
    el: ".swiper-pagination-8",
    clickable: true,
  },
  loop: true,             // 循環播放
});

var mycard_9 = new Swiper(".mycard-9", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  centeredSlides: false,  // 不居中顯示，確保左邊有預覽部分
  pagination: {
    el: ".swiper-pagination-8",
    clickable: true,
  },
  // loop: true,             // 循環播放
});


var mycard_9 = new Swiper(".mycard-10", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
  pagination: {
    el: ".swiper-pagination-8",
    clickable: true,
  },
  // loop: true,             // 循環播放
});



// -------


var prevButton = document.querySelector('.swiper-button-prev');
var nextButton = document.querySelector('.swiper-button-next');

prevButton.addEventListener('click', function() {
  banner.slidePrev(); // 切換到前一個slide
});

nextButton.addEventListener('click', function() {
  banner.slideNext(); // 切換到下一個slide
});

var prevButton1 = document.querySelector('.swiper-button-prev1');
var nextButton1 = document.querySelector('.swiper-button-next1');

prevButton1.addEventListener('click', function() {
  mycard_8.slidePrev();
});

nextButton1.addEventListener('click', function() {
  mycard_8.slideNext();
});