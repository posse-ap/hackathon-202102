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

var　time_sort=document.getElementById("time-sort");
const view_sort=document.getElementById("view-sort");

view_sort.onclick=function(){
    const a=interview_title[0];
    interview_title[0]=interview_title[1];
    let o=interview_title[0];
    interview_title[1]=a;
    
    const b=interview_datetime[0];
    interview_datetime[0]=interview_datetime[1];
    let p=interview_datetime[0];
    interview_datetime[1]=b;

    const c=interview_time[0];
    interview_time[0]=interview_time[1];
    let q=interview_time[0];
    interview_time[1]=c;

    const d=viewer[0];
    viewer[0]=viewer[1];
    let r=viewer[0];
    viewer[1]=d;

    

    for (let i=0;i<=2;i++){
        var contents= 
        '<a href="interview-'+(i+1)+'.html" class="link-box-'+(i+1)+'" id="default-article">'+
        '<div class="interview-box" id="interview-bo">'+
        '<div class="interview-inner">'+
        '<div class="img-display">'+
            '<img src="./interview-'+(i+1)+'.jpg" alt="インタビュー画像">'+
            '</div>'+
            '<div class="interview-index">'+
                '<div class="interview-min-title">'+
                    '<h2>'+interview_title[i]+
                    '</h2>'+
                '</div>'+
                '<div class="view-flex">'+
                '<time datetime="'+interview_datetime[i]+ '"class="time">'+
                    interview_time[i]+
                    '</time>'+
                    '<div class="viewer">'+
                    '<i class="fas fa-eye" style="color:#C0C0C0;"></i>'+
                    viewer[i]+
                    '</div>'+
                '</div>'+
                
            '</div>'+
        '</div>'+
    '</div>'+
    '</a>';
    
    document.getElementById('interview-bo').insertAdjacentHTML('beforeend', contents);
    };

    var element =document.getElementById("interview-box");
    element.remove();
    
    view_sort.classList.add('cantclick');
};

time_sort.onclick=function(){
    const a=interview_title[0];
    interview_title[0]=interview_title[1];
    interview_title[1]=a;
    
    const b=interview_datetime[0];
    interview_datetime[0]=interview_datetime[1];
    interview_datetime[1]=b;

    const c=interview_time[0];
    interview_time[0]=interview_time[1];
    interview_time[1]=c;

    const d=viewer[0];
    viewer[0]=viewer[1];
    viewer[1]=d;

    for (let i=0;i<=2;i++){
        var contents= 
        '<a href="interview-'+(i+1)+'.html" class="link-box-'+(i+1)+'" id="default-article">'+
        '<div class="interview-box" id="interview-bo">'+
        '<div class="interview-inner">'+
        '<div class="img-display">'+
            '<img src="./interview-'+(i+1)+'.jpg" alt="インタビュー画像">'+
            '</div>'+
            '<div class="interview-index">'+
                '<div class="interview-min-title">'+
                    '<h2>'+interview_title[i]+
                    '</h2>'+
                '</div>'+
                '<div class="view-flex">'+
                '<time datetime="'+interview_datetime[i]+ '"class="time">'+
                    interview_time[i]+
                    '</time>'+
                    '<div class="viewer">'+
                    '<i class="fas fa-eye" style="color:#C0C0C0;"></i>'+
                    viewer[i]+
                    '</div>'+
                '</div>'+
                
            '</div>'+
        '</div>'+
    '</div>'+
    '</a>';
    
    document.getElementById('interview-b').insertAdjacentHTML('beforeend', contents);
    };

    var element =document.getElementById("interview-bo");
    element.remove();
    
    time_sort.classList.add('cantclick');
};
console.log(viewer[0]);

for (let i=0;i<=2;i++){
    var contents= 
    '<a href="interview-'+(i+1)+'.html" class="link-box-'+(i+1)+'" id="default-article">'+
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
            '<div class="view-flex">'+
            '<time datetime="'+interview_datetime[i]+ '"class="time">'+
                interview_time[i]+
                '</time>'+
                '<div class="viewer">'+
                '<i class="fas fa-eye" style="color:#C0C0C0;"></i>'+
                viewer[i]+
                '</div>'+
            '</div>'+
            
        '</div>'+
    '</div>'+
'</div>'+
'</a>';

document.getElementById('interview-box').insertAdjacentHTML('beforeend', contents);
};

//インタビュー部分の表示

// var interview=new Array();
// interview.push(["interview-1.html","link-box-1","./interview-1.jpg","エンジニアユーザー急増中！「HarborS」が考える現代に求められるエンジニアコミュニティや空間のあり方について","2021-2-27","2021年2月27日",10]);
// interview.push(["interview-2.html","link-box-1","./interview-2.jpg","アンチパターンだからこそ叶うキャリア。エンジニアとして圧倒的なスピードで市場価値を高める。[社員インタビュー#1]","2021-2-10","2021年2月10日",25]);
// interview.push(["interview-3.html","link-box-1","./interview-3.jpg","エンジニアを憧れの職業へするために活動するアンチパターンの６つの事業を一挙ご紹介！","2021-2-3","2021年2月3日",9]);

// interview.forEach(){
//     making
// }

// function makingarticle(){
//         var contents= 
//         '<a href="'+interview[i]+'" class="link-box-'+(i+1)+'">'+
//         '<div class="interview-box" id="interview-box">'+
//         '<div class="interview-inner">'+
//         '<div class="img-display">'+
//             '<img src="./interview-'+(i+1)+'.jpg" alt="インタビュー画像">'+
//             '</div>'+
//             '<div class="interview-index">'+
//                 '<div class="interview-min-title">'+
//                     '<h2>'+interview_title[i]+
//                     '</h2>'+
//                 '</div>'+
//                 '<div class="view-flex">'+
//                 '<time datetime="'+interview_datetime[i]+ '"class="time">'+
//                     interview_time[i]+
//                     '</time>'+
//                     '<div class="viewer">'+
//                     '<i class="fas fa-eye" style="color:#C0C0C0;"></i>'+
//                     viewer[i]+
//                     '</div>'+
//                 '</div>'+
                
//             '</div>'+
//         '</div>'+
//     '</div>'+
//     '</a>';
    
//     document.getElementById('interview-box').insertAdjacentHTML('beforeend', contents);
//     };


