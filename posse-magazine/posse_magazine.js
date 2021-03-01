// メニューバーの処理
// const open = document.getElementById('open');
// const overlay = document.querySelector('.overlay')
// const close = document.getElementById('close');


// open.addEventListener('click', () =>{
//     overlay.classList.add('show')
// });

// close.addEventListener('click', () =>{
//     overlay.classList.remove('show')
// });



// タイトルの格納
let interview_title=new Array();
interview_title.push(["エンジニアユーザー急増中！「HarborS」が考える現代に求められるエンジニアコミュニティや空間のあり方について"]);
interview_title.push(["アンチパターンだからこそ叶うキャリア。エンジニアとして圧倒的なスピードで市場価値を高める。[社員インタビュー#1]" ]);
interview_title.push(["エンジニアを憧れの職業へするために活動するアンチパターンの６つの事業を一挙ご紹介！"]);

let interview_datetime=new Array();
interview_datetime.push(["2021-2-27"]);
interview_datetime.push(["2021-2-10"]);
interview_datetime.push(["2021-2-3"]);

let interview_time=new Array();
interview_time.push("2021年2月27日");
interview_time.push("2021年2月10日");
interview_time.push("2021年2月3日");



//インタビュー部分の表示
for (let i=0;i<=2;i++){
    var contents= '<a href="interview-'+(i+1)+'.html" class="link-box-'+(i+1)+'">'+
    '<div class="interview-box" id="interview-box">'+
    '<div class="interview-inner">'+
    '<div class="img-display">'+
        '<img src="./interview-'+(i+1)+'.jpg" alt="インタビュー画像">'+
        '</div>'+
        '<div class="interview-index">'+
            '<div class="interview-min-title">'+
                '<h2>'+interview_title[i]+
                '</h2>'+
            '</div>'+
            '<time datetime="'+interview_datetime[i]+ '" class="time">'+
                interview_time[i]+
            '</time>'+
        '</div>'+
    '</div>'+
'</div>'+
'</a>';

document.getElementById('interview-box').insertAdjacentHTML('beforeend', contents);
};



for (let i=0;i<=2;i++){
    var contents= '<a href="report-'+(i+1)+'.html" class="link-box-'+(i+1)+'">'+
    '<div class="report-box" id="report-box">'+
    '<div class="report-inner">'+
    '<div class="img-display">'+
        '<img src="./interview-'+(i+1)+'.jpg" alt="レポート画像">'+
        '</div>'+
        '<div>'+
        '<div class="report-min-title">'+
            '<h2>'+interview_title[i]+
            '</h2>'+
        '</div>'+
        '<time datetime="'+interview_datetime[i]+ '"class="time">'+
                interview_time[i]+
            '</time>'+
        '</div>'+
    '</div>'+
'</div>'+
'</a>';

document.getElementById('report-box').insertAdjacentHTML('beforeend', contents);
};

