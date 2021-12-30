function chaoHoi(){
    var thanhVinValue = document.querySelector('input[name="thanhvien"]:checked').value
    alert("hello "+ " " + thanhVinValue)
}
var bo
var me 
var anhtrai 
var emgai 
var nguoidung = document.getElementById("nguoidung")
var tileChao = document.querySelector("#chaohoi h3")

function chaoHoi2(){
    var b = "b"
    var m = "m"
    var a = "a"
    var e = "e"

    function getthanhvien(thanhvien){
        switch(thanhvien){
            case b:
                return "bo"
                break;
            case m:
                return "me"
                break;
            case a:
                return "anh trai"
                break;
            case e:
                return "em gai"
                break;
            
        }
    }
    var nguoidungValue = nguoidung.value
    var thanhvienValue = getthanhvien(nguoidungValue)
    alert("xin chao" +  " " +thanhvienValue)
    tileChao.innerHTML="hello" + " " + thanhvienValue
}