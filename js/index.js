import { Router } from "./router.js";

const router = new Router();
router.add("/", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/exploration.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

let image = document.querySelector("img");
console.log(image)
let currentPage = window.location.pathname

if (currentPage == "/universe") {
  image.removeAttribute("src");
  image.setAttribute("src", "/assets/mountains-universe-2.svg");
} else if (currentPage == "/exploration") {
  image.removeAttribute("src");
  image.setAttribute("src", "/assets/mountains-universe-3.svg");
}

console.log(currentPage)