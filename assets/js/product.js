function movement(x) {
  //Movement Animation to happen
  const container = document.querySelector("." + x);

  const card = document.querySelector('.'.concat(x, ' .card'));
  //Items

  const title = document.querySelector("." + x + " .title-block");
  const sneaker = document.querySelector("." + x + " .sneaker img");
  const description = document.querySelector("." + x + " .info p");


  if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    container.addEventListener("pointerenter", (e) => {
      card.style.transition = "none";
      //Popout
      title.style.transform = "translateZ(150px)";
      sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
      description.style.transform = "translateZ(125px)";
    });

    container.addEventListener("pointerleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      title.style.transform = "translateZ(0px)";
      sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
      description.style.transform = "translateZ(0px)";
    });
  }

  else {
    //Moving Animation Event
    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //Animate In
    container.addEventListener("mouseenter", (e) => {
      card.style.transition = "none";
      //Popout
      title.style.transform = "translateZ(150px)";
      sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
      description.style.transform = "translateZ(125px)";
    });
    //Animate Out
    container.addEventListener("mouseleave", (e) => {
      card.style.transition = "all 0.5s ease";
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      //Popback
      title.style.transform = "translateZ(0px)";
      sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
      description.style.transform = "translateZ(0px)";
    });
  }
}


