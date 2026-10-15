const options = {
    threshold: 0.3,                    // сколько процентов элемента должно быть видно (0–1)
    rootMargin: "0px 0px -80px 0px"    // сдвиг границ области видимости
};

const recipeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // сюда: что делать с элементом, который появился
            entry.classList.add('animate');
        }
    });
}, options);