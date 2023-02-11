"use strict";

/*
    Title: MadLibs
    About: This program takes user input and generates
    a silly short story.
    Programmed by Roger 2/9/2023
*/
const generateBtn = document.querySelector('button.generate-btn');
const clearBtn = document.querySelectorAll('button.btn2');
const inputTag = Array.from(document.querySelectorAll('[type="text"]'));

const storyText = `
        There existed several 
        :plural-noun: in the great Cascade Mountain Range. Each one of them had 
        :adjective: hair. They always traveled to :place: once a year. 
        On the way there they always said :silly-noise: in a :adjective: voice.
        The group leader was named :persons-name:
`;

const pluralNounsArray = [];
const adjectiveArray = [];
const placeArray = [];
const noiseArray = [];
const nameArray = [];

// const pnounString = 'pnoun';
// const nounString = 'noun';
// const adjString = 'adjective';
// const placeString = 'place';

/*
    This function loops through all add buttons
    and parses the respective input text value. 
*/
function addBtnsLoopParseInput() {
    const addButton = document.querySelectorAll('button.btn-add');
    addButton.forEach((btn, idx) => {
        btn.addEventListener('click', (event) => {
            const inputs = document.querySelectorAll('[type="text"]')[idx].value;
            console.log(inputs);
            event.preventDefault();
        })
    })
}

addBtnsLoopParseInput();

clearBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log('clear')
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

/*  
    Psuedocode:
    if the input data attribute equals string constant value
    push the parsed input into the respective array.

    inputAttributeArray: ['pnoun', 'noun', 'adjective', 'place', 'snoise', 'adjective', 'name'];
    inputsArray['']
    
    if(attribute[index] === 'noun') {
        nounArray.push(input.value)
    }
*/
function generateAttributeArray(inputArr) {
    const attributeArray = [];
    for (let index = 0; index <= inputArr.length - 1; index++) {
        attributeArray.push(inputArr[index].getAttribute('data-filter'));
    }
    console.log(attributeArray);
}

generateAttributeArray(inputTag)