const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('')

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        console.log(`Par = ${a},${b}`)
        if (a == 2 && b == 3) break externo
        
    }
}