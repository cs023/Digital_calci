function display(val){
  console.log(val)
  document.getElementById('result').value+=val
}

function solve(){
  let x=document.getElementById('result').value
  // let res = x.match(/[\d\+\-\*\^\!]/g);
//  alert(x)
  let res = x.match(/\D/g)
  //alert(res)
  let val = x.split(res)
  // document.getElementById('result').innerHTML=res;
  var a;
  if(res=="^") {
    a = Math.pow(Number(val[0]), Number(val[1]))
//alert(Number(res[0])+Number(res[2]))
// alert(Math.pow(Number(res[0]), Number(res[2])))
} else if(res=="!"){
    a = fact(Number(val[0]))
  }
  else if(res=="√"){

    a= sqrt(Number(val[1]))
  }
  else if (res=="∛") {
    a= cuberoot(Number(val[1]))
  }


  else {
    a = eval(x)
  }


 document.getElementById('result').value=a

}
function clr(){
  document.getElementById('result').value=""
}
function back() {
let value = document.getElementById('result').value;
document.getElementById('result').value = value.substr(0, value.length - 1);
}

// document.getElementById("result").addEventListener("input", function(){
//   alert("ooihoi")
//   document.getElementById("result").value = document.getElementById("result").value.replace(/[0-9+-*/^!]/,"")
// })
