const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);


/* BEGIN FUNCTION DECLARATIONS */

function listenForClicks() {
    document.getElementById("submit-button").addEventListener("click", (e) => {
        console.log("Click detected");
        var newDelay = document.getElementById("reminder-delay-input").value;
        browser.storage.local.set({delay: newDelay});
        window.close();
    });
}

function checkStoredSettings(storedSettings) {
    if (storedSettings.delay) {
        document.getElementById("reminder-delay-input").value = storedSettings.delay;
    }
    listenForClicks();
}

function onError(e) {
    console.error(e);
}