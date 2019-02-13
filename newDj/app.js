var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")
var box10 = document.getElementById("box10")
var box11 = document.getElementById("box11")
var box12 = document.getElementById("box12")

// A key
var soundD3 = new Howl({
    src: ["./sound/soundD3.mp3"],
    volume: 1
})
// S key
var soundA3 = new Howl({
    src: ["./sound/soundA3.mp3"], 
    volume: 1
})
// D key
var soundC4 = new Howl({
    src: ["./sound/soundC4.mp3"],
    volume: 1
})

// F key
var soundE4 = new Howl ({
    src: ["./sound/soundE4.mp3"],
    volume: 1
})

// V key
var soundF5 = new Howl({
    src: ["./sound/soundF5.mp3"],
    volume: 1
})

// G key
var soundB3 = new Howl({
    src: ["./sound/soundB3.mp3"],
    volume: 1
})

// H key
var soundB4 = new Howl({
    src: ["./sound/soundB4.mp3"], 
    volume: 1
})

// N key
var soundA4 = new Howl({
    src: ["./sound/soundA4.mp3"],
    volume: 1
})

// J key
var soundC5 = new Howl({
    src: ["./sound/soundC5.mp3"],
    volume: 1
})

// K key
var soundG5 = new Howl({
    src: ["./sound/soundG5.mp3"],
    volume: 1
})

// L key
var soundB5 = new Howl({
    src: ["./sound/soundB5.mp3"],
    volume: 1
})

// ; key
var soundC6 = new Howl({
    src: ["./sound/soundC6.mp3"],
    volume: 1
})






window.addEventListener("keypress", playMusic)

function playMusic(event) {
    const colorArray = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
    console.log(event)
    if (event.key.toLowerCase() === "a") {
        console.log("a music on");
        box1.style.backgroundColor = colorArray;
        soundD3.play();
        setTimeout(function () {
            box1.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "s") {
        console.log("s music on");
        soundA3.play();
        box2.style.backgroundColor = colorArray;
        setTimeout(function () {
            box2.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "d") {
        console.log("d music on");
        soundC4.play();
        box3.style.backgroundColor = colorArray;
        setTimeout(function () {
            box3.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "f") {
        console.log("f music on");
        soundE4.play();
        
        box4.style.backgroundColor = colorArray;
        setTimeout(function () {
            box4.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "v") {
        console.log("v music on");
        soundF5.play();
        box11.style.backgroundColor = colorArray
        setTimeout(function () {
            box11.style.backgroundColor = "ivory"
        }, 2000)
        
     } else if (event.key.toLowerCase() === "g") {
        console.log("g music on");
        soundB3.play();
        box5.style.backgroundColor = colorArray;
        setTimeout(function () {
            box5.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "h") {
        console.log("h music on");
        soundB4.play();
        box6.style.backgroundColor = colorArray;
        setTimeout(function () {
            box6.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "n") {
        console.log("n music on");
        soundA4.play();
        box12.style.backgroundColor = colorArray
        setTimeout(function () {
            box12.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "j") {
        console.log("j music on")
        soundC5.play();
        box7.style.backgroundColor = colorArray;
        setTimeout(function () {
            box7.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "k") {
        console.log("k music on");
        soundG5.play();
        box8.style.backgroundColor = colorArray;
        setTimeout(function () {
            box8.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === "l") {
        console.log("l music on");
        soundB5.play();
        box9.style.backgroundColor = colorArray
        setTimeout(function () {
            box9.style.backgroundColor = "ivory"
        }, 2000)

    } else if (event.key.toLowerCase() === ";") {
        console.log("; music on");
        soundC6.play();
        box10.style.backgroundColor = colorArray
        setTimeout(function () {
            box10.style.backgroundColor = "ivory"
        }, 2000)

    } else {
        return "this input is incorrect"
    };
}
//console.log(box1)