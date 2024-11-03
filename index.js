// Fetch profile and picture from the github
const url = `https://api.github.com/users/lichen4262474`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const avatarUrl = data.avatar_url;
    const bio = data.bio;
    document.getElementById("avatar").src = avatarUrl;
    document.getElementById("bio").textContent = bio;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Function to animate progress bars
function animateProgressBars() {
  const htmlProgress = document.getElementById("htmlProgress");
  const jsProgress = document.getElementById("jsProgress");
  const dbProgress = document.getElementById("dbProgress");
  const javaProgress = document.getElementById("javaProgress");

  const htmlPercentage = 70;
  const jsPercentage = 80;
  const dbPercentage = 80;
  const javaPercentage = 90;

  // Animate function to gradually increase width
  const animateBar = (element, targetPercentage) => {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= targetPercentage) {
        clearInterval(interval);
      } else {
        width++;
        element.style.width = width + "%";
        element.setAttribute("aria-valuenow", width);
      }
    }, 20);
  };

  animateBar(htmlProgress, htmlPercentage);
  animateBar(jsProgress, jsPercentage);
  animateBar(dbProgress, dbPercentage);
  animateBar(javaProgress, javaPercentage);
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about");
  if (isElementInViewport(aboutSection)) {
    animateProgressBars(); // Start animation when the section is in view
    window.removeEventListener("scroll", arguments.callee); // Remove listener after animation to prevent re-triggering
  }
});
