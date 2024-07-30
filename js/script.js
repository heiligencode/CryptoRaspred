let sumInFiat = 0;
let exchange = 1;

let coinName1 = '';
let coinName2 = '';
let coinName3 = '';
let coinName4 = '';
let coinName5 = '';


let percent1 = 0;
let percent2 = 0;
let percent3 = 0;
let percent4 = 0;
let percent5 = 0;


document.addEventListener('DOMContentLoaded', function(){
    let sumInFiatInput = document.getElementById('sumInFiat');
    let exchangeInput = document.getElementById('dollarExchangeRate');

    let coinNameInput1 = document.getElementById('coinName1');
    let coinNameInput2 = document.getElementById('coinName2');
    let coinNameInput3 = document.getElementById('coinName3');
    let coinNameInput4 = document.getElementById('coinName4');
    let coinNameInput5 = document.getElementById('coinName5');

    let percentInput1 = document.getElementById('percent1');
    let percentInput2 = document.getElementById('percent2');
    let percentInput3 = document.getElementById('percent3');
    let percentInput4 = document.getElementById('percent4');
    let percentInput5 = document.getElementById('percent5');

    let resultDiv = document.getElementById('output');


    const updateValue = () => {
        let sumInUSD = sumInFiat / exchange;

        let amount1 = (sumInUSD / 100) * percent1;
        let amount2 = (sumInUSD / 100) * percent2;
        let amount3 = (sumInUSD / 100) * percent3;
        let amount4 = (sumInUSD / 100) * percent4;
        let amount5 = (sumInUSD / 100) * percent5;

        let resultHTML = '';

        if (coinName1) {
            resultHTML += `<p>Вы приобретаете ${coinName1} на ${amount1.toFixed(3)} USD</p>`
        }

        if (coinName2) {
            resultHTML += `<p>Вы приобретаете ${coinName2} на ${amount2.toFixed(3)} USD</p>`
        }

        if (coinName3) {
            resultHTML += `<p>Вы приобретаете ${coinName3} на ${amount3.toFixed(3)} USD</p>`
        }

        if (coinName4) {
            resultHTML += `<p>Вы приобретаете ${coinName4} на ${amount4.toFixed(3)} USD</p>`
        }

        if (coinName5) {
            resultHTML += `<p>Вы приобретаете ${coinName5} на ${amount5.toFixed(3)} USD</p>`
        }

        resultDiv.innerHTML = resultHTML;

        // resultDiv.innerHTML = `
        //     <p>Вы приобретаете ${coinName1} на ${amount1.toFixed(3)} USD</p>
        //     <p>Вы приобретаете ${coinName2} на ${amount2.toFixed(3)} USD</p>
        //     <p>Вы приобретаете ${coinName3} на ${amount3.toFixed(3)} USD</p>
        //     <p>Вы приобретаете ${coinName4} на ${amount4.toFixed(3)} USD</p>
        //     <p>Вы приобретаете ${coinName5} на ${amount5.toFixed(3)} USD</p>
        //     `;
    };

    sumInFiatInput.addEventListener('input', function(){
        sumInFiat = parseFloat(this.value) || 0;
        updateValue();
    });

    exchangeInput.addEventListener('input', function(){
        exchange = parseFloat(this.value) || 1;
        updateValue();
    });

    coinNameInput1.addEventListener('input', function(){
        coinName1 = this.value;
        updateValue();
    });

    coinNameInput2.addEventListener('input', function(){
        coinName2 = this.value;
        updateValue();
    });

    coinNameInput3.addEventListener('input', function(){
        coinName3 = this.value;
        updateValue();
    });

    coinNameInput4.addEventListener('input', function(){
        coinName4 = this.value;
        updateValue();
    });

    coinNameInput5.addEventListener('input', function(){
        coinName5 = this.value;
        updateValue();
    });


    percentInput1.addEventListener('input', function(){
        percent1 = parseFloat(this.value) || 0;
        updateValue();
    });

    percentInput2.addEventListener('input', function(){
        percent2 = parseFloat(this.value) || 0;
        updateValue();
    });

    percentInput3.addEventListener('input', function(){
        percent3 = parseFloat(this.value) || 0;
        updateValue();
    });

    percentInput4.addEventListener('input', function(){
        percent4 = parseFloat(this.value) || 0;
        updateValue();
    });

    percentInput5.addEventListener('input', function(){
        percent5 = parseFloat(this.value) || 0;
        updateValue();
    });

    let menuBtn = document.querySelector('.menu-btn');
    let cancelBtn = document.querySelector('.cancel-btn');
    let menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', function(){
        menu.classList.toggle('hidden');
    })
    cancelBtn.addEventListener('click', function(){
        menu.classList.add('hidden');
    })
});