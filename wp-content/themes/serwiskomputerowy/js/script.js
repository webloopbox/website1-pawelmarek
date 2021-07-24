const hamburger = document.querySelector("#hamburger");
const h_first_line = document.querySelector(".line1");
const h_second_line = document.querySelector(".line2");
const h_last_line = document.querySelector(".line3");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const menu_links = document.querySelectorAll(".menu-link");
const page = document.getElementsByTagName("body")[0];

//----------------------hamburger / overlay under menu---------------------------
hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("open");
  page.classList.toggle("noscroll");
  h_first_line.classList.toggle("h-active");
  h_last_line.classList.toggle("none");
  h_second_line.classList.toggle("last-line");
  overlay.classList.toggle("overlay-open");
});

overlay.addEventListener("click", function () {
  this.classList.remove("overlay-open");
  menu.classList.remove("open");
  page.classList.toggle("noscroll");
  h_first_line.classList.remove("h-active");
  h_last_line.classList.remove("none");
  h_second_line.classList.remove("last-line");
});
//----------------------scroll arrow---------------------------

jQuery("#scroll").on("click", scroll);

function scroll() {
  var el = document.getElementById("features-title");
  el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

//----------------------menu active / for wordpress---------------------------

jQuery(".current_page_item a").addClass("active");

//----------------------remove wordpress widget default wrapper div---------------------------

jQuery(".textwidget").contents().unwrap();

//----------------------page loader---------------------------

jQuery(window).load(function () {
  jQuery("#status").fadeOut(500);
  jQuery("#preloader").delay(150).fadeOut(500);
});

//----------------------post items dynamic width---------------------------------

var items = document.getElementsByClassName("blog-items");
var read_more = document.getElementsByClassName("read-more")[0];
var post = document.getElementsByClassName("each-post")[0];
if (read_more != null || post != null) {
  var rmw = read_more.offsetWidth;
  var pw = post.offsetWidth;

  jQuery(window).resize(function () {
    rmw = read_more.offsetWidth;
    pw = post.offsetWidth;

    for (let i = 0; i < items.length; i++) {
      items[i].style.width = pw - rmw + "px";
    }
  });

  for (let i = 0; i < items.length; i++) {
    items[i].style.width = pw - rmw + "px";
  }
}
