let supremeffCounter = 0;
let gucciJacetCounter = 0;
let nikeHoodieCounter = 0;

let nikeSocksCounter = 0;
let nikeShirtCounter = 0;
let philipplaneShoesCounter = 0;

let nikeSweaterCounter = 0;
let ckBoxersCounter = 0;
let gucciShirtCounter = 0;

let total = 0;

let supremePrice = 100;
let gucciJacketPrice = 600;
let nikeHoodiePrice = 50;

let nikeSocksPrice = 30;
let nikeShirtPrice = 60;
let philipplaneShoesPrice = 300;

let nikeSweaterPrice = 100;
let ckBoxersPrice = 50;
let gucciShirtPrice = 120;
let text;

var textFF;
var textJacket;
var textHoodie;

var textSocks;
var textNikeShirt;
var textPhilip;

var textNikeSweater;
var textckBoxers;
var textGucciShirt;

var tag;
var element;

let final;
let countFinal = 0;

let wrapGidtCount = 1;
let deliveryCount = 1;

let textforthakyou;

function wrapGift() {
  if (wrapGidtCount == 1) {
    total =
      supremeffCounter * supremePrice +
      gucciJacketPrice * gucciJacetCounter +
      nikeHoodiePrice * nikeHoodieCounter +
      nikeSocksPrice * nikeSocksCounter +
      nikeShirtPrice * nikeShirtCounter +
      philipplaneShoesPrice * philipplaneShoesCounter +
      nikeShirtCounter * nikeSweaterPrice +
      ckBoxersCounter * ckBoxersPrice +
      gucciShirtPrice * gucciShirtCounter +
      10;
    final.textContent = `${total}$ - The products will be wraped as a gift!`;
  }
  wrapGidtCount++;
  deliveryAndDisc();
}
function deliveryToAddress() {
  if (deliveryCount == 1) {
    total =
      supremeffCounter * supremePrice +
      gucciJacketPrice * gucciJacetCounter +
      nikeHoodiePrice * nikeHoodieCounter +
      nikeSocksPrice * nikeSocksCounter +
      nikeShirtPrice * nikeShirtCounter +
      philipplaneShoesPrice * philipplaneShoesCounter +
      nikeShirtCounter * nikeSweaterPrice +
      ckBoxersCounter * ckBoxersPrice +
      gucciShirtPrice * gucciShirtCounter +
      15;
    final.textContent = `${total}$ - The products will delivered to your addres!`;
  }
  deliveryCount++;
  deliveryAndDisc();
}
function deliveryAndDisc() {
  if (wrapGidtCount == 2 && deliveryCount == 2) {
    total =
      supremeffCounter * supremePrice +
      gucciJacketPrice * gucciJacetCounter +
      nikeHoodiePrice * nikeHoodieCounter +
      nikeSocksPrice * nikeSocksCounter +
      nikeShirtPrice * nikeShirtCounter +
      philipplaneShoesPrice * philipplaneShoesCounter +
      nikeShirtCounter * nikeSweaterPrice +
      ckBoxersCounter * ckBoxersPrice +
      gucciShirtPrice * gucciShirtCounter +
      25;
    final.textContent = `${total}$ - The products will be wraped as a gift and delivered to your addres!`;
  }
}
function supremeFF(total) {
  supremeffCounter += 1;

  if (supremeffCounter <= 1) {
    tag = document.createElement("li");
    textFF = document.createTextNode(
      `Supreme Flip Flops: ${supremeffCounter} for ${
        supremePrice * supremeffCounter
      }$`
    );
    tag.appendChild(textFF);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (supremeffCounter >= 3) {
    supremePrice = 80;
    textFF.textContent =
      textFF.textContent = `Discount: Supreme Flip Flops: ${supremeffCounter} for ${
        supremePrice * supremeffCounter
      }$`;
  } else {
    textFF.textContent = `Supreme Flip Flops: ${supremeffCounter} for ${
      supremePrice * supremeffCounter
    }$`;
  }

  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}

//100d
function gucciJacket(total) {
  gucciJacetCounter += 1;

  if (gucciJacetCounter <= 1) {
    tag = document.createElement("li");
    textJacket = document.createTextNode(
      `Gucci Jacket: ${gucciJacetCounter} for ${gucciJacketPrice}$`
    );
    tag.appendChild(textJacket);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (gucciJacetCounter >= 3) {
    gucciJacketPrice = 520;
    textJacket.textContent =
      textJacket.textContent = `Discount: Gucci Jackets: ${gucciJacetCounter} for ${
        gucciJacketPrice * gucciJacetCounter
      }$`;
  } else {
    textJacket.textContent = `Gucci Jackets: ${gucciJacetCounter} for ${
      gucciJacketPrice * gucciJacetCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//600d
function nikeHoodie(total) {
  nikeHoodieCounter += 1;

  if (nikeHoodieCounter <= 1) {
    tag = document.createElement("li");
    textHoodie = document.createTextNode(
      `Nike hoodie: ${nikeHoodieCounter} for ${nikeHoodiePrice}$`
    );
    tag.appendChild(textHoodie);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (nikeHoodieCounter >= 3) {
    nikeHoodiePrice = 40;
    textHoodie.textContent =
      textHoodie.textContent = `Discount: Nike Hoodie: ${nikeHoodieCounter} for ${
        nikeHoodiePrice * nikeHoodieCounter
      }$`;
  } else {
    textHoodie.textContent = `Nike hoodies: ${nikeHoodieCounter} for ${
      nikeHoodiePrice * nikeHoodieCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//50d

function nikeSocks(total) {
  nikeSocksCounter += 1;

  if (nikeSocksCounter <= 1) {
    tag = document.createElement("li");
    textSocks = document.createTextNode(
      `Nike Socks:${nikeSocksCounter} for ${nikeSocksPrice * nikeSocksCounter}$`
    );
    tag.appendChild(textSocks);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (nikeSocksCounter >= 3) {
    nikeSocksPrice = 25;
    textSocks.textContent =
      textSocks.textContent = `Discount: Nike Socks: ${nikeSocksCounter} for ${
        nikeSocksPrice * nikeSocksCounter
      }$`;
  } else {
    textSocks.textContent = `Nike Socks:${nikeSocksCounter} for ${
      nikeSocksPrice * nikeSocksCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//30
function nikeShirt(total) {
  nikeShirtCounter += 1;

  if (nikeShirtCounter <= 1) {
    tag = document.createElement("li");
    textNikeShirt = document.createTextNode(
      `Nike Shirt: ${nikeShirtCounter} for ${
        nikeShirtPrice * nikeShirtCounter
      }$`
    );
    tag.appendChild(textNikeShirt);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (nikeShirtCounter >= 3) {
    nikeShirtPrice = 45;
    textNikeShirt.textContent =
      textNikeShirt.textContent = `Discount: Nike Shirt: ${nikeShirtCounter} for ${
        nikeShirtPrice * nikeShirtCounter
      }$`;
  } else {
    textNikeShirt.textContent = `Nike Shirts: ${nikeShirtCounter} for ${
      nikeShirtPrice * nikeShirtCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//60
function ppShoes(total) {
  philipplaneShoesCounter += 1;
  if (philipplaneShoesCounter <= 1) {
    tag = document.createElement("li");
    textPhilip = document.createTextNode(
      `Philipp Plein Shoes: ${philipplaneShoesCounter} pair for ${
        philipplaneShoesPrice * philipplaneShoesCounter
      }$`
    );
    tag.appendChild(textPhilip);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (philipplaneShoesCounter >= 3) {
    philipplaneShoesPrice = 270;
    textPhilip.textContent =
      textPhilip.textContent = `Discount: Philipp Plein: ${philipplaneShoesCounter} pars for ${
        philipplaneShoesPrice * philipplaneShoesCounter
      }$`;
  } else {
    textPhilip.textContent = `Philipp Plein Shoes: ${philipplaneShoesCounter} pairs for ${
      philipplaneShoesPrice * philipplaneShoesCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//300

function nikeSweater(total) {
  nikeSweaterCounter += 1;
  if (nikeSweaterCounter <= 1) {
    tag = document.createElement("li");
    textNikeSweater = document.createTextNode(
      `Nike Sweater: ${nikeSweaterCounter} for ${
        nikeSweaterPrice * nikeSweaterCounter
      }$`
    );
    tag.appendChild(textNikeSweater);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (nikeSweaterCounter >= 3) {
    nikeSweaterPrice = 85;
    textNikeSweater.textContent =
      textNikeSweater.textContent = `Discount: Nike Sweater: ${nikeSweaterCounter} for ${
        nikeSweaterPrice * nikeSweaterCounter
      }$`;
  } else {
    textNikeSweater.textContent = `Nike Sweaters: ${nikeSweaterCounter} for ${
      nikeSweaterPrice * nikeSweaterCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//100
function ckBoxers(total) {
  ckBoxersCounter += 1;

  if (ckBoxersCounter <= 1) {
    tag = document.createElement("li");
    textckBoxers = document.createTextNode(
      `Calvin Klein Boxers: ${ckBoxersCounter} for ${
        ckBoxersPrice * ckBoxersCounter
      }$`
    );
    tag.appendChild(textckBoxers);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (ckBoxersCounter >= 3) {
    ckBoxersPrice = 35;

    textckBoxers.textContent = `Discount: Calvin Klein Boxers: ${ckBoxersCounter} for ${
      ckBoxersPrice * ckBoxersCounter
    }$`;
  } else {
    textckBoxers.textContent = `Calvin Klein Boxers: ${ckBoxersCounter} for ${
      ckBoxersPrice * ckBoxersCounter
    }$`;
  }
  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;

  countFinal++;
  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}
//50
function gucciShirt(total) {
  gucciShirtCounter += 1;
  //wrapGift();
  if (gucciShirtCounter <= 1) {
    tag = document.createElement("li");
    textGucciShirt = document.createTextNode(
      `Gucci Shirt: ${gucciShirtCounter} for ${
        gucciShirtPrice * gucciShirtCounter
      }$`
    );
    tag.appendChild(textGucciShirt);
    element = document.getElementById("type");
    element.appendChild(tag);
  } else if (gucciShirtCounter >= 3) {
    gucciShirtPrice = 100;

    textGucciShirt.textContent =
      textGucciShirt.textContent = `Discount: Gucci Shirts: ${gucciShirtCounter} for ${
        gucciShirtPrice * gucciShirtCounter
      }$`;
    console.log(gucciShirtCounter);
    console.log(gucciShirtPrice);
  } else {
    textGucciShirt.textContent = `Gucci Shirts: ${gucciShirtCounter} for ${
      gucciShirtPrice * gucciShirtCounter
    }$`;
  }

  total =
    supremeffCounter * supremePrice +
    gucciJacketPrice * gucciJacetCounter +
    nikeHoodiePrice * nikeHoodieCounter +
    nikeSocksPrice * nikeSocksCounter +
    nikeShirtPrice * nikeShirtCounter +
    philipplaneShoesPrice * philipplaneShoesCounter +
    nikeShirtCounter * nikeSweaterPrice +
    ckBoxersCounter * ckBoxersPrice +
    gucciShirtPrice * gucciShirtCounter;
  countFinal++;

  if (countFinal <= 1) {
    tag = document.createElement("li");
    final = document.createTextNode(`${total}$`);
    tag.appendChild(final);
    element = document.getElementById("all-cost");
    element.appendChild(tag);
  } else {
    final.textContent = `${total}$`;
  }
}

function finishOrder() {
  var deleteabove = document.getElementById("type");
  var removecost = document.getElementById("all-cost");
  deleteabove.remove();
  removecost.remove();

  tag = document.createElement("h1");
  textforthakyou = document.createTextNode(`Thank you for choosing us!`);
  tag.appendChild(textforthakyou);
  element = document.getElementById("thanks");
  element.appendChild(tag);

  tag = document.createElement("h3");
  textforthakyou = document.createTextNode(`Your purchase was succesful!`);
  tag.appendChild(textforthakyou);
  element = document.getElementById("thanks");
  element.appendChild(tag);
}
