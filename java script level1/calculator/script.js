var plusbtn=document.getElementById('plus');
plusbtn.onclick=function(){
    var firstNumber=Number(document.getElementById('fn').value);
    var secondNumber=Number(document.getElementById('sn').value);

    var result=firstNumber+secondNumber;

    document.getElementById('res').value=result;
}



function demo() {
    var a = document.getElementById('time');

    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();

    var watch = hours + ":" + minutes + ":" + seconds;
    a.innerHTML = watch;
  }
  setInterval(demo, 1000);
