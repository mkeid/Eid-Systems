import browser from "detect-browser";

export default () => {
    if (browser && browser.name === 'ie') {
        const head = "Internet Explorer Detected!\n";
        const desc = "This application makes use of a number of libraries that are not supported by Internet Explorer. ";
        const apol = "I apologize for the inconvenience.";
        alert(`${head}${desc}${apol}`);
    }
};
