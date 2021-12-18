export function errorMessage(errorType, error, target) {
    const element = document.querySelector(target);

    element.innerHTML = `<div class="errorMessage ${errorType}"> ${error}</div>`;
}