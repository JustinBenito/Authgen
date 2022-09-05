var drawerhomeButton = document.getElementById("drawerhomeButton");
if (drawerhomeButton) {
  drawerhomeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var drawergeneratorButton = document.getElementById("drawergeneratorButton");
if (drawergeneratorButton) {
  drawergeneratorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var drawermanagerButton = document.getElementById("drawermanagerButton");
if (drawermanagerButton) {
  drawermanagerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var drawercontactButton = document.getElementById("drawercontactButton");
if (drawercontactButton) {
  drawercontactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var iconButton = document.getElementById("iconButton");
if (iconButton) {
  iconButton.addEventListener("click", function () {
    var drawerOverlay = document.getElementById("drawer");
    if (!drawerOverlay) return;
    var drawerOverlayStyle = drawerOverlay.style;
    if (drawerOverlayStyle) {
      drawerOverlayStyle.display = "flex";
      drawerOverlayStyle.zIndex = 99;
      drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      drawerOverlayStyle.alignItems = "center";
      drawerOverlayStyle.justifyContent = "";
    }
    drawerOverlay.setAttribute("closable", "");

    var onClick =
      drawerOverlay.onClick ||
      function (e) {
        if (
          e.target === drawerOverlay &&
          drawerOverlay.hasAttribute("closable")
        ) {
          drawerOverlayStyle.display = "none";
        }
      };
    drawerOverlay.addEventListener("click", onClick);
  });
}

var generatorButton = document.getElementById("generatorButton");
if (generatorButton) {
  generatorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var managerButton = document.getElementById("managerButton");
if (managerButton) {
  managerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var letsGoBtn = document.getElementById("letsGoBtn");
if (letsGoBtn) {
  letsGoBtn.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

//Contact
var drawerhomeButton = document.getElementById("drawerhomeButton");
if (drawerhomeButton) {
  drawerhomeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var drawergeneratorButton = document.getElementById("drawergeneratorButton");
if (drawergeneratorButton) {
  drawergeneratorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var drawermanagerButton = document.getElementById("drawermanagerButton");
if (drawermanagerButton) {
  drawermanagerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var drawercontactButton = document.getElementById("drawercontactButton");
if (drawercontactButton) {
  drawercontactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var iconButton = document.getElementById("iconButton");
if (iconButton) {
  iconButton.addEventListener("click", function () {
    var drawerOverlay = document.getElementById("drawer");
    if (!drawerOverlay) return;
    var drawerOverlayStyle = drawerOverlay.style;
    if (drawerOverlayStyle) {
      drawerOverlayStyle.display = "flex";
      drawerOverlayStyle.zIndex = 99;
      drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      drawerOverlayStyle.alignItems = "center";
      drawerOverlayStyle.justifyContent = "";
    }
    drawerOverlay.setAttribute("closable", "");

    var onClick =
      drawerOverlay.onClick ||
      function (e) {
        if (
          e.target === drawerOverlay &&
          drawerOverlay.hasAttribute("closable")
        ) {
          drawerOverlayStyle.display = "none";
        }
      };
    drawerOverlay.addEventListener("click", onClick);
  });
}

var homeButton = document.getElementById("homeButton");
if (homeButton) {
  homeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var generatorButton = document.getElementById("generatorButton");
if (generatorButton) {
  generatorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var managerButton = document.getElementById("managerButton");
if (managerButton) {
  managerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

//drawer

var drawerhomeButton = document.getElementById("drawerhomeButton");
if (drawerhomeButton) {
  drawerhomeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var drawergeneratorButton = document.getElementById("drawergeneratorButton");
if (drawergeneratorButton) {
  drawergeneratorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var drawermanagerButton = document.getElementById("drawermanagerButton");
if (drawermanagerButton) {
  drawermanagerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var drawercontactButton = document.getElementById("drawercontactButton");
if (drawercontactButton) {
  drawercontactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

//main i.e the generator

var drawerhomeButton = document.getElementById("drawerhomeButton");
if (drawerhomeButton) {
  drawerhomeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var drawergeneratorButton = document.getElementById("drawergeneratorButton");
if (drawergeneratorButton) {
  drawergeneratorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var drawermanagerButton = document.getElementById("drawermanagerButton");
if (drawermanagerButton) {
  drawermanagerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var drawercontactButton = document.getElementById("drawercontactButton");
if (drawercontactButton) {
  drawercontactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var iconButton = document.getElementById("iconButton");
if (iconButton) {
  iconButton.addEventListener("click", function () {
    var drawerOverlay = document.getElementById("drawer");
    if (!drawerOverlay) return;
    var drawerOverlayStyle = drawerOverlay.style;
    if (drawerOverlayStyle) {
      drawerOverlayStyle.display = "flex";
      drawerOverlayStyle.zIndex = 99;
      drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      drawerOverlayStyle.alignItems = "center";
      drawerOverlayStyle.justifyContent = "";
    }
    drawerOverlay.setAttribute("closable", "");

    var onClick =
      drawerOverlay.onClick ||
      function (e) {
        if (
          e.target === drawerOverlay &&
          drawerOverlay.hasAttribute("closable")
        ) {
          drawerOverlayStyle.display = "none";
        }
      };
    drawerOverlay.addEventListener("click", onClick);
  });
}

var homeButton = document.getElementById("homeButton");
if (homeButton) {
  homeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var managerButton = document.getElementById("managerButton");
if (managerButton) {
  managerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var managePasswordsButton = document.getElementById("managePasswordsButton");
if (managePasswordsButton) {
  managePasswordsButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

//manage

var drawerhomeButton = document.getElementById("drawerhomeButton");
if (drawerhomeButton) {
  drawerhomeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var drawergeneratorButton = document.getElementById("drawergeneratorButton");
if (drawergeneratorButton) {
  drawergeneratorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var drawermanagerButton = document.getElementById("drawermanagerButton");
if (drawermanagerButton) {
  drawermanagerButton.addEventListener("click", function (e) {
    window.location.href = "./manage.html";
  });
}

var drawercontactButton = document.getElementById("drawercontactButton");
if (drawercontactButton) {
  drawercontactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var iconButton = document.getElementById("iconButton");
if (iconButton) {
  iconButton.addEventListener("click", function () {
    var drawerOverlay = document.getElementById("drawer");
    if (!drawerOverlay) return;
    var drawerOverlayStyle = drawerOverlay.style;
    if (drawerOverlayStyle) {
      drawerOverlayStyle.display = "flex";
      drawerOverlayStyle.zIndex = 99;
      drawerOverlayStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
      drawerOverlayStyle.alignItems = "center";
      drawerOverlayStyle.justifyContent = "";
    }
    drawerOverlay.setAttribute("closable", "");

    var onClick =
      drawerOverlay.onClick ||
      function (e) {
        if (
          e.target === drawerOverlay &&
          drawerOverlay.hasAttribute("closable")
        ) {
          drawerOverlayStyle.display = "none";
        }
      };
    drawerOverlay.addEventListener("click", onClick);
  });
}

var homeButton = document.getElementById("homeButton");
if (homeButton) {
  homeButton.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var generatorButton = document.getElementById("generatorButton");
if (generatorButton) {
  generatorButton.addEventListener("click", function (e) {
    window.location.href = "./main.html";
  });
}

var contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        const targetElement = entry.target;
        targetElement.classList.add("animate");
        observer.unobserve(targetElement);
      }
    }
  },
  {
    threshold: 0.15,
  }
);

for (let i = 0; i < scrollAnimElements.length; i++) {
  observer.observe(scrollAnimElements[i]);
}

//The Main

function generate() {
  pass = genPassword();
  document.getElementById("pwd-gen").setAttribute("value", pass);
}

function genPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

function copyPassword() {
  var copyText = document.getElementById("pwd-gen");
  copyText.select();
  navigator.clipboard.writeText(pass);
}
