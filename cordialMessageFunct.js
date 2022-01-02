
function cordialMessage () {
    let hoy = new Date();
    let time = hoy.getHours();
if (time >= 6 && time <= 11) {
    console.log("Good Morning");
} else if (time >= 12 && time <= 18) {
    console.log("Good Afternoon");
} else if (time >= 19 && time <= 24) {
    console.log("Good Night");
} else if (time >= 0 && time <= 06) {
    console.log("I am Sleeping");
} else {
    console.log("I'm sorry, i'm in the limbo")
}
}
cordialMessage();

