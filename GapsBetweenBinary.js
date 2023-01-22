// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].
let N= 500
function solution(N) {
    let binary = N.toString(2)
    let gap = 0
    let maxGap= 0
    for (let index = 0; index < binary.length; index++) {
        let element = binary[index];
        if(element == 0){
            gap ++
        } else {
            maxGap = Math.max(gap, maxGap)
            gap = 0
        }    
    }
return max

}
solution(N)