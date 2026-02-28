document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId) {
        tabContents.forEach(content => content.classList.add('hidden'));
        tabButtons.forEach(btn => btn.classList.remove('active'));

        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.remove('hidden');
            const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
            if (activeButton) activeButton.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            if (tabId) switchTab(tabId);
        });
    });

    switchTab('about');
});
