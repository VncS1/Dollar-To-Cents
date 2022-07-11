const confirmButton = document.querySelector('.confirm-button')
const formDollar = document.querySelector('.dollar-form')

//Função para converter de dollar para cents sem dar o erro do: Ex: 57.999999999999999999999999999999
const convertToCents = (dollarValue) => {
    var dollar = dollarValue.value

    dollar = (dollar + '').replace(/[^\d.-]/g, '');

    if (dollar && dollar.includes('.')) {
        dollar = dollar.substring(0, dollar.indexOf('.') + 3);
    }
  
    return dollar ? Math.round(parseFloat(dollar) * 100) : 0;
}

    




//convertToCents.bind(formDollar)

//Penny 1 cent
//Nickel 5 cents
//Dimes 10 cents
//Quarters 25 cents

const totalCents = document.querySelector('.total-cents');

let coinTypes = [0, 0, 0, 0]

//Contando quantas moedas tem de cada tipo
const coinsTypeQt = () => {
    let totalCents = convertToCents(formDollar);
    let contType = 0;
    let contCents = 0;

    let canSum = true;
    while (canSum) {
        contCents += 25
        if (contCents > totalCents) {
            contCents -= 25
            canSum = false
            break
        }
        contType++
    }

    coinTypes[0] = contType;
    contType = 0;
    canSum = true;

    if (contCents == totalCents) {
        return coinTypes;
    }

    while (canSum) {
        contCents += 10
        if (contCents > totalCents) {
            contCents -= 10
            canSum = false
            break
        }
        contType++
    }

    coinTypes[1] = contType;
    contType = 0;
    canSum = true;

    if (contCents == totalCents) {
        return coinTypes
    }

    while (canSum) {
        contCents += 5
        if (contCents > totalCents) {
            contCents -= 5
            canSum = false
            break
        }
        contType++
    }

    coinTypes[2] = contType;
    contType = 0;
    canSum = true;

    if (contCents == totalCents) {
        return coinTypes
    }

    while (canSum) {
        contCents += 1
        if (contCents > totalCents) {
            contCents -= 1
            canSum = false
            break
        }
        contType++
    }

    coinTypes[3] = contType;

    if (contCents == totalCents) {
        return coinTypes
    }

    console.log(contCents);

    return coinTypes;
}

const quarters = document.querySelector('.quarter');
const dimes = document.querySelector('.dime');
const nickels = document.querySelector('.nickel');
const pennies = document.querySelector('.penny');

//Pegando os valores do formulario
confirmButton.addEventListener("click", (e) => {
    e.preventDefault()

    const coinsAmount = coinsTypeQt();

    console.log(coinsAmount[0]);

    const cents = convertToCents(formDollar);

    totalCents.innerHTML = `You have ${cents} cents`;

    pennies.innerHTML = `${coinsAmount[3]} penny(ies)`
    nickels.innerHTML = `${coinsAmount[2]} nickel(s)`
    dimes.innerHTML = `${coinsAmount[1]} dime(s)`
    quarters.innerHTML = `${coinsAmount[0]} quarter(s)`
});


