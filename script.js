  window.addEventListener("scroll", function () {
    const header = document.querySelector(".topbar");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
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