if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("sw registered"))
            .catch(err => console.log("sw error", err))
    })
}