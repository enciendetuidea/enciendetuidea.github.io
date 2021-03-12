function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


var countDate = new Date('Apr 17, 2021 00:00:00').getTime();

function newYear(){
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
}

setInterval(function(){
    newYear();
},1000)


twttr.widgets.createShareButton(
    "https:\/\/dev.twitter.com\/web\/tweet-button",
    document.getElementById("tweet-container"),
    {
      size: "large",
      text: "Taller personalizado, con un grupo pequeño en el cual obtendrás bases sólidas para tu marca o proyecto y su plan estratégico",
      hashtags: "example,demo",
      via: "twitterdev",
      related: "twitterapi,twitter"
    }
  );