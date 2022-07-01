$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
function search() {
  var search = document.getElementById("icon-search");
  search.classList.toggle("search");
  console.log(search);
}

function dark() {
  var test = document.querySelectorAll("h3");
  //   test.classList.toggle("dark-mode");
  console.log(test);
  for (var i = 0; i < test.length; i++) {
    test[i].classList.toggle("dark-mode");
  }
  var titleH4 = document.querySelectorAll("h4");
  //   titleH4.classList.toggle("dark-mode");
  console.log(titleH4);
  for (var i = 0; i < titleH4.length; i++) {
    titleH4[i].classList.toggle("dark-mode");
  }
  var bg1 = document.querySelectorAll(".bg-1");
  console.log(bg1);
  for (var i = 0; i < bg1.length; i++) {
    bg1[i].classList.toggle("background1");
  }
  var bg2 = document.querySelectorAll(".bg-2");
  console.log(bg2);
  for (var i = 0; i < bg2.length; i++) {
    bg2[i].classList.toggle("background2");
  }
  var way = document.querySelector(".way");
  way.classList.toggle("background1");
  console.log(way);
}
