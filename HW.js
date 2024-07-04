document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close');

    openModalBtn.addEventListener('click', () => {
        modal.classList.add('show');
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10); // Slight delay to trigger the transition
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.7)';
        setTimeout(() => {
            modal.classList.remove('show');
        }, 250); // Match the duration of the transition
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.opacity = '0';
            modal.style.transform = 'scale(0.7)';
            setTimeout(() => {
                modal.classList.remove('show');
            }, 250); // Match the duration of the transition
        }
    });
});
