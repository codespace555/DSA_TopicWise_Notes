let prices = [7,1,5,3,6,4]
let maxarr = []
const min = prices.reduce((a, b) => Math.min(a, b))
for (let i = 0; i < prices.length; i++) {
    if (min == prices[i]) {
      for (let j = i; j < prices.length; j++) {
        maxarr.push(prices[j]);  
      }  
    }
    
}
const max = maxarr.reduce((a, b) => Math.max(a, b))

console.log(max-min)