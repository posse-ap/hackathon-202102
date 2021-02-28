"use strict"

for (let i = 0; i < 4; i++) {
  $(function () {

    var $target = $(`#eyecatch_${i}`);//対象の要素
    var bgColor = 'transparent';//対象になる要素のデフォルトのcss
    var hoverColor = '#0271C0';//対象の要素にマウスオーバーした時のcss
    var speed = 'normal';//アニメーションのスピード
    var easing = 'linear';//アニメーションのイージング

    $target.hover(function () {//マウスオーバー

      $(this).stop().animate({

        backgroundColor: hoverColor//マウスオーバー時に対象になる要素のcssを変更する

      }, speed, easing);

    }, function () {//マウスアウト

      $(this).stop().animate({

        backgroundColor: bgColor//マウスアウト時に対象になる要素のデフォルトのcssを適用する

      }, speed, easing);
    });
  });

  $(function () {

    var $target = $(`#eyecatch_${i}`);
    var Opacity = $target.css('opacity');
    var hoverOpacity = 0.7;
    var speed = 'normal';
    var easing = 'linear';

    $target.hover(function () {

      $(`#me_${i}`).stop().animate({//targetと実際の対象が異なるので注意

        opacity: hoverOpacity

      }, speed, easing);

    }, function () {

      $(`#me_${i}`).stop().animate({

        opacity: Opacity

      }, speed, easing);
    });
  });

  $(function () {

    var $target = $(`#eyecatch_${i}`);
    var Color = 'transparent';
    var hoverColor = '#ffffff';
    var speed = 'normal';
    var easing = 'linear';

    $target.hover(function () {

      $(`#my_p_${i}`).stop().animate({//targetと実際の対象が異なるので注意

        color: hoverColor

      }, speed, easing);

    }, function () {

      $(`#my_p_${i}`).stop().animate({

        color: Color

      }, speed, easing);
    });
  });
}