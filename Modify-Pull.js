var mdebug = false;
var moduleurl = "";

function enableModifyDebugging() {
  mdebug = true;
}

function disableModifyDebugging() {
  mdebug = false;
}

function toggleModifyDebugging() {
  mdebug = !mdebug;
}

function testModifyDebugging() {
  if (mdebug == true) {
    console.log("Debugging in Modify.js is enabled.");
  }
}

function pullModule(module) {
  moduleurl = "https://cdn.rawgit.com/IAP-Reloaded/Modify.js/master/" + module + ".js";
  if (mdebug == true) {
    console.log("Pulling module " + module + " from GitHub resp... (Full URL for it was " + moduleurl + ")");
  }
  var imported = document.createElement('script');
  imported.src = moduleurl;
  document.head.appendChild(imported);
  if (mdebug == true) {
    console.log("Finished pulling module " + module + "! (Full URL for it was " + moduleurl + ")");
  }
}
