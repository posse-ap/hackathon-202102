'use strict';
// 全記事のリンクを入れる用箱
var kijiitiran2 = [
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",
    "/Users/guestuser/workspace/hackathon/hackathon.html",  
];
// 全記事のimgを入れる用箱
var imgbox2 = [
    "./img/0.png",
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/6.png",
    "./img/7.png",
    "./img/8.png",
    "./img/9.png",
];
//hover時の見出し用箱
var kijimidasi2 =[
    "なんで私が東大に！？",
    "aaaa",
    "bbbbb",
    "ccc",
    "aaaa",
    "aaa",
    "a",
    "aaa",
    "aa",
    "aa",
];
//hover時の記事タイトル用箱
var kijititle2 =[ 
    "なんで私が東大に！？",
    "aaa",
    "aa",
    "a",
    "aaaa",
    "aa",
    "aaa",
    "a",
    "aaa",
    "aa",
];

var count2 = 10000000;
//画像切り替えのための引数を取る関数
function plus2(){
    count2++
    let countup12 = String(count2).slice(-1);
    let countup22 = String(countup12 + 1).slice(-1);
    let countup32 = String(countup22 + 2).slice(-1);
    migration2(countup12,countup22,countup32);
    // migration(countup1);
};
function minus2(){
    count2--
    let countdown12 = String(count2).slice(-1);
    let countdown22 = String(countdown12 + 1).slice(-1);
    let countdown32 = String(countdown22 + 2).slice(-1);
    migration2(countdown12,countdown22,countdown32);
    // migration(countdown1);
};

// ＞＜をクリックした時の出力処理
function migration2(num1,num2,num3){
    document.getElementById("hyouji2").innerHTML =
         '<div class="hover-img">'
        + `<a href="${kijiitiran2[num1]}"><img src="${imgbox2[num1]}" alt=""></a>`
        + '</div>'
        + '<div class="hover-text">'
        + `<p class="text1">${kijimidasi2[num1]}</p>`
        + `<p class="text2">${kijititle2[num1]}</p>`
        + '</div>'
        //  <a href="${kijiitiran[num2]}"><img src="${imgbox[num2]}" alt=""></a>
        //  `<a href="${kijiitiran[num3]}"><img src="${imgbox[num3]}" alt=""></a>`;
         console.log(num1);
        //  console.log(num2);
        //  console.log(num3);
};

// HTMLを書き出す
function createhtml3(){
    let h2 = 
        '<p class="back" onclick="minus2()">＜</p>'
        + '<section class="hover">'
        + '<div id=hyouji2>';
        // for(let k = 0; k < 3; k++){
        for(let k = 0; k < 1; k++){
            h2 = h2 
            + '<div class="hover-img">'
            + `<a href="${kijiitiran[0]}"><img src="${imgbox[0]}" alt=""></a>`;
            + '</div>'
            + '<div class="hover-text">'
            + `<p class="text1">${kijimidasi[0]}</p>`
            + `<p class="text2">${kijititle[0]}</p>`
            + '</div>'
        };
        h2 = h2 + '</div>'
        + '</section>'
        + '<p class="next" onclick="plus2()">＞</p>';
    document.write(h2);
};

window.onload = createhtml3();