/**
 * Created by zheng on 2016/8/30.
 */
FastClick.attach(document.body);
~function () {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW,
        oMain = document.querySelector('.main');
    if (winW > desW) {
        oMain.style.margin = '0 auto';
        oMain.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}();
new Swiper('.swiper-container',{
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function (swiper) {
        var sideAry = swiper.slides;
        var curIndex = swiper.activeIndex;
        var total = sideAry.length;
        var targetId = 'page';
        switch (curIndex) {
            case 0:
                targetId += total - 2;
                break;
            case total - 1:
                targetId += 1;
                break;
            default :
                targetId += curIndex;
        }
        [].forEach.call(sideAry,function (item, index) {
            if(curIndex == index){
                item.id = targetId;
            }else{
                item.id = null;
            }
        });
    }
});

~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.1;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();
