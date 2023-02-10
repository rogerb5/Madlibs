"use strict";

/*
    Title: MadLibs
    About: This program takes user input and generates
    a silly short story.

    Programmed by Roger 2/9/2023

*/

const addTextBtn = document.querySelectorAll('button.btn-add');
const generateBtn = document.querySelector('button.generate-btn');


const storyText = `
        There existed several 
        :plural-noun: in the great Cascade Mountain Range. Each one of them had 
        :adjective: hair. They always traveled to :place: once a year. 
        On they way there they always said :silly-noise: in a :adjective: voice.
        The group leader was named :persons-name:
`;

const pluralNounsArray = [];
const adjectiveArray = [];
const placeArray = [];
const noiseArray = [];
const nameArray = [];

// event listeners
addTextBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log('test123');
        event.preventDefault();
    })
})

generateBtn.addEventListener('click', (event) => {
    console.log('you have submitted your inputs');
    event.preventDefault();
})

function processInput() {

}

function randomizeStory() {

}

function outputStory() {

}

function clearInput() {

}

function restartPrompts() {

}