const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;


canvas.width = width;
canvas.height = height;


window.addEventListener('resize', function(event) {
    cw = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width
    canvas.height = height;
    maxColumns = width / fontSize;
    console.log(width, height)
}, true);

let charArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "А",
    "В",
    "Г",
    "Д",
    "Є",
    "Ѕ",
    "З",
    "И",
    "Ѳ",
    "І",
    "К",
    "Л",
    "М",
    "Н",
    "Ѯ",
    "Ѻ",
    "П",
    "Ч",
    "Р",
    "С",
    "Т",
    "Ѵ",
    "Ф",
    "Х",
    "Ѱ",
    "Ѿ",
    "Ц",

];

let maxCharCount = 500;
let fallingCharArr = [];
let fontSize = 10;
let maxColumns = width / fontSize;


let frames = 0;

class FallingChar {
    constructor(x, y) {
        this.var_x = x;
        this.var_y = y;
    }

    draw(ctx) {
        this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
        this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

        ctx.fillStyle = "rgba(0,999,0)";
        ctx.font = fontSize + "px sans-serif";
        ctx.fillText(this.value, this.var_x, this.var_y);
        this.var_y += this.speed;

        if (this.var_y > height) {
            this.var_y = (Math.random() * height) / 2 - 50;
            this.var_x = Math.floor(Math.random() * maxColumns) * fontSize;
            this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
        }
    }
}

let update = () => {
    if (fallingCharArr.length < maxCharCount) {
        let fallingChar = new FallingChar(
            Math.floor(Math.random() * maxColumns) * fontSize,
            (Math.random() * height) / 2 - 50
        );
        fallingCharArr.push(fallingChar);
    }
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
        fallingCharArr[i].draw(ctx);
    }

    requestAnimationFrame(update);
    frames++;
};

update();