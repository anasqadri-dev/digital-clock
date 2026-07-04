let hours = document.getElementById("hrs");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let ampm = document.getElementById("ampm");

setInterval(() => {
    let currentTime = new Date();
    
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    
    // Convert to 12-hour format
    let ampmValue = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12; // 12 instead of 0
    
    // Add leading zeros
    hours.innerHTML = (h < 10 ? "0" : "") + h;
    minutes.innerHTML = (m < 10 ? "0" : "") + m;
    seconds.innerHTML = (s < 10 ? "0" : "") + s;
    ampm.innerHTML = ampmValue;
    
}, 1000);