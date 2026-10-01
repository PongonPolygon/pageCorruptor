// page corruptor (:
const corruptorHTML = `
<div corruptorhtml id="corruptorMain" class="corruptor">
    <div id="corruptorBar">
    </div>
    <div id="corruptorBarIcons">
    </div>
    <div id="corruptorBody">
    </div>
</div>
`;

const corruptorCSS = `
<style corruptorcss>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    .corruptor {
        all: revert;
        z-index: 9999999999999999999;
        font-family: "Nunito", sans-serif;
        position: fixed;
        left: 0;
        top: 0;
        margin-left: 0;
        margin-top: 0;
        width: 200px;
        height: 300px;
        background-color: #555555;
    }
</style>
`;

if (!document.querySelector("[corruptorcss]")) {
    document.head.insertAdjacentHTML("beforeend", corruptorCSS);
}

if (!document.querySelector("[corruptorhtml]")) {
    document.body.insertAdjacentHTML("afterbegin", corruptorHTML);
    
    const corruptorMain = document.getElementById("corruptorMain");
    corruptorMain.style.marginLeft = `${window.innerWidth/2 - corruptorMain.clientWidth/2}px`;
}
