var shadowHost = document.getElementById("shadow-host");
var shadowRoot = shadowHost.createShadowRoot(); // Creating a shadow Root

var shadowChild = document.createElement("span");
shadowChild.innerHTML = document.getElementById("news-widget").innerHTML;

shadowRoot.appendChild(shadowChild);