import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestURL } from "./screens/utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = async () => {
  const request = parseRequestURL();
  //   Using ternary operator we check if request.resource exists then `/${request.resource}`else '/'
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("main-container"); // getting "main-container" from html file

  main.innerHTML = await screen.render();
  console.log("hello");
};

window.addEventListener(
  "load",
  router
); /*this line is to ensure that all the resources on the 
webpage have been loaded before the JavaScript code is executed*/
window.addEventListener("hashchange", router);
