
    //Видео на странице скрипты

var video = document.querySelector('.section-four__video'); // создаю и присваеваю класс переменной видео
var juice = document.querySelector('.orange-juice'); // создаю и присваеваю класс переменной линнии воспроизвидения
var btn = document.getElementById('play-pause'); // создаю переменную btn и присваеваю класс переменной кнопку воспроизвидения
var volinc = document.getElementById('volinc');
var voldec = document.getElementById('voldec');
var mute = document.getElementById('mute');

function togglePlayPause() { // создаю функцию 
    if(video.paused){ // если видео на паузе
        btn.className = 'pause'; // кнопке присваевается класс, в этом классе меняется иконка плэйера на иконку вкл
        video.play(); // видео начинает проигрываться
    }
    else { // в любом другом случае
        btn.className = 'play'; // кнопке присваевается класс. в этом классе меняется иконка плэйера на иконку выкл
        video.pause(); // видео останавливается
    }
}

video.onclick = function() {
    togglePlayPause();
};

btn.onclick = function() { // если кликнуть на кнопку воспроизвидения то включается функция описанная выше
    togglePlayPause();
};

video.addEventListener("timeupdate", function() {   // не совсем понимаю как это сделано
    var juicePos = video.currentTime / video.duration;  // но линия воспроизвидения будет удлинятся прямо пропорционально времени воспроизвидения видео по процентам
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){ // если видео закончила свое воспризвидение то кнопке присваевается класс который меняет иконку плэйера на иконку выкл
        btn.className = "play";
    }
})

var alterVolume = function(dir) { // функция меняющяя громкость видео
    var currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === '+') {
        if (currentVolume < 1) video.volume += 0.1;
    }
    else if (dir === '-') {
       if (currentVolume > 0) video.volume -= 0.1;
    }
}

mute.addEventListener('click', function(e) {
    video.muted = !video.muted;
    if(video.muted){ 
        mute.className = 'muted'; 
    }
    if(!video.muted) { 
        mute.className = 'unmute';
    }
});

volinc.addEventListener('click', function(e) {
    alterVolume('+');
});
voldec.addEventListener('click', function(e) {
    alterVolume('-');
});