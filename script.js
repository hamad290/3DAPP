// script.js

function toggleWireframe() {
    var model = document.querySelector('inline');
    var isWireframe = model.getAttribute('render') === 'false';

    // Toggle wireframe mode
    model.setAttribute('render', isWireframe ? 'true' : 'false');
}
