const jeilbrekBtn = document.getElementById('jeilbrek'); 
const UAElement = document.getElementById("UA"); 
const mainContent = document.getElementById("main-content"); 

// Custom Loader Dom References 
const spinCircle = document.getElementById("spin"); 
const runningCircle = document.getElementById("running-circle"); 
const successCard = document.getElementById("success-card"); 

const exploitChain = "lapse"; 
UAElement.innerText += " " + navigator.userAgent; 

function cacheProgress(e) {
    const msgsElement = document.getElementById('msgs');
    if (e && e.lengthComputable && e.total > 0) {
        var Percent = Math.round((e.loaded / e.total) * 100);
        
        // Displays progress directly on your main text screen
        if (msgsElement) {
            msgsElement.innerText = "Caching Files: " + Percent + "%";
            msgsElement.style.color = "white"; // Reset to standard text color
        }
    } else {
        if (msgsElement) {
            msgsElement.innerText = "Caching in progress...";
        }
    }
}

function displayCacheProgress() {
    const msgsElement = document.getElementById('msgs');
    
    setTimeout(function () {
        if (msgsElement) {
            msgsElement.innerHTML = "Offline Cache Installed successfully! <span style='color: #00ffcc;'>&#x2713;</span>";
        }
    }, 1000);
    
    setTimeout(function () {
        if (msgsElement) {
            // Restores your target functional operational instructions
            msgsElement.innerText = "PRESS ENTER wait goldhen loaded\nIF GOLDHEN LOADED PRESS (PS) TO EXIT.";
            msgsElement.style.color = ""; // Reverts to your default CSS text color rules
        }
    }, 4000); // 4 seconds gives users enough time to read the success confirmation
}

document.addEventListener("DOMContentLoaded", function() {
    // Cache handling
    if (typeof window.applicationCache !== 'undefined' && window.applicationCache) {
        window.applicationCache.addEventListener("progress", cacheProgress, false);
        window.applicationCache.oncached = function (e) { displayCacheProgress(); };
        window.applicationCache.onupdateready = function (e) { displayCacheProgress(); };
    }
});

// 1. THIS FUNCTION STOPS THE SPINNING AND SHOWS THE CARD 
function stopSpinningState() { 
  if (spinCircle) spinCircle.style.display = "none"; // Hides solid spinning circle 
  if (runningCircle) runningCircle.style.display = "none"; // Hides glowing dashed ring 
  const msgsElement = document.getElementById('msgs'); 
  const msgsText = msgsElement ? msgsElement.innerText.toLowerCase() : ""; 
  
  // Only display success card overlay if the header didn't print a failure warning 
  if (!msgsText.includes("failed")) { 
    if (successCard) successCard.style.display = "block"; // Reveals your premium status card 
  } else { 
    if (jeilbrekBtn) jeilbrekBtn.disabled = false; 
  } 
  if (jeilbrekBtn) jeilbrekBtn.style.opacity = "1"; 
  if (mainContent) mainContent.style.opacity = "1"; 
} 

// Activates your dual-layered premium spin sequence setup 
function startSpinningState() { 
  if (jeilbrekBtn) jeilbrekBtn.disabled = true; 
  if (mainContent) mainContent.style.opacity = "0.15"; 
  if (spinCircle) spinCircle.style.display = "block"; 
  if (runningCircle) runningCircle.style.display = "block"; 
  if (successCard) successCard.style.display = "none"; 
} 

// -------------------------------------------------------- 
// --- VISUAL TEXT WATCHER ENGINE (MUTATION OBSERVER) --- 
document.addEventListener("DOMContentLoaded", function() { 
  const targetMsgs = document.getElementById('msgs'); 
  if (targetMsgs) { 
    const textObserver = new MutationObserver(function(mutations) { 
      mutations.forEach(function(mutation) { 
        const currentText = targetMsgs.innerText.toLowerCase(); 
        
        // IF ANY EXPLOIT RESULT SIGNATURE APPEARS, KILL THE SPIN ENGINE! 
        if ( 
          currentText.includes("already") || 
          currentText.includes("failed") || 
          currentText.includes("end") 
        ) { 
          stopSpinningState(); 
        } 
      }); 
    }); 
    textObserver.observe(targetMsgs, { childList: true, characterData: true, subtree: true }); 
  } 
}); 

// Mock Console fallback layer just in case main.js looks for the old log element 
const mockConsole = document.createElement('pre'); 
Object.defineProperty(document, 'getElementById', { 
  value: function(id) { 
    if (id === 'console') return mockConsole; 
    return HTMLDocument.prototype.getElementById.call(this, id); 
  }, 
  writable: true, 
  configurable: true 
}); 

// ------------------------------------------------------ 
// MANUAL EXECUTOR ONLY
jeilbrekBtn.addEventListener("click", function (e){ 
  startSpinningState(); 
  doJb(); 
}); 

document.addEventListener("DOMContentLoaded", function() { 
  // Set default starting message directly
  const msgsElement = document.getElementById('msgs'); 
  if (msgsElement) { 
    msgsElement.innerText = "PRESS ENTER WAIT GOLDHEN LOADED \nIF GOLDHEN LOADED PRESS (PS) TO EXIT."; 
  } 
});
