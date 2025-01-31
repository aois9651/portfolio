setTimeout(() => {
  showTitle(0); 
  window.interval = setInterval(() => cycleTitle(), 4000)
}, 1000);

// Text Animation
let currentTitleIndex = 0;
const showTitle = (index) => {
 const span = document.querySelector(`.text-animation--${index}`);
  if (span) span.classList.add("text-animation--middle");
};

const hideTitle = (index) => {
  const span = document.querySelector(`.text-animation--${index}`);
  if (span) {
    span.classList.remove("text-animation--middle");
    span.classList.add("text-animation--up");
    
    setTimeout(() => {
      span.classList.remove("text-animation--up");
    }, 2000);
  }
};

const cycleTitle = () => {
  const span = document.querySelectorAll('.text-animation');
  hideTitle(currentTitleIndex);
  if ( currentTitleIndex === (span.length - 1) ) {
    currentTitleIndex = 0;
    clearInterval(interval)
  } else {
    currentTitleIndex++
  }
  // currentTitleIndex = currentTitleIndex === (span.length - 1) ? 0  : currentTitleIndex + 1;
  showTitle(currentTitleIndex);
};


// get elements
const body = document.body;
const progressBar = document.querySelector('.progress-bar');

function stretch() {
  const pixelScrolled = window.scrollY;
  const viewportHeight = window.innerHeight;
  const totalContentHeight = body.scrollHeight;
    
  // convert pixel to percentage 
  const pixelToPerc = (pixelScrolled / (totalContentHeight - viewportHeight)) * 100;
  
  // set width to the progress bar
  progressBar.style.width = Math.round(pixelToPerc) + '%';
}

// scroll event
window.addEventListener('scroll', stretch);