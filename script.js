"use strict";
// filter of products project : ------------------------------------
const hour = document.querySelector(".titles .box .hour");
const minute = document.querySelector(".titles .box .minute");
const secend = document.querySelector(".titles .box .secend");

const startBtn = document.querySelector(".start");
const getnumBtn = document.querySelector(".getnum");
let setinter;

const startinghour = 60;
let time = startinghour * 60;
console.log(time);

startBtn.addEventListener('click', () => {
    setinter = setInterval(() => {
        if (time == 0) {
            clearInterval(setinter);
        }
        let minutes = Math.floor(time / 60);
        let secends = time % 60;
        time--;
        minute.innerHTML = `${minutes}`;
        secend.innerHTML = `${secends}`;
    },10);
})