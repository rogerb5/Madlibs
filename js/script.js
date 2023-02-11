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

const placeholderArray = ['pnoun', 'noun', 'adjective', 'place', 'snoise', 'adjective', 'name'];

const pluralNounsArray = [];
const nounArray = [];
const adjectiveArray = [];
const placeArray = [];
const noiseArray = [];
const nameArray = [];

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
    Takes an input array as a parameter
    and returns a new array of data-filter 
    attributes using the helper method getAttribute()
*/
function generateAttributeArray(inputArr) {
    const attributeArray = [];
    for (let index = 0; index <= inputArr.length - 1; index++) {
        attributeArray.push(inputArr[index].getAttribute('data-filter'));
    }
    return attributeArray;
}

/*
    this is a test
*/
function equalsArray(arrayOne, arrayTwo, inputs) {
    for (let index = 0; index <= arrayOne.length - 1; index++) {
        if (arrayOne[0] === arrayTwo[index]) {
            pluralNounsArray.push(inputs);
        }

        if (arrayOne[1] === arrayTwo[index]) {
            nounArray.push(inputs);
        }

    }
    console.log("1st array index 0: ", arrayOne[0]);
    console.log("2nd array index 0: ", arrayTwo[0]);
    console.log('plural nouns array: ', pluralNounsArray);
    console.log('noun array: ', nounArray);

}

// testing functions
let attArr = generateAttributeArray(inputTag);

/*
    This function loops through all add buttons
    and parses the respective input text value. 
*/
function addBtnsLoopParseInput() {
    const addButton = document.querySelectorAll('button.btn-add');
    addButton.forEach((btn, idx) => {
        btn.addEventListener('click', (event) => {
            const inputs = document.querySelectorAll('[type="text"]')[idx].value;
            equalsArray(attArr, placeholderArray, inputs);
            console.log("User Input: ", inputs);
            event.preventDefault();
        })
    })
}

addBtnsLoopParseInput();