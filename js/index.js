const output = document.getElementById('result');
const buttons = document.querySelectorAll('.sign');
let opVal = '';


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 1) {
            opVal += buttonText;
            output.innerText = opVal;
        }
        else if (buttonText == 'AC') {
            opVal = '';
            output.innerText = opVal
        }
        else if (buttonText == '=') {
            try {
                output.innerText = eval(opVal)
            }
            catch (e) {
                // alert('Syntax error');
                opVal  = 'Syntax Error';
                output.innerText = opVal;
            }
        }
        else {
            opVal += buttonText;
            output.innerText = opVal;
        }
    })
}

