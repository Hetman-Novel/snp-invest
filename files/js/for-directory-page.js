document.addEventListener('DOMContentLoaded', function () {
    const headerHeight = document.getElementById('header-container').offsetHeight;
    const elements = document.querySelectorAll('[data-name]');
    const sections = document.querySelectorAll('[data-title]');

    // Функция для обновления классов active в зависимости от положения скролла
    function updateActiveClasses() {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            if (window.pageYOffset >= sectionTop - headerHeight) {
                currentSection = section.getAttribute('data-title');
            }
        });

        elements.forEach((el) => {
            if (el.getAttribute('data-name') === currentSection) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    // Прослушиваем событие скролла
    window.addEventListener('scroll', updateActiveClasses);

    elements.forEach(function (el) {
        el.addEventListener('click', function () {
            elements.forEach(function (innerEl) {
                innerEl.classList.remove('active');
            });

            el.classList.add('active');

            const name = el.getAttribute('data-name');
            const target = document.querySelector(`[data-title="${name}"]`);
            if (target) {
                const scrollTargetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: scrollTargetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});