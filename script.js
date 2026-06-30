const bell = document.getElementById("bell");
const panel = document.getElementById("panel");
const badge = document.getElementById("badge");
const markRead = document.getElementById("markRead");
bell.addEventListener("click", () => {
    panel.style.display =
        panel.style.display === "block" ? "none" : "block";
});
markRead.addEventListener("click", () => {
    const unread = document.querySelectorAll(".unread");
    unread.forEach(item=>{
        item.classList.remove("unread");
        item.classList.add("read");
    });
    badge.innerText="0";
    badge.style.display="none";
});
window.addEventListener("click",(e)=>{
    if(!e.target.closest(".notification-container")){
        panel.style.display="none";
    }
});