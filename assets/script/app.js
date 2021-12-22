const app = {
    modeColor: function () {
        document.getElementById('dark').addEventListener('click', () => {
            document.documentElement.style.setProperty("--primarycolor", "")
            document.documentElement.style.setProperty("--textlight", "")
            document.documentElement.style.setProperty("--textdark", "")
            document.documentElement.style.setProperty("--graymedium", "")
            document.documentElement.style.setProperty("--graylight", "")
        })
        document.getElementById('light').addEventListener('click', () => {
            document.documentElement.style.setProperty("--primarycolor", "#FFFFFF")
            document.documentElement.style.setProperty("--textlight", "#22252d")
            document.documentElement.style.setProperty("--textdark", "#F1F1F1")
            document.documentElement.style.setProperty("--graymedium", "#F9F9F9")
            document.documentElement.style.setProperty("--graylight", "#F7F7F7")
        })
    },
    handle: function () {
        // khai bao button
        const buttons = document.getElementsByClassName('button')
        let calculationArray = [],
            resultText = [],
            calculationText = ''

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                if (resultText > 0 || resultText < 0) {
                    calculationText = ''
                    console.log(calculationText)
                    resultText = ''
                }
                if (buttons[i].innerHTML === "AC") {
                    calculationArray = []
                    calculationText = ''
                    resultText = ''
                    app.render(resultText, calculationText)
                } else if ("0123456789*+−÷,".indexOf(buttons[i].innerHTML) !== -1) {
                    calculationArray.push(buttons[i].innerHTML)
                    calculation()
                    app.render(resultText, calculationText)
                    // in ne 
                    // console.log(calculationArray)
                } else if ((buttons[i].innerHTML).length > 6) {
                    calculationArray.pop()
                    calculation()
                    app.render(resultText, calculationText)
                    // in ne 
                    // console.log(calculationArray)
                }
            })
        }
        // ham tinh phep tinh
        function calculation() {
            calculationText = ''
            for (var i = 0; i < calculationArray.length; i++) {
                if ('0123456789'.indexOf(calculationArray[i]) !== -1) {
                    calculationText += `<div class="number">${calculationArray[i]}</div>`
                } else if ('*+−÷%'.indexOf(calculationArray[i - 1]) !== -1 && '*+−÷%'.indexOf(calculationArray[i]) !== -1) {
                    calculationArray.pop()
                } else if ('*+−÷%'.indexOf(calculationArray[i]) !== -1 && i !== 0) {
                    calculationText += `<div class="number calculation red">${calculationArray[i]}</div>`
                } else if ('*+−÷%'.indexOf(calculationArray[i]) !== -1 && i === 0) {
                    calculationArray.pop()
                }
            }
            return calculationArray
        }
        //tinh toan bieu thuc 
        document.getElementById('sovle').addEventListener("click", () => {
            handleCalculation()
            // console.log(resultText)
            app.render(resultText, calculationText)
        })

        //funtion bieu thuc   
        function sum(a, b) {
            return a + b
        }
        function sub(a, b) {
            return a - b
        }
        function mul(a, b) {
            return a * b
        }
        function div(a, b) {
            return a / b
        }
        function handleCalculation() {
            let calculationNumbers = calculationArray.join(''),
                calculationNumber = '',
                calculationNumberArray = []
            for (let i = 0; i <= calculationNumbers.length; i++) {
                if ('*+−÷'.indexOf(calculationNumbers[i]) !== -1) {
                    calculationNumberArray.push(Number(calculationNumber))
                    calculationNumberArray.push(calculationNumbers[i])
                    calculationNumber = ''
                } else if ('0123456789'.indexOf(calculationNumbers[i]) !== -1) {
                    calculationNumber += calculationNumbers[i]
                } else if (i = calculationNumbers.length--) {
                    calculationNumberArray.push(Number(calculationNumber))
                    calculationNumber = ''
                }
            }
            // console.log(calculationNumberArray)
            chooseCalculation(calculationNumberArray)
        }
        function chooseCalculation(calculationNumberArray) {
            let a = calculationNumberArray[0]
            let check = calculationNumberArray[1]
            let b = calculationNumberArray[2]
            if (check == '+') {
                resultText = sum(a, b)
            } else if (check == '−') {
                resultText = sub(a, b)
            } else if (check == '*') {
                resultText = mul(a, b)
            } else if (check == '÷') {
                resultText = div(a, b)
            }
            return resultText
        }
    },
    render: function (resultText, calculationText) {
        const resultEl = document.getElementById("calculation-result"),
            calculationEl = document.getElementById("calculation-history")
        if (calculationText) {
            calculationEl.innerHTML = calculationText
        } else {
            calculationEl.innerHTML = '<div class="number">0</div>'
        }
        if (resultText > 0 || resultText < 0) {
            resultEl.innerHTML = resultText
        } else {
            resultEl.innerHTML = '0'
        }
    },
    start: function () {
        this.handle()
        this.modeColor()
        this.render()
    }
}

app.start()

