var sexy = ["som", "John" , "ron" , "jason", "sam", "bash"];


function zombi(x) {
for(var i=0;i<x.length;i++){

 if((x[i][0]) == 'J' || (x[i][0]) == 'j')
 {
  var b = "good bye " + x[i];
 }
 else {
 	var b = "hello " + x[i];
 }
 console.log(b);
document.getElementById("m").innerHTML += " " + b;
}
return b;

};
console.log(zombi(sexy));


