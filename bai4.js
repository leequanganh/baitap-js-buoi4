// bai 4
// input 
var canhAEl = document.getElementById("canhA")
var canhBEl = document.getElementById("canhB")
var canhCEl = document.getElementById("canhC")

function xacDinhTamGiac(){
    var a = canhAEl.value*1
    var b = canhBEl.value*1
    var c = canhCEl.value*1
    if(a == b && a == c && b == c && a>0 && b>0 && c>0){
        alert("tam giac deu ");
    }
    else if (a==b || a==c || b==c && a>0 && b>0 && c>0){
        alert("tam giac can");
    }
    else if (Math.pow(a ,2)==Math.pow(b,2)+Math.pow(c,2) || Math.pow(b ,2)==Math.pow(a,2)+Math.pow(c,2) || Math.pow(c ,2)==Math.pow(b,2)+Math.pow(a,2) && a>0 && b>0 && c>0){
        alert("tam giac vuong");
    }
    else if(a<=0 || b<=0 || c<=0){
        alert("ban da nhap sai")
    }
}





//cac buoc xu li




