otp=()=>{
    var digits = '0123456789';
    var OTP = "";
    for(var i=0;i<4;i++){
        OTP = OTP+digits[Math.floor(Math.random()*10)];
    }
    document.getElementById("showotp").innerHTML=OTP;
}