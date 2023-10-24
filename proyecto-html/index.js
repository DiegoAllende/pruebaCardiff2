const targets = document.querySelectorAll("[data-target]");
const contents = document.querySelectorAll("[data-content]");

targets.forEach(target => {
    target.addEventListener('click', () => {
        targets.forEach(tar => {
            tar.classList.remove("active");
        });
        contents.forEach(content => {
            content.classList.remove("active");
        });

        const t = document.querySelector(target.dataset.target);
        t.classList.add("active");
        target.classList.add("active");
    })
});