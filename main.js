document.addEventListener("keydown", function (e) {
    if (e.key === "F12") e.preventDefault();
    if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J"))
        e.preventDefault();
    if (
        e.ctrlKey &&
        (e.key === "U" || e.key === "R" || e.key === "S" || e.key === "A")
    )
        e.preventDefault();
    if (e.ctrlKey && e.shiftKey && e.key === "R") e.preventDefault();
});
document.addEventListener("contextmenu", (e) => e.preventDefault());
document
    .querySelectorAll("body *")
    .forEach((item) => item.setAttribute("draggable", false));