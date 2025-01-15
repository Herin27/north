document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const leftMenu = document.getElementById('left-menu');

    toggleMenuButton.addEventListener('click', () => {
        leftMenu.classList.toggle('collapsed');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleMenuButton = document.getElementById('toggle-menu');
    const leftMenu = document.getElementById('left-menu');

    // Function to handle menu toggle
    toggleMenuButton.addEventListener('click', () => {
        leftMenu.classList.toggle('collapsed');
    });

    // Function to adjust page width based on screen size
    const adjustPageWidth = () => {
        const screenWidth = window.innerWidth;
        const body = document.body;

        if (screenWidth > 992 && screenWidth <= 1600) {
            body.style.zoom = "90%"; // Shrink page to 90%
        } else if (screenWidth >= 700 && screenWidth <= 767) {
            body.style.zoom = "80%"; // Shrink page to 80%
        } else if (screenWidth >= 600 && screenWidth < 700) {
            body.style.zoom = "75%"; // Shrink page to 75%
        } else if (screenWidth <= 600) {
            body.style.zoom = "50%"; // Shrink page to 50%
        } else {
            body.style.zoom = "100%"; // Default to 100% for other sizes
        }
    };

    // Adjust page width on load
    adjustPageWidth();

    // Adjust page width on window resize
    window.addEventListener('resize', adjustPageWidth);
});
