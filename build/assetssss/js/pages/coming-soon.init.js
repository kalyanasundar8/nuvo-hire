document.addEventListener("DOMContentLoaded",function(){var e=new Date("dec 1, 2023").getTime(),d=setInterval(function(){var t=(new Date).getTime(),t=e-t,n='<div class="countdownlist-item"><div class="count-title">Days</div><div class="count-num">'+Math.floor(t/864e5)+'</div></div><div class="countdownlist-item"><div class="count-title">Hours</div><div class="count-num">'+Math.floor(t%864e5/36e5)+'</div></div><div class="countdownlist-item"><div class="count-title">Minutes</div><div class="count-num">'+Math.floor(t%36e5/6e4)+'</div></div><div class="countdownlist-item"><div class="count-title">Seconds</div><div class="count-num">'+Math.floor(t%6e4/1e3)+"</div></div>";document.getElementById("countdown").innerHTML=n,t<0&&(clearInterval(d),document.getElementById("countdown").innerHTML='<div class="countdown-endtxt">The countdown has ended!</div>')},1e3)});