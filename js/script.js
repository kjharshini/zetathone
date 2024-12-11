document.getElementById('getStarted').addEventListener('click', () => {
    document.getElementById('content').classList.add('blurred'); // Blur content
    document.getElementById('popup').classList.remove('hidden'); // Show popup
});

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('content').classList.remove('blurred'); // Remove blur
    document.getElementById('popup').classList.add('hidden'); // Hide popup
});