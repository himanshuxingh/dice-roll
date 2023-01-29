var random_no1=Math.floor(Math.random()*6)+1;
var img_src1="images/dice"+random_no1+".png";

document.querySelectorAll("img")[0].setAttribute("src",img_src1);

var random_no2=Math.floor(Math.random()*6)+1;
var img_src2="images/dice"+random_no2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img_src2);

if(random_no1>random_no2){
    document.querySelector("h3").textContent="Player-1 won the match!"
}
else if(random_no1<random_no2){
    document.querySelector("h3").textContent="Player-2 won the match!"
}
else{
    document.querySelector("h3").textContent="Draw!"
}
