var lastTime = {
    time: new Date()
};

document.body.style.border = '10px solid red';
const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);

/* BEGIN FUNCTION DECLARATIONS */

function onError(e) {
    console.error(e);
}

function checkStoredSettings(storedSettings) {
    var currentTime = new Date();
    var previousTime;
    var minuteDelay;
    if (!storedSettings.delay) {
        minuteDelay = 10;
    } else {
        minuteDelay = storedSettings.delay;
    }
    if (!storedSettings.lastTime) {
        browser.storage.local.set({lastTime});
        alert('You are accessing a Netsuite production account.');
    } else {
        previousTime = Date.parse(storedSettings.lastTime.time);
        if (currentTime - previousTime > 60000 * minuteDelay) {
            alert('You are accessing a Netsuite production account.');
            lastTime.time = new Date();
            browser.storage.local.set({lastTime});
        }
    }
}