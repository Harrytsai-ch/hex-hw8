import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// console.log("Hello world!");

var swiper = new Swiper(".mySwiper", {
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
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 8,       // Slide之間的間距
  loop: true,
});


var swiper = new Swiper(".mycard-1", {
  slidesPerView: 'auto',  // 自動根據內容設定每個slide的寬度
  spaceBetween: 24,       // Slide之間的間距
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