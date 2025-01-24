class DJEban {
    constructor() {
        this.currScr = 0;
        this.currScale = 1;
        this.scaleDirection = "up";
        this.direction = "top";
        this.intTimer = null;
        this.audio = new Audio('https://raw.githubusercontent.com/Crasher69/dj_eban/master/dj.mp3');

        this.audio.addEventListener('ended', () => this.resetScene());
    }

    start() {
        this.playAudio();
        setTimeout(() => this.createGifs(), 1300);
    }

    playAudio() {
        this.audio.play();
    }

    createGifs() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="g1" style="position:fixed; top:100px; left:40%;">
                <img src="https://raw.githubusercontent.com/Crasher69/dj_eban/master/g1.gif" />
            </div>
            <div class="g2" style="position:fixed; top:300px; right:30%;">
                <img src="https://raw.githubusercontent.com/Crasher69/dj_eban/master/g2.gif" />
            </div>
        `);
        this.intTimer = setInterval(() => this.kach(), 40);
    }

    kach() {
        // Изменяем цвет фона каждые 3 кадра
        if (this.currScr % 3 === 0) {
            document.body.style.backgroundColor = this.getRandomColor();
        }

        // Управление масштабированием
        this.updateScale();

        // Управление вращением
        this.updateRotation();
    }

    updateScale() {
        if (this.currScale >= 2) this.scaleDirection = "down";
        if (this.currScale <= 1) this.scaleDirection = "up";

        this.currScale += (this.scaleDirection === "up" ? 0.2 : -0.2);
    }

    updateRotation() {
        if (this.direction === "top") {
            this.currScr += 2;
            if (this.currScr >= 20) this.direction = "back";
        } else {
            this.currScr -= 2;
            if (this.currScr <= -20) this.direction = "top";
        }

        document.body.style.transform = `rotate(${this.currScr}deg) scale(${this.currScale})`;
    }

    resetScene() {
        clearInterval(this.intTimer);
        document.querySelectorAll('.g1, .g2').forEach(el => el.remove());
        document.body.style.transform = "none";
        document.body.style.backgroundColor = "#fff";
    }

    getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
}
