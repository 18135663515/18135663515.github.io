document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2024-08-20');
    const daysElement = document.getElementById('love-days');

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / 86400000);
        daysElement.textContent = days;
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});