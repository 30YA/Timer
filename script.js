"use strict";
// filter of products project : ------------------------------------
const hour = document.querySelector(".titles .box .hour");
const minute = document.querySelector(".titles .box .minute");
const secend = document.querySelector(".titles .box .secend");

const startBtn = document.querySelector(".start");
const getnumBtn = document.querySelector(".getnum");
let setinter;
let clicker = 0;

startBtn.addEventListener('click', () => {
    let time = startinghour * 60;
    clicker++;
    if (clicker == 1) {
        setinter = setInterval(() => {
            if (time == 0) {
                clearInterval(setinter);
                clicker = 0;
            }
            let minutes = Math.floor(time / 60);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            let secends = time % 60;
            secends = secends < 10 ? "0" + secends : secends;
            time--;
            minute.innerHTML = `${minutes}`;
            secend.innerHTML = `${secends}`;
        },1000);
    }else{
        clearInterval(setinter);
        clicker = 0;
    }
})
let today = (new Date()).getTime();
console.log(today);

let startinghour = 0;
getnumBtn.addEventListener('click', () => {
    startinghour = +prompt("Enter the minute");
    minute.innerHTML = startinghour < 10 ? "0" + startinghour : startinghour;
    secend.innerHTML = "0" + 0;
})
