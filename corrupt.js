// page corruptor (:
const corruptorHTML = `
<div corruptorhtml id="corruptorMain" class="corruptor">
    <div id="corruptorBar" class="corruptorBar">
        <p>Page Corruptor</p>
    </div>
    <div id="corruptorBarIcons" class="corruptorBarIcons">
    </div>
    <div id="corruptorBody" class="corruptorBody">
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
        width: 300px;
        height: 400px;
        max-height: 400px;
        border-radius: 20px;
        overflow: clip;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    .corruptorBar {
        width: 100%;
        background-color: #333333;
        height: 40px;
        cursor: grab;
        padding: 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .corruptorBar p {
        user-select: none;
        margin-left: 5px;
        color: white;
        margin-block: 0;
        font-size: 20px;
    }
    .corruptorBody {
        height: 100%;
        width: 100%;
        background-color: #555555;
    }
    .corruptorBarIcons {
        position: absolute;
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        align-items: flex-start;
    }
    .corruptorBarIconsIcon {
        pointer-events: normal;
    }
</style>
`;

if (!document.querySelector("[corruptorcss]")) {
    document.head.insertAdjacentHTML("beforeend", corruptorCSS);
}

if (!document.querySelector("[corruptorhtml]")) {
    document.body.insertAdjacentHTML("afterbegin", corruptorHTML);
    
    const corruptorMain = document.getElementById("corruptorMain");
    corruptorMain.style.left = `${window.innerWidth/2 - corruptorMain.clientWidth/2}px`;
    corruptorMain.style.top = `${window.innerHeight/2 - corruptorMain.clientHeight/2}px`;
}
