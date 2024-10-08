function tinhdiemtb(){
    let ly = parseFloat(document.getElementById('ly').value);
    let hoa = parseFloat(document.getElementById('hoa').value);
    let sinh = parseFloat(document.getElementById('sinh').value);
    let diemtb = (ly+hoa+sinh)/3
    document.getElementById('result').innerText = 'Điểm trung bình cả năm của bạn là: ' + diemtb;
}
function chuyenDoi(){
    let doC = parseInt(document.getElementById('c').value);
    let doF = (9*doC/5)+32;
    document.getElementById("result").innerHTML = "Độ F " + doF;
}
function tinhs_hinhtron(){
    let ban_kinh = parseInt(document.getElementById('r').value);
    let S = ban_kinh*ban_kinh*3.14
    document.getElementById("result").innerHTML = "S= " + S;
}
function tinhc_hinhtron(){
    let ban_kinh = parseInt(document.getElementById('r').value);
    let c = ban_kinh*2*3.14
    document.getElementById("result").innerHTML = "C= " + c;
}


