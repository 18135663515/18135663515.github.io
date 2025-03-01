document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2015-08-20'); // 自动从front-matter获取

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('love-days').textContent = days;
        document.getElementById('love-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('love-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('love-seconds').textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});