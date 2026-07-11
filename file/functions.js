(function() {
    var $win = $(window);
    var clientWidth = $win.width();
    var clientHeight = $win.height();

    $(window).resize(function() {
        var newWidth = $win.width();
        var newHeight = $win.height();
        if (newWidth != clientWidth && newHeight != clientHeight) {
            location.replace(location);
        }
    });

    (function($) {
        $.fn.typewriter = function() {
            this.each(function() {
                var $ele = $(this),
                    str = $ele.html(),
                    progress = 0;
                $ele.html('');
                var timer = setInterval(function() {
                    var current = str.substr(progress, 1);
                    if (current == '<') {
                        progress = str.indexOf('>', progress) + 1;
                    } else {
                        progress++;
                    }
                    $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                    if (progress >= str.length) {
                        clearInterval(timer);
                    }
                }, 75);
            });
            return this;
        };
    })(jQuery);

   function timeElapse(date) {
    var current = new Date();
    var totalSeconds = Math.floor((current.getTime() - date.getTime()) / 1000);

    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");

    var result =
        '第 <span class="digit">' + days + '</span> 天 ' +
        '<span class="digit">' + hours + '</span> 小时 ' +
        '<span class="digit">' + minutes + '</span> 分钟';

    $("#clock").html(result);
}

    setInterval(function() {
        timeElapse(new Date(2026, 5, 29, 14, 40, 0));
    }, 10);

})();
