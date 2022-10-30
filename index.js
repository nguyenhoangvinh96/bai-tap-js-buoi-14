// Bài 1: Xuất 3 số theo thứ tự tăng dần
document.getElementById("btn").onclick = function () {
   
    var so1 = document.getElementById("Num1").value * 1;
    var so2 = document.getElementById("Num2").value * 1;
    var so3 = document.getElementById("Num3").value * 1;
    var min = "";
    var avg = "";
    var max = "";
    var result = "";

    if (so1 > so2) {
        if (so2 > so3) {
            max = so1;
            avg = so2;
            min = so3;
        } else if (so1 > so3) {
            max = so1;
            avg = so3;
            min = so2;
        } else {
            max = so3;
            avg = so1;
            min = so2;
        }
    } else {
        if (so2 < so3) {
            max = so3;
            avg = so2;
            min = so1;
        } else if (so1 < so3) {
            max = so2;
            avg = so3;
            min = so1;

        } else {
            max = so2;
            avg = so1;
            min = so3;
        }
    }
  
    result = min + " " + avg + " " + max;
    console.log(so1, so2, so3, min, avg, max);
    document.getElementById("sapxep").innerHTML = result;
}

// Bài 2: Chương trình "Chào Hỏi"
document.getElementById("btnHello").onclick = function (){
    var user = document.getElementById("who").value * 1;
    var result = "";
    switch (user) {
        case 1:
            result = "Xin chào Bố!";
            break;
        case 2:
            result = "Xin chào Mẹ!";
            break;
        case 3:
            result = "Xin chào Anh Trai!";
            break;
        case 4:
            result = "Xin chào Em Gái!";
            break;
    }
    document.getElementById("chao").innerHTML = result;
}

// Bài 3: Đếm số chẵn lẻ
document.getElementById("btnCount").onclick = function () {
    var Count1 = document.getElementById("Count1").value * 1;
    var Count2 = document.getElementById("Count2").value * 1;
    var Count3 = document.getElementById("Count3").value * 1;
    var sochan = 0;
    var sole = 0;
    var Count = "";
    Count1 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
    Count2 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;
    Count3 % 2 == 0 ? sochan = sochan + 1 : sole = sole + 1;

    Count = "có " + sochan + " số chẳn và " + sole + " số lẻ";
    document.getElementById("Count").innerHTML = Count;
}

// Bài 4: Đoán hình tam giác
document.getElementById("btnEdge").onclick = function () {
    var ss1 = document.getElementById("Edge1").value * 1;
    var ss2 = document.getElementById("Edge2").value * 1;
    var ss3 = document.getElementById("Edge3").value * 1;
    var tamgiac = "";
    if ((ss1 + ss2 > ss3) && (ss1 + ss3 > ss2) && (ss3 + ss2 > ss1)) {
        if ((ss1 == ss2) && (ss1 == ss3) && (ss2 == ss3)) {
            tamgiac = "tam giác đều";
        }
        else if (ss1 == ss2 || ss1 == ss3 || ss2 == ss3) {
            tamgiac = "tam giác cân";

        }
        else if ((ss1 * ss1 + ss2 * ss2 == ss3 * ss3) || (ss1 * ss1 + ss3 * ss3 == ss2 * ss2) || (ss2 * ss2 + ss3 * ss3 == ss1 * ss1)) {
            tamgiac = "tam giác vuông";

        }
        else {
            tamgiac = "tam giác thường";
        }
    }
    else {
        tamgiac = "nhập sai"
    }

    document.getElementById("deterMined").innerHTML = tamgiac;
}