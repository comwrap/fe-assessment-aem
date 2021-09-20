class Carousel {
    constructor(carousel) {
      this.carousel = carousel;
      this.content = this.carousel.querySelector(".cmp-carousel__content");
      this.subItems = this.carousel.querySelectorAll(".cmp-carousel__item");
      this.indicators = this.carousel.querySelector(".cmp-carousel__indicators");
      this.indicatorDots = this.carousel.querySelectorAll(
        ".cmp-carousel__indicator"
      );
      this.next = this.carousel.querySelector(".cmp-carousel__action--next");
      this.prev = this.carousel.querySelector(".cmp-carousel__action--previous");
      this.xDown = null;
      this.yDown = null;
      this.carouselFirstItem = null;
      this.init();
    }
    init() {
      if (!this.subItems || this.subItems.length <= 1) {
        return;
      }
      this.carouselFirstItem = this.subItems[0];
      this.carousel.setAttribute("data-current-index", 0);
      this.carousel.setAttribute("data-max-index", this.subItems.length - 1);
  
      this.next &&
        this.next.addEventListener("click", () => {
          this.setNextIndex();
        });
  
      this.prev &&
        this.prev.addEventListener("click", () => {
          this.setPrevIndex();
        });
  
      this.content &&
        this.content.addEventListener(
          "touchstart",
          (event) => {
            const touch = event.touches[0];
            this.onTouch(touch.clientX, touch.clientY);
          },
          !0
        );
  
      this.content &&
        this.content.addEventListener(
          "touchmove",
          (event) => {
            if (!this.xDown || !this.yDown) return;
            const clientX = event.touches[0].clientX;
            const clientY = event.touches[0].clientY;
            this.onMove(clientX, clientY);
          },
          !0
        ),
        this.indicatorDots &&
          this.indicatorDots.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
              indicator.classList.contains("cmp-carousel__indicator--active") ||
                this.setIndex(index);
            });
          });
    }
    onTouch(clientX, clientY) {
      this.xDown = clientX;
      this.yDown = clientY;
    }
    onMove(clientX, clientY) {
      const xDiff = this.xDown - clientX;
      const yDiff = this.yDown - clientY;
      Math.abs(xDiff) > Math.abs(yDiff) &&
        (xDiff > 0 ? this.setNextIndex() : this.setPrevIndex());
      this.xDown = null;
      this.yDown = null;
    }
    setIndex(index) {
        const currentIndex = this.carousel.getAttribute("data-current-index");
        const maxIndex = this.carousel.getAttribute("data-max-index");
        if (index != currentIndex && index <= maxIndex) {
          this.carousel.setAttribute("data-current-index", index);
          this.setIndicator(index);
          this.setImageListIndex(index);
        }
      
    }
    setNextIndex() {
      let currentIndex =
        parseInt(this.carousel.getAttribute("data-current-index", 10)) + 1;
      if (
        currentIndex > parseInt(this.carousel.getAttribute("data-max-index", 10))
      ) {
        currentIndex = 0;
      }
      this.carousel.setAttribute("data-current-index", currentIndex),
        this.setIndicator(currentIndex),
        this.setImageListIndex(currentIndex);
    }
  
    setPrevIndex() {
      const currentIndex = parseInt(
        this.carousel.getAttribute("data-current-index", 10)
      );
      const maxIndex = parseInt(this.carousel.getAttribute("data-max-index", 10));
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = maxIndex;
      }
      this.carousel.setAttribute("data-current-index", prevIndex),
        this.setIndicator(prevIndex),
        this.setImageListIndex(prevIndex);
    }
  
    setImageListIndex(index) {
      if (this.carouselFirstItem) {
        const marginLeft = -100 * index;
        this.carouselFirstItem.style.marginLeft = marginLeft + "%";
      }
    }
    setIndicator(index) {
      this.indicatorDots &&
        this.indicatorDots.forEach((indicator, indicatorIndex) => {
          indicator.classList.remove("cmp-carousel__indicator--active");
          index == indicatorIndex && indicator.classList.add("cmp-carousel__indicator--active");
        });
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cmp-carousel").forEach((carousel) => {
      new Carousel(carousel);
    });
  });
  