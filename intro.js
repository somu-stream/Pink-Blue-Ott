// 1. Smooth Fade-Out & Auto-Redirect Matrix with Connection Status Monitor
let redirectTimeout;
let fadeTimeout;

function startIntroRedirectLogic() {
  // User online-la irundha mattumae redirect logic triggers start aagum
  if (navigator.onLine) {
    
    // 3.5 seconds la mella fade-out start aagum
    fadeTimeout = setTimeout(() => {
      const introElement = document.querySelector(".intro");
      if (introElement) {
        introElement.style.transition = "opacity 1s ease";
        introElement.style.opacity = "0";
      }
    }, 3500);

    // 4.5 seconds la window replace use panni history lock panrom
    redirectTimeout = setTimeout(function() {
        window.location.replace('home.html');
    }, 5000);

  } else {
    // User offline-la irundha alert kaati loading-ah freeze pannidum
    alert("No Internet Connection! Please check your network to load SomuStream.");
  }
}

// First initial execution trigger
startIntroRedirectLogic();

// Naduvula connection change aana track panra real-time event listeners
window.addEventListener('online', () => {
  // Net thirumba vandhuchuna instantly redirection reset aagi thirumba reload running dynamic variables clear aagum
  startIntroRedirectLogic();
});

window.addEventListener('offline', () => {
  // Core rendering execution process bypass trigger controls
  clearTimeout(fadeTimeout);
  clearTimeout(redirectTimeout);
  
  // Dynamic element state reset
  const introElement = document.querySelector(".intro");
  if (introElement) {
    introElement.style.opacity = "1";
  }
  
  alert("Connection Lost! Internet check panel active.");
});



// 2. JS Anti-Zoom Prevention Rules
// Mobile Pinch-to-Zoom & Double Tap Zoom Interaction Block
document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    // Rendu viral vachu pinch zoom panna try pannா thadukkum
    event.preventDefault();
  }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  const now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    // Continuous double tap panni quick zoom panna try pannா thadukkum
    event.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false });

// Desktop Browsers Ctrl + Mouse Wheel Zoom Block
document.addEventListener('wheel', function (event) {
  if (event.ctrlKey) {
    // Ctrl key hold panni wheel scroll zoom panna vidaadhu
    event.preventDefault();
  }
}, { passive: false });


// 3. Complete Front-End Security & UI Lock Matrix
// Right Click (Context Menu) Full-ah Block Panna
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
}, false);

// Core Keyboard Inspector Shortcuts & Zoom Keys Block
document.addEventListener('keydown', function (event) {
  // F12 key-ah thadukka
  if (event.key === 'F12') {
    event.preventDefault();
    return false;
  }
  
  // Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Selector)
  if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) {
    event.preventDefault();
    return false;
  }
  
  // Ctrl+U (View Source Code block panna)
  if (event.ctrlKey && event.key === 'U') {
    event.preventDefault();
    return false;
  }
  
  // Ctrl+S (Page-ah local-ah save panna vidaama thadukka)
  if (event.ctrlKey && event.key === 'S') {
    event.preventDefault();
    return false;
  }

  // Keyboard Shortcuts Zoom Block (Ctrl + Plus / Minus / Zero)
  if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
    event.preventDefault();
    return false;
  }
});

// Mobile Drag, Text Selection & Image Ghost Drag Event Prevention
document.addEventListener('dragstart', function (event) {
  // Screen-la ulla logo image-ah ippo drag panni thaniya thookka mudiyadhu
  event.preventDefault();
});

document.addEventListener('selectstart', function (event) {
  // Forceful selection attempts completely locked
  event.preventDefault();
});
