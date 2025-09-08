function doimau(){
    document.bgColor=ee.mau.value;
}
function kiemtra(){
    if(ee.noidung.value.length>20){
        alert("bạn đã gõ quá ký tự cho phép");
        ee.sokytu.value=ee.noidung.value.length;
    }else{
        ee.sokytu.value=ee.noidung.value.length;
    }
}