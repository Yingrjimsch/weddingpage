var i = 1;
setInterval(function() {
    i = i >= 10 ? 1 : ++i;
    console.log(i >= 10);
    console.log(i)
    document.getElementById("img").src="images/us/" + i + ".jpg";
  }, 2000);