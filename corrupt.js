// page corruptor (:
const corruptorHTML = `
<div id="corruptor corruptorMain">
    <div id="corruptorBar">
    </div>
    <div id="corruptorBarIcons">
    </div>
    <div id="corruptorBody">
    </div>
</div>
`;

const corruptorCSS = `
<style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    .corruptor {
        font-family: "Nunito", sans-serif;
    }
</style>
`;

document.head.insertAdjacentHTML("beforeend", corruptorCSS);