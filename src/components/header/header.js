(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', () => {
        document.querySelector('body > header').addEventListener('click', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            let startH = 206;
            let hue = window.scrollY / -2 + startH;

            function hueFiller(hue, lightness) {
                return elem => {
                    elem.style.fill = `hsl(${hue}, 65%, ${lightness})`
                }
            }

            document.querySelectorAll('#layer1 > path').forEach(hueFiller(hue, '62%'));
            document.querySelectorAll('#layer2 > path').forEach(hueFiller(hue, '30%'));
        })
    });
})();
