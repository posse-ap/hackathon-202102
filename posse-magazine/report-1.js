function scrolling(table_number){
    // var table=document.getElementById("table-"+table_number);
    var heading=document.getElementById("heading-"+table_number);
    
    heading.scrollIntoView({behavior: 'smooth', block: 'start'});
    };
    
    // タイトルの格納
    let interview_title=new Array();
    
    interview_title.push(["アンチパターンだからこそ叶うキャリア。エンジニアとして圧倒的なスピードで市場価値を高める。[社員インタビュー#1]" ]);
    interview_title.push(["エンジニアを憧れの職業へするために活動するアンチパターンの６つの事業を一挙ご紹介！"]);
    
    let interview_datetime=new Array();
    
    interview_datetime.push(["2021-2-10"]);
    interview_datetime.push(["2021-2-3"]);
    
    let interview_time=new Array();
    
    interview_time.push("2021年2月10日");
    interview_time.push("2021年2月3日");
    
    
    //インタビュー部分の表示
    for (let i=0;i<=1;i++){
        var contents= 
        '<a href="interview-'+(i+1)+'.html" class="link-box-'+(i+1)+'">'+
        '<div class="interview-box" id="interview-box">'+
        '<div class="interview-inner">'+
        '<div class="img-display">'+
            '<img src="./interview-'+(i+2)+'.jpg" alt="インタビュー画像">'+
            '</div>'+
            '<div class="interview-index">'+
                '<div class="interview-min-title">'+
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
    
    document.getElementById('relation').insertAdjacentHTML('beforeend', contents);
    };