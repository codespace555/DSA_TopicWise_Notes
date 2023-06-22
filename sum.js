let numbers = [-1,0]
target = -1
function sum(numbers){
for (let i = 0; i < numbers.length; i++) {
    for (let n = i+1; n < numbers.length; n++) {
        if (numbers[i] + numbers[n] == target) {
            let nums = [i+1,n+1]
            return (nums)
        }
        
    }
    
}
}

console.log(sum(numbers))