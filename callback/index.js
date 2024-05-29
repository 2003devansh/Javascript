function abcd(a){
    // console.log("heyy");
    a() ;
}
abcd(function(){
    console.log("example of callback function ")
}) ; 

// callback function aisa function  hota hai jo async code ke completion hone pe chalta hai 