document.addEventListener('DOMContentLoaded', function () {
    const portfolioContainer = document.querySelector('#portfolio .grid');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-details');
    const closePopup = document.getElementById('close-popup');

    const projectDetails = {
        'meyka': {
            title: 'Meyka - AI Stock Research Chatbot',
            shortDescription: 'An AI-powered stock research assistant that helps investors make informed decisions in major international markets.',
            image: 'images/about_meyka.jpg',
            link: 'https://meyka.com/'
        },
        'salary-scout': {
            title: 'SalaryScout',
            shortDescription: 'A salary research tool that collects and analyzes developer salaries, providing insights on average, maximum, and minimum salaries in the tech industry.',
            image: 'images/SalaryScout.png',
            link: 'https://salary-scout.com/'
            // longDescription: 'SalaryScout is an advanced salary research platform designed specifically for the tech industry. It utilizes big data and machine learning algorithms to collect, analyze, and present comprehensive salary information for various developer roles across different regions and experience levels. The tool offers detailed insights into salary trends, allowing both job seekers and employers to make informed decisions.',
            // images: [
            //     'images/SalaryScout.png',
            //     'images/SalaryScout-2.png',
            //     'images/SalaryScout-3.png'
            // ]
        },
        'nepse-research': {
            title: 'NEPSE Research',
            shortDescription: 'A comprehensive tool for the Nepal stock market featuring a stock screener, candlestick pattern analysis, and chart pattern detection.',
            image: 'images/nepse-research.png',
            link: 'https://nepseresearch.com'
        },
        'bravo-scan': {
            title: 'Bravo Scan',
            shortDescription: 'A US market analysis tool offering technical indicators, stock screening, and advanced market insights.',
            image: 'images/bravo-scan.png',
            link: 'https://bravo-scan.com'
        },
        'task-earn': {
            title: 'Task Earn',
            shortDescription: 'TaskEarn is an innovative platform connecting users with diverse task-based earning opportunities, leveraging AI-powered matching to optimize task completion and creator satisfaction.',
            image: 'images/task-earn.png',
            link: 'https://taskearn.app/',
        },
        'yahoo-technical-stock-screener': {
            title: 'Technical Stock Screener',
            shortDescription: 'A comprehensive stock screening tool that allows users to filter and analyze stocks based on various financial indicators and market data.',
            image: 'images/yahoo-technical-stock-screener.png', // You'll need to replace this with your actual image path
            longDescription: `Our Yahoo-Style Stock Screener is a powerful tool designed for investors and traders to efficiently filter and analyze stocks across multiple markets. Key features include:
        <ol>
        <li>
        1. Advanced Filtering: Users can screen stocks based on sector, price, change percentage, average volume, market cap, and specialized indicators like CCI, RV, Performance Index, AO, MFI, and Stockscores.
        </li>
        <li>
        2. Real-time Data: The screener provides up-to-date information on stock prices, market cap, and trading volumes.
        </li>
        <li>
        3. Technical Indicators: Incorporates a wide range of technical indicators for in-depth analysis, including Commodity Channel Index (CCI), Relative Vigor (RV), Performance Index (PI), and Awesome Oscillator (AO).
        </li>
        <li>
        4. Sentiment Analysis: Includes sentiment and signal stockscores to gauge market perception and potential stock movements.
        </li>
        <li>
        5. Customizable Views: Users can save their preferred filters and create custom stock lists for quick access.
        </li>
        <li>
        6. User-Friendly Interface: The screener features an intuitive design with easy-to-use dropdown menus and search functionality.
        </li>
        <li>
        7. Comprehensive Stock Information: Each stock entry provides detailed information including full company name, sector classification, and key financial metrics.
        </li>
        <li>
        8. Export Functionality: Users can export their screened results for further analysis in other tools.
        </li>
        </ol>
        This stock screener is an invaluable resource for both novice and experienced investors, providing the tools needed to make informed investment decisions based on a wide array of market data and technical indicators.`,
            images: [
                'images/yahoo-technical-stock-screener.png'
            ]
        }
    };

    function generatePortfolio() {
        let portfolioHTML = '';
        for (const [id, project] of Object.entries(projectDetails)) {
            portfolioHTML += `
                <div class="bg-light rounded-lg overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2 text-white">${project.title}</h3>
                        <p class="mb-4">${project.shortDescription}</p>
                        ${project.link
                    ? `<a href="${project.link}" target="_blank" class="text-primary hover:underline">View Project</a>`
                    : `<button class="text-primary hover:underline open-popup" data-project="${id}">View Details</button>`
                }
                    </div>
                </div>
            `;
        }
        portfolioContainer.innerHTML = portfolioHTML;
    }

    function openPopup(projectId) {
        const project = projectDetails[projectId];
        if (project && !project.link) {
            let content = `
                <h2 class="text-2xl font-bold mb-4 text-white">${project.title}</h2>
                <div class="popup-scroll-content">
                    <p class="mb-4">${project.longDescription}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="w-full rounded-lg">`).join('')}
                    </div>
                </div>
            `;
            popupContent.innerHTML = content;
            popupOverlay.classList.remove('hidden');
            popupOverlay.classList.add('flex');
        }
    }

    generatePortfolio();

    portfolioContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('open-popup')) {
            const projectId = e.target.getAttribute('data-project');
            openPopup(projectId);
        }
    });

    closePopup.addEventListener('click', function () {
        popupOverlay.classList.add('hidden');
        popupOverlay.classList.remove('flex');
    });

    popupOverlay.addEventListener('click', function (e) {
        if (e.target === popupOverlay) {
            popupOverlay.classList.add('hidden');
            popupOverlay.classList.remove('flex');
        }
    });
});