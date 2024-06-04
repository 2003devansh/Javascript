// reverse a string : - 
// hi kaise ho : input 
// oh esiak ih : output 

// we can use .split() 
// isme hum () ke andar " " pass karenge 
// fir uske basis pe voh array bna dega

var rev_str = function(str) {
    return str.split(" ").map(function(word) {
        return word.split("").reverse().join("");
    }).join(" ");
}

console.log(rev_str("hi i am devansh"));

