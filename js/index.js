window.onload=function(){
    let main=document.querySelector(".main")
    console.log(main)
    let mi=main.querySelectorAll(".con")[1]
    let bgmi=mi.querySelector("img")
    console.log(bgmi)
    let suning=main.querySelectorAll(".con")[4]
    let bgsn=suning.querySelector("img")
    let tecent=main.querySelectorAll(".con")[3]
    let bgte=tecent.querySelector("img")
    console.log(mi,suning,tecent)
    mi.onmouseenter=function(){
        bgmi.src="img/mi2.jpg"
    }
    mi.onmouseleave=function(){
        bgmi.src="img/mi1.jpg"
    }
    suning.onmouseenter=function(){
        bgsn.src="img/bg5.jpg"
    }
    suning.onmouseleave=function(){
        bgsn.src="img/bg1.jpg"
    }
    tecent.onmouseenter=function(){
        bgte.src="img/bg2.jpg"
    }
    tecent.onmouseleave=function(){
        bgte.src="img/google.jpg"
    }



}