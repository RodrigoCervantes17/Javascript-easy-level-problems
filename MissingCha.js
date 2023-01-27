
function MissingCha(a) {
    let N = a.length;
    let expsum = ((N+1)*(N+2)/2);
    let sum = 0;
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        sum = element + sum; 
    }
    return (expsum-sum)
}
console.log(MissingCha([5,3,2,1]));