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

let viewer=new Array();
viewer.push([10]);
viewer.push([25]);
viewer.push([9]);




//インタビュー部分の表示
for (let i=0;i<=2;i++){
    var contents= 
    '<a href="report-'+(i+1)+'.html" class="link-box-'+(i+1)+'">'+
    '<div class="report-box" id="report-box">'+
    '<div class="report-inner">'+
    '<div class="img-display">'+
        '<img src="./interview-'+(i+1)+'.jpg" alt="インタビュー画像">'+
        '</div>'+
        '<div class="report-index">'+
            '<div class="report-min-title">'+
                '<h2>'+interview_title[i]+
                '</h2>'+
            '</div>'+
            '<div class="view-flex">'+
            '<time datetime="'+interview_datetime[i]+ '"class="time">'+
                interview_time[i]+
                '</time>'+
                '<div class="viewer">'+
                '<i class="fas fa-eye eye-icon" style="color:#C0C0C0;"></i>'+
                viewer[i]+
                '</div>'+
            '</div>'+            
        '</div>'+
    '</div>'+
'</div>'+
'</a>';

document.getElementById('report-box').insertAdjacentHTML('beforeend', contents);
};