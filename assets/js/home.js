const arrayBanner = [
  {
    image: "assets/Banner1.png",
    schedule: "Wed, 15 Nov, 4:00 PM",
    title: "Sights & Sound Exhibition",
    viewer: "assets/avatars.png",
    link: "event.html",
  },
  {
    image: "assets/Banner2.png",
    schedule: "Thu, 16 Nov, 7:00 PM",
    title: "See it in Gold Class",
    viewer: "assets/avatars.png",
    link: "event.html",
  },
];

//PARENT EVENT BANNER WRAP

//ebw>a>eb>img'image',btxt>'schedule','title',bv>div>'viewer'

//Ganti isi event-banner-wrap, dengan input dari javascript

const ParentEB = document.querySelector(".event-banner-wrap");

function callBanner(times, ParentEB, arrayBanner) {

  for (let j = 0; j < times; j++) {
    
    for (let i = 0; i < arrayBanner.length; i++) {
      
      const anchorEB = document.createElement("a");
      anchorEB.setAttribute("href", `${arrayBanner[i].link}`);
      ParentEB.appendChild(anchorEB);
      
      const divEB = document.createElement("div");
      divEB.setAttribute("class", "event-banner");
      anchorEB.appendChild(divEB);
      
      const imageEB = document.createElement("img");
      imageEB.setAttribute("src", `${arrayBanner[i].image}`);
      divEB.appendChild(imageEB);
      
      const textEB = document.createElement("div");
      textEB.setAttribute("class", "banner-text");
      divEB.appendChild(textEB);
      
      const scheduleEB = document.createElement("div");
      scheduleEB.setAttribute("class", "banner-text-first");
      scheduleEB.innerText = `${arrayBanner[i].schedule}`;
      textEB.appendChild(scheduleEB);
      
      const titleEB = document.createElement("div");
      titleEB.setAttribute("class", "banner-text-second");
      titleEB.innerText = `${arrayBanner[i].title}`;
      textEB.appendChild(titleEB);
      
      const viewerEB = document.createElement("div");
      viewerEB.setAttribute("class", "banner-view-account");
      textEB.appendChild(viewerEB);
      
      const inView = document.createElement("div");
      viewerEB.appendChild(inView);
      
      const imgView = document.createElement("img");
      imgView.setAttribute("src", `${arrayBanner[i].viewer}`);
      inView.appendChild(imgView);
    }
  }
}

callBanner(10, ParentEB, arrayBanner);


