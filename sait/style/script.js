window.addEventListener('scroll', () => {
    const glowLeft = document.getElementById('glowLeft');
const glowRight = document.getElementById('glowRight');
const html = document.documentElement;

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Быстрый расчет процента прокрутки от 0 до 1
            const scrollPercent = html.scrollTop / (html.scrollHeight - html.clientHeight);
            
            // Меняем только прозрачность (opacity) — это самая легкая операция для браузера
            glowLeft.style.opacity = scrollPercent;
            glowRight.style.opacity = scrollPercent;

            ticking = false;
        });
        ticking = true;
    }
}, { passive: true }); // passive: true сообщает браузеру, что скролл не будет блокироваться
});

document.addEventListener("DOMContentLoaded", () => {
    const _u2_slides = document.querySelectorAll(".k7_Lp1_slide");
    const _r9_overlay = document.getElementById("x9_Rt2_overlay");
    
    if (!_u2_slides.length || !_r9_overlay) return;

    let _c4_index = 0;
    // Время показа каждого текста в миллисекундах (2000 мс = 2 секунды)
    const _t1_delay = 2000; 

    function _p5_next() {
        // Если предыдущий слайд активен, убираем его
        if (_c4_index > 0) {
            _u2_slides[_c4_index - 1].classList.remove("m5_Nx3_active");
        }

        // Если слайды закончились, скрываем весь цветной фон
        if (_c4_index >= _u2_slides.length) {
            _r9_overlay.classList.add("f1_Jp8_hidden");
            return;
        }

        // Включаем текущий слайд
        _u2_slides[_c4_index].classList.add("m5_Nx3_active");
        _c4_index++;

        // Запускаем таймер для следующего шага
        setTimeout(_p5_next, _t1_delay);
    }

    // Запуск первой анимации через 300мс после загрузки страницы
    setTimeout(_p5_next, 300);
});