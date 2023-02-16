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
const divTag = document.querySelectorAll('section div');

const storyText = `
        There existed several 
        :plural-noun: in the great Cascade Mountain Range. They always traveled to :place: once a year. 
        On the way there they always said :silly-noise: in a :adjective: voice.
        The group leader was named :persons-name:.
`;

// arrays the will be populated with user input
const pluralNounsArray = [];

const nounArray = [];
const adjectiveArray = [];
const placeArray = [];
const noiseArray = [];
const nameArray = [];

function clearInput() {
    clearBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            console.log('clear')
            event.preventDefault();
        })
    })
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
    Takes html input data-filter value, and attribute 
    string as parameters. Returns a boolean
    value comparing if they are equal.
*/
function doesFilterEqualString(input, attributeString) {
    let filterType = 'data-filter';
    return input.getAttribute(filterType) === attributeString;
}

/*
    Takes an attribute array, and user input string text values
    as parameters and evaluates if both conditions equal eachother
    if so push the user input into the respective array
*/
function equalsArray(attributeArray, input) {
    for (let i = 0; i < attributeArray.length; i++) {
        if (attributeArray[i] === 'pnoun' && doesFilterEqualString(input, 'pnoun')) {
            pluralNounsArray.push(input.value);
            pluralNounsArray.length = 1;
        } else if (attributeArray[i] === 'noun' && doesFilterEqualString(input, 'noun')) {
            nounArray.push(input.value);
            nounArray.length = 1;
        } else if (attributeArray[i] === 'adjective' && doesFilterEqualString(input, 'adjective')) {
            adjectiveArray.push(input.value);
            adjectiveArray.length = 1;
        } else if (attributeArray[i] === 'place' && doesFilterEqualString(input, 'place')) {
            placeArray.push(input.value);
            placeArray.length = 1;
        } else if (attributeArray[i] === 'snoise' && doesFilterEqualString(input, 'snoise')) {
            noiseArray.push(input.value);
            noiseArray.length = 1;
        } else if (attributeArray[i] === 'name' && doesFilterEqualString(input, 'name')) {
            nameArray.push(input.value);
            nameArray.length = 1;
        }
    }
    console.log('plural nouns array: ', pluralNounsArray);
    console.log('noun array: ', nounArray);
    console.log('adjective array: ', adjectiveArray);
    console.log('place array: ', placeArray);
    console.log('silly noise array: ', noiseArray);
    console.log('name array', nameArray);
}

function processInput() {
    let newStory = storyText;
    newStory = newStory.replaceAll(':plural-noun:', pluralNounsArray);
    newStory = newStory.replaceAll(':noun:', nounArray);
    newStory = newStory.replaceAll(':adjective:', adjectiveArray);
    newStory = newStory.replaceAll(':place:', placeArray);
    newStory = newStory.replaceAll(':silly-noise:', noiseArray);
    newStory = newStory.replaceAll(':persons-name:', nameArray);
    console.log('Here is your generated mad lib!');
    console.log(newStory);
}

// event listener on click generate button process input
generateBtn.addEventListener('click', (event) => {
    console.log('you have submitted your inputs');
    processInput();
    event.preventDefault();
})

function verifyValidInput(input) {
    if (input.value === '') {
        alert('please enter a word');
    }
    return;
}

// function deleteDiv(element) {
//     element.classList.add('remove');
// }

/*
    This function loops through all add buttons
    and parses the respective input text value. 
*/
function addBtnsLoopParseInput(div) {
    const addButton = document.querySelectorAll('button.btn-add');
    const attArr = generateAttributeArray(inputTag);

    addButton.forEach((btn, idx) => {
        btn.addEventListener('click', (event) => {
            const input = document.querySelectorAll('[type="text"]')[idx];
            equalsArray(attArr, input);
            console.log("User Input: ", input.value);
            console.log('-------------------------------------------')
            // deleteDiv(div);
            event.preventDefault();
        })
    })
}


addBtnsLoopParseInput(divTag);
clearInput();