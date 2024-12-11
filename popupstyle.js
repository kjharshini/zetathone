const getStartedBtn = document.getElementById('getStartedBtn');
const loginCard = document.getElementById('loginCard');

// Add click event to toggle the card visibility
getStartedBtn.addEventListener('click', () => {
    if (loginCard.style.display === 'none' || loginCard.style.display === '') {
        loginCard.style.display = 'block';
    } else {
        loginCard.style.display = 'none';
    }
});