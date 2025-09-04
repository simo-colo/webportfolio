  window.addEventListener("scroll", function () {
    const header = document.querySelector(".topbar");
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


function scrollToSection(id) {
  const section = document.getElementById(id);
  const yOffset = -130;
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  closeMiniMenu();

  window.scrollTo({ top: y, behavior: 'smooth' });
}



//TOPBAR RESPONSIVENESS

const menuBtn = document.getElementById("menubtn");
const closeBtn = document.getElementById("closebtn");
const miniMenu = document.getElementById("minimenu");

menuBtn.addEventListener("click", () => {
  miniMenu.style.display = "flex";
  menuBtn.src="media/webicons/close.svg"
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";

  requestAnimationFrame(() => {   // allow transition to trigger
    miniMenu.classList.add("active");
  });

});

function closeMiniMenu(){
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  menuBtn.src="media/webicons/menu.svg"

  miniMenu.classList.remove("active");
  miniMenu.addEventListener("transitionend", function handler() {
    if (!miniMenu.classList.contains("active")) {
      miniMenu.style.display = "none";
    }
    miniMenu.removeEventListener("transitionend", handler);
  });
}

closeBtn.addEventListener("click", () => {

  closeMiniMenu();
  
  


});








  const copyAlertContainer = document.getElementById("copyAlertContainer");

  
  function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied:", text);

  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}



const mailContainer = document.getElementById("mailContainer");
const mail = document.getElementById("mail");
mailContainer.addEventListener('click', () => {
  copyText(mail.innerText);
  copyAlertContainer.classList.remove("slide");
  copyAlertContainer.innerText = "E-mail copied to clipboard!"
  void copyAlertContainer.offsetWidth;  
  copyAlertContainer.classList.add("slide");
});

const waContainer = document.getElementById('waContainer');
waContainer.addEventListener('click', () => {
  window.open("https://wa.me/393428416674");
});

const linContainer = document.getElementById('linContainer');
linContainer.addEventListener('click', () => {
  window.open("https://www.linkedin.com/in/simone-colombo04/");
});

const gitContainer = document.getElementById('gitContainer');
gitContainer.addEventListener('click', () => {
  window.open("https://github.com/simo-colo");
});

const locContainer = document.getElementById('locContainer');
locContainer.addEventListener('click', () => {
  window.open("https://maps.app.goo.gl/3ceSGTUA5bYCeYDQ6");
});

const share = document.getElementById("share");
share.addEventListener('click', () => {
  copyText("The developer forgot to add a link!");
  copyAlertContainer.classList.remove("slide");
  copyAlertContainer.innerText = "Link copied to clipboard!"
  void copyAlertContainer.offsetWidth;  
  copyAlertContainer.classList.add("slide");
});