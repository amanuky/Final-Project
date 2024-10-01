function includeHTML() {
    let elements = document.querySelectorAll('[data-include-html]');
    elements.forEach(function (element) {
        let file = element.getAttribute("data-include-html");
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => element.innerHTML = data);
        }
    });
}

window.onload = includeHTML;

