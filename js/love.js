document.addEventListener('DOMContentLoaded', () => {
    // 恋爱计时
    const startDate = new Date('2015-08-20');
    const daysElement = document.getElementById('love-days');

    function updateTimer() {
        const diff = Date.now() - startDate;
        const days = Math.floor(diff / 86400000);
        daysElement.textContent = days;
    }
    setInterval(updateTimer, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    // 照片放大功能
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const prevImage = document.getElementById('prev-image');
    const nextImage = document.getElementById('next-image');
    const closeBtn = document.querySelector('.close-btn');
    const modalLeftArea = document.querySelector('.modal-left-area');
    const modalRightArea = document.querySelector('.modal-right-area');
    let currentIndex = 0;
    let photos = [];

    function openModal(index, photoList) {
        photos = photoList;
        currentIndex = index;
        updateModalImages();
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function updateModalImages() {
        modalImage.src = photos[currentIndex];
        prevImage.src = photos[(currentIndex - 1 + photos.length) % photos.length];
        nextImage.src = photos[(currentIndex + 1) % photos.length];
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateModalImages();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % photos.length;
        updateModalImages();
    }

    // 绑定事件
    document.querySelectorAll('.photo-item, .album-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            const photoList = Array.from(item.parentNode.children).map(
                el => el.style.backgroundImage.slice(5, -2)
            );
            openModal(index, photoList);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    modalLeftArea.addEventListener('click', showPrev);
    modalRightArea.addEventListener('click', showNext);
});