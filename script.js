const convertButton = document.querySelector(".button-converter")




function convertvalue() {


    const currencyValueToconvert = document.querySelector(".valor-da-moeda-a-convrter")
    const currencyValueConvert = document.querySelector(".valor-da-moeda-convertida")
    const inputCurrency = document.querySelector(".input-currency").value
    const selectConvert = document.querySelector(".select-currency-convert").value
    
    const dolarToDay = 5.2
    const euroToDay = 6.2
    const peosToDay = 0.014





    if (selectConvert=== "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"

        }).format(inputCurrency / dolarToDay)

    }

    if (selectConvert === "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(inputCurrency / euroToDay)
    }

     if (selectConvert=== "peso") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("ar-AR", {

             style: "currency",
            currency: "ARS"

        }).format(inputCurrency / peosToDay)

    }




    currencyValueToconvert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL",

    }).format(inputCurrency)
}


convertButton.addEventListener("click", convertvalue)
