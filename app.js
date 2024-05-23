function stockBuyer(stockPrices) {
  if (stockPrices.length === 0) {
    console.log("there are no prices available for the stocks");
    return 0;
  }
  let maxProfit = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    for (let j = i + 1; j < stockPrices.length; j++) {
      let potentialProfit = stockPrices[j] - stockPrices[i];
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
  }

  console.log(maxProfit);
  return maxProfit;
}

let stockPrice1 = [7, 1, 5, 3, 6, 4];
let stockPrice2 = [7, 6, 4, 3, 1];
let stockPrice3 = [];

stockBuyer(stockPrice1);
stockBuyer(stockPrice2);
stockBuyer(stockPrice3);
