document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('aside');
    const sidebarClose = document.getElementById('sidebar-close');
    const main = document.querySelector('main');

    // Function to switch tabs
    function switchTab(tabId) {
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.remove('hidden');
            const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }
    }

    // Add click event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            if (window.innerWidth < 768) { // Close sidebar on mobile when a tab is selected
                sidebar.classList.add('-translate-x-full');
                main.classList.remove('opacity-50', 'pointer-events-none');
            }
        });
    });

    // Toggle sidebar on mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            sidebar.classList.toggle('-translate-x-full');
            main.classList.toggle('opacity-50');
            main.classList.toggle('pointer-events-none');
        });
    }

    // Close sidebar on mobile
    if (sidebarClose) {
        sidebarClose.addEventListener('click', function () {
            sidebar.classList.add('-translate-x-full');
            main.classList.remove('opacity-50', 'pointer-events-none');
        });
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove('-translate-x-full');
            main.classList.remove('opacity-50', 'pointer-events-none');
        }
    });

    // Set the initial active tab (you can change 'about' to any default tab you prefer)
    switchTab('about');
});