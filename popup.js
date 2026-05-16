function openPopup(id) {
    document.getElementById('popup-' + id).removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
}
function closePopup(id) {
    document.getElementById('popup-' + id).setAttribute('hidden', '');
    document.body.style.overflow = '';
}
document.querySelectorAll('.open-popup-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        openPopup(btn.getAttribute('data-id'));
    });
});
document.querySelectorAll('.popup-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closePopup(overlay.id.replace('popup-', ''));
    });
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup-overlay:not([hidden])').forEach(function (overlay) {
            closePopup(overlay.id.replace('popup-', ''));
        });
    }
});