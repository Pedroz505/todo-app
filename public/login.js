import { loginWithFacebook } from "./auth.js";

document.getElementById("facebookLogin").onclick = async () => {
    try {
        await loginWithFacebook();
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error(error);
    }
};