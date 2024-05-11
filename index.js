document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const imageGrid = document.querySelector(".image-grid");

    let currentIndex = 0;

    // Function to add images dynamically
    function addImage(src) {
        const img = document.createElement("img");
        img.src = src;
        imageGrid.appendChild(img);
    }

    // Add images to the image grid
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2220139-229.01_450x.jpg?v=1714075180");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110353-3AL.01_450x.jpg?v=1713793540");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2220139-229.01_450x.jpg?v=1714075180");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110353-3AL.01_450x.jpg?v=1713793540");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2220139-229.01_450x.jpg?v=1714075180");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110353-3AL.01_450x.jpg?v=1713793540");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2220139-229.01_450x.jpg?v=1714075180");
    addImage("https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110353-3AL.01_450x.jpg?v=1713793540");
    // Add more images as needed...

    function slide(direction) {
        const width = slider.clientWidth;
        if (direction === "next") {
            currentIndex += 4;
        } else {
            currentIndex -= 4;
        }
        currentIndex = Math.max(0, Math.min(currentIndex, slider.scrollWidth - width));
        slider.scrollTo({ left: currentIndex, behavior: "smooth" });
    }

    prevButton.addEventListener("click", () => slide("prev"));
    nextButton.addEventListener("click", () => slide("next"));

    leftArrow.addEventListener("click", () => slide("prev"));
    rightArrow.addEventListener("click", () => slide("next"));
});
 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        },
        1380:{
            slidesPerView: 5,
        }
    },
  });
  