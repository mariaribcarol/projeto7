let inter = null
let cont =0
 inter=setInterval (() => {
    cont ++;
    console.log("chamei" + cont)
    if (cont >5) {clearInterval (inter)}
}, 1000)
// setInterval (()=> {

//     console.log("oi")
//     if (cont > 5){
//         clearInterval (inter);
//     }


// },2000 )