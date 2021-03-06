(function() {
    window.addEventListener("keydown", function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("active");

    })

    function removeClass(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove("active");
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener("transitionend", removeClass));
}());