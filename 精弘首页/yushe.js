function showPic1(n){
    let temp=document.getElementById('img1');
    if (!temp) return false;
    //if there is not,not to continueif (HuanDengPian.nodeName != "IMG") return false;    //if there is not,not to continue
    if (n > 4) n = 1;
    temp.setAttribute("src", "hdp/"+n+".jpeg");
    n++;
    setTimeout("showPic1("+n+")",4000);
}

window.onload = function(){
    setTimeout("showPic1(1)", 4000);
}