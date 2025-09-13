const startDate = new Date("2024-09-13T23:00:00");

function updateTimer() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000); // difference in seconds

  const days = Math.floor(diff / 86400);
  diff %= 86400;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("timer").textContent =
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

setInterval(updateTimer, 1000);
updateTimer();

document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("card").classList.remove("hidden");
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("openBtn").style.display="none";
  document.getElementById("audio").play().catch(()=>{});
});