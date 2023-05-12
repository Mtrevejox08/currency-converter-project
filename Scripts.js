

const button = document.getElementById("Convert-button")

const select = document.getElementById("currency-select")

const dolar = 4.99
const euro = 5.43
const bitcoin = 0.0000073


const buttonClicked = () => {
 const inputReais = document.getElementById("input-real").value
 const textByReal = document.getElementById("textReal")
 const textByMoney = document.getElementById("anyText")

 textByReal.innerHTML = new Intl.NumberFormat('pt-BR',
 { style: 'currency', currency: 'BRL' }
).format(inputReais)

if (select.value === "US$ Dólar Americano" ) {
  textByMoney.innerHTML = new Intl.NumberFormat('en-US',
  { style: 'currency', currency: 'USD' }
).format(inputReais/dolar)
}

if (select.value === "€ Euro") { 
  textByMoney.innerHTML = new Intl.NumberFormat('de-DE',
  { style: 'currency', currency: 'EUR' }
).format(inputReais/euro)
}

if (select.value === "₿ BitCoin") { 
  textByMoney.innerHTML = inputReais * bitcoin
}

}


const changeCurrency = () => {

  const nameMoney = document.getElementById("name-money")
  const currencyImg = document.getElementById("currencyImg")

  if(select.value === "US$ Dólar Americano") {
    nameMoney.innerHTML = "Dólar Americano"
    currencyImg.src = "./ImgPng/EUA.png"
  }


  if(select.value === "€ Euro") {
    nameMoney.innerHTML = "Euro"
    currencyImg.src = "./ImgPng/Euro.png"
  }

  if(select.value === "₿ BitCoin") {
    nameMoney.innerHTML = "BitCoin"
    currencyImg.src = "./ImgPng/Bitc.png"
  }
  
  buttonClicked()

}


button.addEventListener("click", buttonClicked)
select.addEventListener("change", changeCurrency )

