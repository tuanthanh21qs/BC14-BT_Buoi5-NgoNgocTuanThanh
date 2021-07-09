// BT1
function BT1(){   
    var diemChuan = document.getElementById("diemChuan").value; 
    var diemThi = document.getElementById("diemThi").value;

    var diemKV, diemDT, tong, ketqua;

    if (document.getElementById("kvA").checked) {
        diemKV = document.getElementById("kvA").value;
    }

    if (document.getElementById("kvB").checked) {
        diemKV = document.getElementById("kvB").value;
    }

    if (document.getElementById("kvC").checked) {
        diemKV = document.getElementById("kvC").value;
    }

    if (document.getElementById("nkv").checked) {
        diemKV = document.getElementById("nkv").value;
    }

    if (document.getElementById("dt1").checked) {
        diemDT = document.getElementById("dt1").value;
    }
    
    if (document.getElementById("dt2").checked) {
        diemDT = document.getElementById("dt2").value;
    }
    
    if (document.getElementById("dt3").checked) {
        diemDT = document.getElementById("dt3").value;
    }
    
    if (document.getElementById("ndt").checked) {
        diemDT = document.getElementById("ndt").value;
    }

    tong =parseFloat(diemThi) + parseFloat(diemDT) + parseFloat(diemKV);

    if (tong >= diemChuan) {
        ketqua = "Bạn đã đậu đại học";
    }else{
        ketqua = "Chúc bạn may mắn lần sau";
    }

    return KQ1.innerHTML = ketqua;
}

// BT2
function BT2(){
    var soDien = document.getElementById('soDien').value;
    var soTien;

    if (soDien <= 50 && soDien >= 0) {
        soTien = soDien * 500;
    }

    if (soDien <= 100 && soDien > 50) {
        soTien = soDien * 650;
    }

    if (soDien <= 200 && soDien > 100) {
        soTien = soDien * 850;
    }

    if (soDien <= 350 && soDien > 200) {
        soTien = soDien * 1100;
    }

    if (soDien > 350) {
        soTien = soDien * 1300;
    }    

    return KQ2.innerHTML = "Số tiền phải đóng " + soTien + "đ";
}