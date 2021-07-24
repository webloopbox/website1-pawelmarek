//-------------------------------slider----------------------------------------

class Slider {
  constructor(slides_class, duration, dots_class, prev_id, next_id) {
    this.slides = slides_class;
    this.duration = duration;
    this.dots = dots_class;
    this.prev = prev_id;
    this.next = next_id;
  }

  setup() {
    let slides = this.allSlides();

    function getfadeout(i) {
      setTimeout(function () {
        slides[i].style.transition = "0.5s ease";
      }, 500);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add("slide-unstage");
      slides[i].style.transition = "0s";
      getfadeout(i);
    }
  }

  allSlides() {
    var slides_elements = document.getElementsByClassName(this.slides);
    return slides_elements;
  }

  allDots() {
    var dots_elements = document.getElementsByClassName(this.dots);

    if (dots_elements.length != 0) {
      return dots_elements;
    }
  }

  PrevNextElements() {
    var prev = document.getElementById(this.prev);
    var next = document.getElementById(this.next);

    if (prev != null) {
      if (next != null) return { prev, next };
    }
  }

  changeSlides() {
    let slides_arr = this.allSlides();
    slides_arr[0].classList.add("slide-stage");

    // auto change
    /*------------------------------------------------------------------------------------------*/
    var current = 0;

    let dots_arr = this.allDots();
    if (dots_arr != null) {
      dots_arr[0].classList.add("dot-active");

      var slide_timer = setInterval(function () {
        current++;
        if (current == slides_arr.length) {
          current = 0;
        }
        if (current == 0) {
          slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
          slides_arr[current].classList.add("slide-stage");

          dots_arr[dots_arr.length - 1].classList.remove("dot-active");
          dots_arr[current].classList.add("dot-active");
        } else {
          slides_arr[current - 1].classList.remove("slide-stage");
          slides_arr[current].classList.add("slide-stage");

          dots_arr[current - 1].classList.remove("dot-active");
          dots_arr[current].classList.add("dot-active");
        }
      }, this.duration);
    } else {
      var slide_timer = setInterval(function () {
        current++;
        if (current == slides_arr.length) {
          current = 0;
        }
        if (current == 0) {
          slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
          slides_arr[current].classList.add("slide-stage");
        } else {
          slides_arr[current - 1].classList.remove("slide-stage");
          slides_arr[current].classList.add("slide-stage");
        }
      }, this.duration);
    }

    // prev / next
    /*------------------------------------------------------------------------------------------*/
    var pn_holder = this.PrevNextElements();
    if (pn_holder != null) {
      if (dots_arr != null) {
        pn_holder.prev.addEventListener("click", function () {
          clearInterval(slide_timer);

          slides_arr[current].classList.remove("slide-stage");
          dots_arr[current].classList.remove("dot-active");

          if (current == 0) {
            current = slides_arr.length - 1;
          } else {
            current--;
          }

          slides_arr[current].classList.add("slide-stage");
          dots_arr[current].classList.add("dot-active");

          slide_timer = setInterval(function () {
            current++;
            if (current == slides_arr.length) {
              current = 0;
            }
            if (current == 0) {
              slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");

              dots_arr[dots_arr.length - 1].classList.remove("dot-active");
              dots_arr[current].classList.add("dot-active");
            } else {
              slides_arr[current - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");

              dots_arr[current - 1].classList.remove("dot-active");
              dots_arr[current].classList.add("dot-active");
            }
          }, obj.duration);
        });

        pn_holder.next.addEventListener("click", function () {
          clearInterval(slide_timer);

          slides_arr[current].classList.remove("slide-stage");
          dots_arr[current].classList.remove("dot-active");

          if (current == slides_arr.length - 1) {
            current = 0;
          } else {
            current++;
          }

          slides_arr[current].classList.add("slide-stage");
          dots_arr[current].classList.add("dot-active");

          slide_timer = setInterval(function () {
            current++;
            if (current == slides_arr.length) {
              current = 0;
            }
            if (current == 0) {
              slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");

              dots_arr[dots_arr.length - 1].classList.remove("dot-active");
              dots_arr[current].classList.add("dot-active");
            } else {
              slides_arr[current - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");

              dots_arr[current - 1].classList.remove("dot-active");
              dots_arr[current].classList.add("dot-active");
            }
          }, obj.duration);
        });
      } else {
        pn_holder.prev.addEventListener("click", function () {
          clearInterval(slide_timer);

          slides_arr[current].classList.remove("slide-stage");

          if (current == 0) {
            current = slides_arr.length - 1;
          } else {
            current--;
          }

          slides_arr[current].classList.add("slide-stage");

          slide_timer = setInterval(function () {
            current++;
            if (current == slides_arr.length) {
              current = 0;
            }
            if (current == 0) {
              slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");
            } else {
              slides_arr[current - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");
            }
          }, obj.duration);
        });

        pn_holder.next.addEventListener("click", function () {
          clearInterval(slide_timer);

          slides_arr[current].classList.remove("slide-stage");

          if (current == slides_arr.length - 1) {
            current = 0;
          } else {
            current++;
          }

          slides_arr[current].classList.add("slide-stage");

          slide_timer = setInterval(function () {
            current++;
            if (current == slides_arr.length) {
              current = 0;
            }
            if (current == 0) {
              slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");
            } else {
              slides_arr[current - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");
            }
          }, obj.duration);
        });
      }
    }

    // onclick switch
    /*------------------------------------------------------------------------------------------*/
    var obj = this;
    if (dots_arr != null) {
      for (let i = 0; i < slides_arr.length; i++) {
        dots_arr[i].addEventListener("click", function () {
          clearInterval(slide_timer);

          for (let n = 0; n < slides_arr.length; n++) {
            slides_arr[n].classList.remove("slide-stage");
            dots_arr[n].classList.remove("dot-active");
          }
          slides_arr[i].classList.add("slide-stage");
          dots_arr[i].classList.add("dot-active");

          current = i;

          slide_timer = setInterval(function () {
            current++;
            if (current == slides_arr.length) {
              current = 0;
            }
            if (current == 0) {
              slides_arr[slides_arr.length - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");

              dots_arr[dots_arr.length - 1].classList.remove("dot-active");
              dots_arr[current].classList.add("dot-active");
            } else {
              slides_arr[current - 1].classList.remove("slide-stage");
              slides_arr[current].classList.add("slide-stage");

              dots_arr[current - 1].classList.remove("dot-active");
              dots_arr[current].classList.add("dot-active");
            }
          }, obj.duration);
        });
      }
    }
  }
}

var slider = new Slider("slide", 3000, "dot", "prev", "next");
slider.setup();
slider.changeSlides();
