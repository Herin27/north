document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const leftMenu = document.getElementById('left-menu');

    toggleMenuButton.addEventListener('click', () => {
        leftMenu.classList.toggle('collapsed');
    });
});
