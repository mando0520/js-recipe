let myMoney = 0
let amoutMoney = 0

const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const beerButton = document.getElementById("beer-button")
let myMoneyDisplay = document.getElementById("my-money")
const amoutMoneyDisplay = document.getElementById("amount-money")
const addMoneyButton = document.getElementById("add_thousand_yen")
const putMoneyButton = document.getElementById("put_money")
const returnMoneyButton = document.getElementById("return_money")


// 所持金追加関数
addMoneyButton.onclick = function () {
  myMoney += 1000
  myMoneyDisplay.textContent = myMoney

  danger(myMoney)
}

// 自販機に所持金を投入する関数
// myMoneyが減る, amoutMaoneyが増える
// ボタンの表示非表示
// danger表示
putMoneyButton.onclick = function () {

  if (myMoney < 1) {
    myMoneyDisplay.textContent = "所持金がありません"
  }
  else {
    myMoney -= 100
    amoutMoney += 100
    myMoneyDisplay.textContent = myMoney
    amoutMoneyDisplay.textContent = amoutMoney
  }

  danger(myMoney)
  litButton(amoutMoney)
}

// 投入金額によってボタンの表示非表示を変える関数
const litButton = function (amoutMoney) {
  if (amoutMoney < 100) {
    teaButton.disabled = true
    cokeButton.disabled = true
    beerButton.disabled = true

  } else if (amoutMoney < 130) {
    teaButton.disabled = false

  } else if (amoutMoney < 200) {
    teaButton.disabled = false
    cokeButton.disabled = false

  } else {
    teaButton.disabled = false
    cokeButton.disabled = false
    beerButton.disabled = false
  }
}


// おつりボタン関数
returnMoneyButton.onclick = function () {
  myMoney += amoutMoney
  amoutMoney = 0
  myMoneyDisplay.textContent = myMoney
  amoutMoneyDisplay.textContent = amoutMoney

  litButton(amoutMoney)
}

// dangerDisplay関数
const danger = function (myMoney) {

  if (myMoney < 500) {
    myMoneyDisplay.classList.add("vending-machine__display__money--danger")
  } else {
    myMoneyDisplay.classList.remove("vending-machine__display__money--danger")
  }

}

// 飲み物をクリックしたら、飲み物の画像が追加される関数
const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    case "beer":
      drinkImgSrc =
        "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

// お茶を買う関数
teaButton.onclick = () => {
  if (amoutMoney < 100) {
    amoutMoneyDisplay.textContent = "投入金額が足りません"
  } else {
    amoutMoney -= 100
    amoutMoneyDisplay.textContent = amoutMoney
    const image = createImage("tea")
    display.append(image)
  }

  litButton(amoutMoney)
}

// コーラを買う関数
cokeButton.onclick = () => {
  if (amoutMoney < 130 ){
    amoutMoneyDisplay.textContent = "投入金額が足りません"
  } else {
    amoutMoney -= 130
    amoutMoneyDisplay.textContent = amoutMoney
    const image = createImage("coke")
    display.append(image)
  }

  litButton(amoutMoney)
}

// ビールを買う関数
beerButton.onclick = () => {
  if (amoutMoney < 200 ){
    amoutMoneyDisplay.textContent = "投入金額が足りません"
  } else {
    amoutMoney -= 200
    amoutMoneyDisplay.textContent = amoutMoney
    const image = createImage("beer")
    display.append(image)
  }

  litButton(amoutMoney)
}