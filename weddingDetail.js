var i = 1;
setInterval(function() {
    i = i >= 10 ? 1 : ++i;
    let s = document.getElementById("img").src;
    console.log()
    document.getElementById("img").src= window.location.pathname.includes("/en/") ? "../images/us/" + i + ".png" : "images/us/" + i + ".png";
  }, 4000);