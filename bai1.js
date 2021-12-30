//bai1
// input 
var a1 =document.getElementById("a")
var b1 =document.getElementById("b")
var c1 =document.getElementById("c")
var bai1 = document.getElementById("bai1")
var btnb1 = document.getElementById("btnb1")
///cac buoc xu li
function sapXep(){
    var a = a1.value*1
    var b = b1.value*1
    var c = c1.value*1
    if(a<b && a<c && b<c){
        alert("thứ tự sắp xếp la:"+ " " +a  +" " + b +" "+c);
    }
    else if(a<b && a<c && c<b){
        alert("thứ tự sắp xếp la:"+ " " +a +" "+c+" "+b);
    }
    else if(b<a && b<c && a<c){
        alert("thứ tự sắp xếp la:"+ " " +b +" "+a+" "+c)
    }
    else if(b<a && b<c && c<a){
        alert("thứ tự sắp xếp la:"+ " " +b +" "+c+" "+a)
    }
    else if(c<a && c<b && b<a){
        alert("thứ tự sắp xếp la:"+ " " +c +" "+b+" "+a);
    }
    else if(c<a && c<b && a<b){
        alert("thứ tự sắp xếp la:"+ " " +c+" "+a+" "+b);
    }
    ///
    else if(a==b && c>a){
        alert("thứ tự sắp xếp la:"+ " " +a+" "+b+" "+c);
    }
    else if (a==c, b>a ){
        alert("thứ tự sắp xếp la:"+ " " +a+" "+c+" "+b);
    }
    else if(b==c && a>b){
        alert("thứ tự sắp xếp la:"+ " " +b+" "+c+" "+a);
    }
   ///
    else if(a==b && c<a){
        alert("thứ tự sắp xếp la:"+ " " +c+" "+a+" "+b);
    }
    else if (a==c, b<a ){
        alert("thứ tự sắp xếp la:"+ " " +b+" "+a+" "+c);
    }
    else if(b==c && a<b){
        alert("thứ tự sắp xếp la:"+ " " +a+" "+b+" "+c);
    }
    else if(a==b&&b==c){
        alert("thứ tự sắp xếp la:"+ " " +a+" "+b+" "+c);
    }

}


