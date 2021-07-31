$(function () {
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition': "left",
        'navigationColor': ['#fff'],
    });
});


loadAudioFile('../music/2.mp3');

// 只能用户操作后才能播放音频
// $(window).click(function () {
//     $('audio')[0].play();
// });
