//Toggles menu for navigation bar
function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const timeElement = document.getElementById("time");

function updateTime() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  timeElement.innerText = currentTime;
}

setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();

function refreshPage() {
  // Reload the current page
  location.reload();
}
