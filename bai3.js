

// bai 3 
// input 
var aInput = document.getElementById("soThuNhat")
var bInput = document.getElementById("soThuHai")
var cInput = document.getElementById("soThuBa")

///cac buoc xu li 
function demChanle(){
    var a = aInput.value*1
    var b = bInput.value*1
    var c = cInput.value*1
    console.log(a);
    if(a%2==0 && b%2==0 && c%2==0){
        alert("co 3 so chan va 0 so le");
    }
    else if((a%2==0 && b%2==0 && c%2!=0) ||(a%2==0 && b%2!=0 && c%2==0) || a%2!=0 && b%2==0 && c%2==0){
        alert("co 2 so chan va 1 so le");
        
    }
    else if ((a%2==0 && b%2!=0 && c%2!=0) || (a%2!=0 && b%2==0 && c%2!=0) || (a%2!=0 && b%2!=0 && c%2==0)){
        alert("co 1 so chan va 2 so le");
    }
    else if(a%2>0 && b%2>0 && c%2>0){
        alert("co 0 so chan va 3 so le");
    }
    
}









