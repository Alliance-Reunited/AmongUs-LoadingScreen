updateLoadingText = (cont) => {
    var ele = document.getElementById("loadingtext");
    ele.innerText = cont;
}

var tips = [
    "🔪 Imposters can kill people on sight",
    "😎 If you wanna become a kool kid, donations are coming soon",
    "🤣 This is a non-serious server, so joke around all you want",
    "😐 Our admins are non-intrusive",
    "👀 Red kinda sus ngl",
    "📌 You can view importaint stuff in our discord: discord.alru.ga",
]

updateTipsText = () => {
    var ele = document.getElementById("tips");
    var str = tips[Math.floor(Math.random()*tips.length)];
    var att = 1;

    while (str == ele.innerText) {
        str = tips[Math.floor(Math.random()*tips.length)];
        att++;
        console.log("Finding random, attempt " + att + ".")
    }
    
    ele.innerText = str;
}

window.onload = () => {
    var ele = document.getElementById("music");
    ele.volume = 0.15;

    updateLoadingText("Please Wait...");
    updateTipsText();
    setInterval(updateTipsText, 5000)
}

function SetStatusChanged( status ) {
    updateLoadingText(status);
}