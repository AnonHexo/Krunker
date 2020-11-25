{
    const aimbotPrecision = 200
    const hookedFunction = setInterval
    const wallhack = true
    const matchmakerKey = atob("Y2hpbGRyZW4")
    const injectionObject = document.documentElement
    const hackString = "innerText"
    const spinBotSetting = function(){return 0.5-Math.random()}

    let krunkerKRHack = gameVariable => gameVariable ? gameVariable.split('').sort(spinBotSetting).join('') : "";

    function injection(players) {
        for (let i = 0; i < players[matchmakerKey].length; i++) {
            wallhack && injection(players[matchmakerKey][i]);
        }
        if (players[matchmakerKey].length === 0) {
            players[hackString] = krunkerKRHack(players[hackString]);
        }
    }
    hookedFunction(() => injection(injectionObject), aimbotPrecision);
}
