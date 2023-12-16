function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  


  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }



    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    const resultEl = document.getElementById('password')
    const lengthEl = document.getElementById('length')
    const uppercaseEl = document.getElementById('uppercase')
    const lowercaseEl = document.getElementById('lowercase')
    const numbersEl = document.getElementById('numbers')

    const symbolsEl = document.getElementById('symbol')
    const generateEl = document.getElementById('generate')

    // const clipboard = document.getElementById('clipboard')
    const randomFunc = {
        lower: getRandomLower,
        upper: getRandomUpper,
        num: getRandomNumber,
        symbol: getRandomSymbol
    }

    generateEl.addEventListener('click', () => {
        const length = +lengthEl.value
        const hasLower = lowercaseEl.checked
        const hasUpper = uppercaseEl.checked
        const hasNumber = numbersEl.checked
        const hasSymbol = symbolsEl.checked

        const val = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
        console.log(val)
        resultEl.innerText = val
    })

    function generatePassword(lower, upper, num, symbol, length) {
        let generatedPassword = ''
        const typesCount = lower + upper + num + symbol
        const typesArr = [{ lower }, { upper }, { num }, { symbol }].filter(item => Object.values(item)[0])

        if(typesCount === 0) {
            return ''
        }

        for(let i=0; i<length; i+=typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0]
                generatedPassword += randomFunc[funcName]()
            })
        }

        const finalPassword = generatedPassword.slice(0, length)
        console.log(finalPassword)

        return finalPassword
    }

    // clipboard.addEventListener('click', () => {
    //     const textarea = document.createElement('textarea')
    //     const password = resultEl.innerText

    //     if(!password) {
    //         return
    //     }

    //     textarea.value = password
    //     document.body.appendChild(textarea)
    //     textarea.select()
    //     document.execCommand('copy')
    //     textarea.remove()
    //     alert('Password copied to clipboard')
    // })
     

