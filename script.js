let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

// Function to handle input and calculation
function handleInput(value) {
    if (value === '=') {
        try {
            // Use eval cautiously; ideally, use a safe expression evaluator
            string = eval(string);
            input.value = string;
        } 
        catch {
            input.value = "Error";
        }
    } 
    else if (value === 'AC') {
        string = "";
        input.value = string;
    } 
    else if (value === 'DEL') {
        string = string.slice(0, -1);
        input.value = string;
    } 
    else {
        string += value;
        input.value = string;
    }

    input.focus(); // Ensure the input field remains focused
}

// Add click event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Add keyboard event listener for calculations and input
document.addEventListener('keydown', (e) => {
    e.preventDefault(); // Prevent default action for all key events
    const key = e.key;

    if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key === 'Escape') {
        handleInput('AC');
    } else if (/[\d+\-*/.]/.test(key)) {
        handleInput(key);
    }
});

// Focus on the input field when the page loads
window.onload = function() {
    input.focus();
};


////////////////////////////////////////////////////////////////////////////////

// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let string = "";

// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string)
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string="";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.slice(0, -1);
//             input.value = string;
//         }
        
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }

//     })
// })



///////////////////////////////////////////////////////////////////////////////////





// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let string = "";

// // Automatically focus the input box so it can capture keyboard input
// input.focus();

// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         handleButtonClick(e.target.innerHTML);
//     });
// });

// // Handle keyboard inputs
// document.addEventListener('keydown', (e) => {
//     let key = e.key;

//     if (key === 'Enter') {
//         calculate();
//     } else if (key === 'Backspace') {
//         string = string.slice(0, -1);
//         input.value = string;
//     } else if (key.match(/[0-9+\-*/.]/)) {
//         string += key;
//         input.value = string;
//     } else if (key === 'Escape') {
//         clearInput();
//     }
// });

// function handleButtonClick(value) {
//     if (value === '=') {
//         calculate();
//     } else if (value === 'AC') {
//         clearInput();
//     } else if (value === 'DEL') {
//         string = string.slice(0, -1);
//         input.value = string;
//     } else {
//         string += value;
//         input.value = string;
//     }
// }

// function calculate() {
//     try {
//         string = eval(string);
//         input.value = string;
//     } catch (error) {
//         input.value = "Error";
//     }
// }

// function clearInput() {
//     string = "";
//     input.value = string;
// }

////////////////////////////////////////////////////////////////////////