import { initMenu } from "./menu.js";
import { initModal } from "./modal.js";
import { activeScrollReveal } from "./scrollReveal.js";

const initAll = () => {
    initMenu();
    initModal();
    activeScrollReveal();
}

initAll();