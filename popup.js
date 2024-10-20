document.addEventListener('DOMContentLoaded', function () {
    const portfolioContainer = document.querySelector('#portfolio .grid');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-details');
    const closePopup = document.getElementById('close-popup');

    const projectDetails = {
        'meyka': {
            title: 'Meyka - AI Stock Research Chatbot',
            shortDescription: 'An AI-powered stock research assistant that helps investors make informed decisions in major international markets.',
            image: 'portfolio_images/about_meyka.webp',
            link: 'https://meyka.com/'
        },
        'salary-scout': {
            title: 'SalaryScout',
            shortDescription: 'A salary research tool that collects and analyzes developer salaries, providing insights on average, maximum, and minimum salaries in the tech industry.',
            image: 'portfolio_images/SalaryScout.webp',
            link: 'https://salary-scout.com/'
        },
        'nepse-research': {
            title: 'NEPSE Research',
            shortDescription: 'A comprehensive tool for the Nepal stock market featuring a stock screener, candlestick pattern analysis, and chart pattern detection.',
            image: 'portfolio_images/nepse-research.webp',
            link: 'https://nepseresearch.com'
        },
        'bravo-scan': {
            title: 'Bravo Scan',
            shortDescription: 'A US market analysis tool offering technical indicators, stock screening, and advanced market insights.',
            image: 'portfolio_images/bravo-scan.webp',
            link: 'https://bravo-scan.com'
        },
        'task-earn': {
            title: 'Task Earn',
            shortDescription: 'TaskEarn is an innovative platform connecting users with diverse task-based earning opportunities, leveraging AI-powered matching to optimize task completion and creator satisfaction.',
            image: 'portfolio_images/task-earn.webp',
            link: 'https://taskearn.app/',
        },
        'murat-stock-screener': {
            title: 'Custom Stock Screener',
            shortDescription: 'A stock screener focused on EMA/SMA crossovers with additional features like saved lists, stock indicators, and market analysis.',
            image: 'portfolio_images/murat-stock-screener1.webp',
            longDescription: `This project is a stock screener designed to identify stocks based on EMA (15) crossing SMA (30) and determining if the stock is trending up or down after the crossover. The key features include:
    <ol>
        <li>
        1. Stock scanner with EMA (15) / SMA (30) crossovers as the primary indicator.
        </li>
        <li>
        2. Ability to save and manage stock lists for easy reference.
        </li>
        <li>
        3. Search functionality to find stocks by symbols, allowing users to input multiple stock symbols separated by commas.
        </li>
        <li>
        4. Real-time data on RSI (14), prices, and other indicators, displayed alongside the EMA/SMA analysis.
        </li>
        <li>
        5. A clean interface showing stock details like price, percentage change after the crossover, RSI, and stock names.
        </li>
        <li>
        6. Filtering options based on stock indicators and timeframes like 1 Day.
        </li>
    </ol>
    </br>
    This screener is designed for traders looking to identify trends based on moving average crossovers, with additional features for saved lists, stock indicators, and real-time analysis.`,
            images: [
                'portfolio_images/murat-stock-screener1.webp',
                'portfolio_images/murat-stock-screener2.webp',
            ]
        },
        'yahoo-technical-stock-screener': {
            title: 'Technical Stock Screener',
            shortDescription: 'A comprehensive stock screening tool that allows users to filter and analyze stocks based on various financial indicators and market data.',
            image: 'portfolio_images/yahoo-technical-stock-screener.webp',
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
        </br>
        This stock screener is an invaluable resource for both novice and experienced investors, providing the tools needed to make informed investment decisions based on a wide array of market data and technical indicators.`,
            images: [
                'portfolio_images/yahoo-technical-stock-screener.webp'
            ]
        },
        'private-client-canada': {
            title: 'Private Stock Scanner Project',
            shortDescription: 'A private client project involving the development of a custom stock scanner and daily reporting system based on a unique strategy for calculating percentage increases in stock prices.',
            image: 'portfolio_images/1 - home1.webp',
            longDescription: `This project was developed for a Canada-based private client. The client provided an API as the data source and had a custom strategy to calculate percentage increases. Key features of the project include:
    <ol>
        <li>
        1. Implementing the client's custom strategy for stock price increase calculations using the provided API data.
        </li>
        <li>
        2. Building a custom stock scanner to filter data based on price and percentage increase.
        </li>
        <li>
        3. Developing a system to generate daily reports for the client.
        </li>
        <li>
        4. Successfully delivering an automated and user-friendly solution that exceeded client expectations.
        </li>
    </ol>
    </br>
    This private project demonstrated my ability to collaborate with clients, understand their unique needs, and deliver a functional, data-driven tool.`,
            images: [
                'portfolio_images/1 - home1.webp',
                'portfolio_images/1 - StockHistoricalPage.webp',
                'portfolio_images/1 - home.webp',
                'portfolio_images/1 - screener.webp',
                'portfolio_images/1 - StockDetailPage.webp',
            ]
        }, 'dividend-calculator': {
            title: 'Dividend Calculator Web Application',
            shortDescription: 'A custom web application developed for a Canadian client to calculate stock dividends, featuring watchlists, screeners, portfolios, and summary tabs.',
            image: 'portfolio_images/2 - DividendCalculator - Portfolio.webp',
            longDescription: `This project was a web-based dividend calculator for a Canada-based client. The client provided an API for the data source, and initially, the goal was to replicate a spreadsheet used for calculating dividends into a smooth, fast web application. Key features include:
    <ol>
        <li>
        1. Replicating the client's spreadsheet-based dividend calculations into a web application.
        </li>
        <li>
        2. Implementing additional features like watchlists, stock screeners, portfolio management, and summary tabs.
        </li>
        <li>
        3. Ensuring a fast, user-friendly interface for better performance and smooth navigation.
        </li>
        <li>
        4. Delivering a design aligned with the client's vision, enhancing both functionality and user experience.
        </li>
    </ol>
    </br>
    This project expanded from a basic calculator to a comprehensive tool with several added functionalities, making it an essential resource for the client’s stock management needs.`,
            images: [
                'portfolio_images/2 - DividendCalculator - Portfolio.webp',
                'portfolio_images/2 - DividendCalculator - WatchList.webp',
                'portfolio_images/2 - Dividend Calculator - DataBank.webp',
                'portfolio_images/2 - DividendCalculator - Summary.webp',
            ]
        },
        'options-screener': {
            title: 'Private Options Screener',
            shortDescription: 'A simple Options Screener developed for a private client, integrating provided design and API templates with a custom backend.',
            image: 'portfolio_images/3 - RH Screener.webp',
            longDescription: `This project was a private Options Screener developed for a client. The client provided both the design and API templates, and my task was to create the backend and integrate everything seamlessly. Key highlights include:
    <ol>
        <li>
        1. Developing a custom backend to support the Options Screener functionality.
        </li>
        <li>
        2. Integrating the provided design and API templates to ensure a smooth, functional tool.
        </li>
        <li>
        3. Ensuring that the screener operates efficiently, meeting the client's needs and expectations.
        </li>
    </ol>
    </br>
    This project demonstrated my ability to build backend systems and integrate frontend designs and external APIs in a streamlined process.`,
            images: [
                'portfolio_images/3 - RH Screener.webp',
                'portfolio_images/3 - RH Options.webp',
            ]
        },
        'us-exchange-screener': {
            title: 'US Exchange Screener with Portfolios',
            shortDescription: 'A custom screener for US exchanges with portfolio management and market movers features, developed for a private client with specific restrictions.',
            image: 'portfolio_images/4 - AI - Home.webp',
            longDescription: `This project involved developing a simple screener for US exchanges with portfolio management capabilities. The client requested some specific restrictions and features. Key aspects of the project include:
    <ol>
        <li>
        1. Implementing a screener for US exchange stocks.
        </li>
        <li>
        2. Adding portfolio management functionality, with a restriction of only 4 portfolios per user.
        </li>
        <li>
        3. Creating market movers features, including sections for top gainers, top losers, and most active stocks.
        </li>
        <li>
        4. Ensuring a smooth user experience, aligning with the client's requirements and business logic.
        </li>
    </ol>
    </br>
    This project allowed the client to offer users a simple yet powerful tool for managing portfolios and tracking market movers in US exchanges.`,
            images: [
                'portfolio_images/4 - AI - Home.webp',
                'portfolio_images/4 - AI - Screener.webp',
            ]
        },
        'finviz-style-screener': {
            title: 'Finviz-Style Screener and Scanner',
            shortDescription: 'A Finviz-style stock screener and scanner with custom filters built on a proprietary database, updated through scheduled programs.',
            image: 'portfolio_images/5. TG.webp',
            longDescription: `This project was modeled after the popular Finviz stock screener and scanner. The main features involved developing custom filters using a proprietary database. The key aspects include:
    <ol>
        <li>
        1. Creating a screener and scanner similar to Finviz, allowing users to filter stocks based on specific criteria.
        </li>
        <li>
        2. Building custom filters using our own database.
        </li>
        <li>
        3. Implementing scheduled programs to regularly update the database, ensuring accurate and up-to-date stock information.
        </li>
        <li>
        4. Delivering a seamless and user-friendly interface, enabling efficient stock screening and analysis.
        </li>
    </ol>
    </br>
    This project provided the client with a robust stock screening and scanning tool, leveraging a constantly updated internal database for better performance and accuracy.`,
            images: [
                'portfolio_images/5. TG.webp'
            ]
        },
        'signal-generator-stock-crypto': {
            title: 'Private Signal Generator for Stock and Cryptocurrency Markets',
            shortDescription: 'A signal generator for stock and cryptocurrency markets that generates buy and warning signals based on technical indicators in real-time using API data.',
            image: 'portfolio_images/6. AT-Crypto.webp',
            longDescription: `This project was developed for a private client to generate buy and warning signals in both the stock and cryptocurrency markets. The client provided the API, and I used the data in real-time to generate signals based on technical indicators. Key aspects of the project include:
    <ol>
        <li>
        1. Developing a signal generation system to produce buy and warning signals.
        </li>
        <li>
        2. Using real-time data from the client-provided API to calculate and display signals.
        </li>
        <li>
        3. Implementing technical indicators and calculations to ensure accurate and timely signals.
        </li>
        <li>
        4. Creating a robust and reliable system for the client's personal use in both stock and cryptocurrency markets.
        </li>
    </ol>
    </br>
    This project allowed the client to efficiently track market movements and make informed decisions based on real-time signals.`,
            images: [
                'portfolio_images/6. AT-Crypto.webp',
                'portfolio_images/6. AT-Stocks.webp',
            ]
        },
        'us-stock-market-screener': {
            title: 'US Stock Market Screener',
            shortDescription: 'A Yahoo Finance-style screener for the US stock market, featuring subscription plans, quote pages, fundamental data, custom charts, and dashboards with market movers.',
            image: 'portfolio_images/7. Ryan-QuotePage.webp',
            longDescription: `This project, currently in development, is a US stock market screener inspired by Yahoo Finance. The client requested a range of advanced features, including:
    <ol>
        <li>
        1. Subscription plans to provide different levels of access to users.
        </li>
        <li>
        2. Quote pages for detailed stock information.
        </li>
        <li>
        3. Fundamental data to offer insights into stock performance.
        </li>
        <li>
        4. Custom charts for visualizing stock trends.
        </li>
        <li>
        5. Integration with TradingView for advanced charting capabilities.
        </li>
        <li>
        6. Market movers dashboards featuring top gainers, top losers, and most active stocks.
        </li>
    </ol>
    </br>
    This project is designed to offer a comprehensive stock market analysis platform similar to Yahoo Finance, with features tailored to the client's specifications.`,
            images: [
                'portfolio_images/7. Ryan-QuotePage.webp',
                'portfolio_images/7. Ryan-Screener.webp',
                'portfolio_images/7. Ryan-Home.webp',
                'portfolio_images/7. Ryan-Pricing.webp',
            ]
        },
        'wordpress-discord-alerts': {
            title: 'WordPress Project with Discord Alerts',
            shortDescription: 'A WordPress project enhanced with insider, upgrades, downgrades, and filters, generating alerts for Discord channels via shortcodes.',
            image: 'portfolio_images/8. H-Insider Transactions.webp',
            longDescription: `This project involved enhancing an existing WordPress site by adding functionality for generating alerts. Key features included:
    <ol>
        <li>
        1. Adding insider trading information, stock upgrades, and downgrades.
        </li>
        <li>
        2. Implementing filters to customize the alerts based on specific criteria.
        </li>
        <li>
        3. Using shortcodes to easily integrate these alerts into the WordPress site.
        </li>
        <li>
        4. Automatically sending these alerts to Discord channels, allowing real-time updates for users.
        </li>
    </ol>
    </br>
    This project streamlined the process of generating and sending stock-related alerts, offering a seamless connection between the WordPress platform and Discord for instant notifications.`,
            images: [
                'portfolio_images/8. H-Insider Transactions.webp',
                'portfolio_images/8. H-Upgrades-Downgrades.webp',
                'portfolio_images/8. H-Alerts.webp',
            ]
        },
        'finviz-style-screener-development': {
            title: 'Finviz-Style Crypto Screener with Automated Discord Alerts',
            shortDescription: 'A Finviz-style stock screener under development, featuring a scanner, quote page, charts, stock comparison, scoring system, and automated Discord alerts.',
            image: 'portfolio_images/10. A-Coin-Overview.webp',
            longDescription: `This project aims to create a crypto screener similar to Finviz with several advanced features. The client's requirements include:
    <ol>
        <li>
        1. A powerful stock scanner to filter coins based on various criteria.
        </li>
        <li>
        2. A detailed quote page for in-depth coin information.
        </li>
        <li>
        3. Custom charts for visualizing coin trends and performance.
        </li>
        <li>
        4. A coin comparison tool to analyze multiple stocks side by side.
        </li>
        <li>
        5. A currency scoring system to help users assess stock quality.
        </li>
        <li>
        6. Automated alerts sent to a Discord community based on predefined conditions and filters.
        </li>
    </ol>
    </br>
    The core features are being built to ensure smooth functionality. The project offers a comprehensive platform for cryptocurrency screening and automated community engagement.`,
            images: [
                'portfolio_images/10. A-Coin-Overview.webp',
                'portfolio_images/10. A-Screener.webp',
                'portfolio_images/10. A-Coin-Profile.webp',
                'portfolio_images/10. A-Coin-Twitter.webp',
            ]
        },
        'finviz-style-screener-2': {
            title: 'Finviz-Style Stock Screener with Automated Discord Alerts',
            shortDescription: 'A Finviz-style stock screener in development, including a scanner, quote page, charts, stock comparison, scoring system, and automated Discord alerts.',
            image: 'portfolio_images/11. TL - InsiderBot.webp',
            longDescription: `This project is another stock screener similar to Finviz. The client requires several key features, including:
    <ol>
        <li>
        1. A stock scanner to filter and analyze stocks.
        </li>
        <li>
        2. A comprehensive quote page for individual stock details.
        </li>
        <li>
        3. Custom charts for better stock visualization.
        </li>
        <li>
        4. A stock comparison feature for comparing different stocks.
        </li>
        <li>
        5. A stock scoring system to rank stocks based on specific criteria.
        </li>
        <li>
        6. Automated alerts that integrate with the client's Discord community.
        </li>
    </ol>
    </br>
    The current focus is on building these core functionalities. The project is aimed at providing a full-featured stock screener with real-time alerts for the client’s community.`,
            images: [
                'portfolio_images/11. TL - InsiderBot.webp',
                'portfolio_images/11. TLI - Screener.webp',
                'portfolio_images/11. TL - SocialMediaBot.webp',
                'portfolio_images/11. TL - VolumeMonitorBot.webp',
                'portfolio_images/11. TLI - Comparasion.webp',
                'portfolio_images/11. TLI - Quote.webp',
            ]
        },
        'social-media-stock-sentiment': {
            title: 'Social Media Stock Sentiment Analysis',
            shortDescription: 'A social media API integrating Twitter, StockTwits, Reddit, and Finviz to analyze trending stocks, news, and perform sentiment analysis using machine learning.',
            image: 'portfolio_images/12. F - Quote Page.webp',
            longDescription: `This project involved developing a social media API for stock sentiment analysis, as requested by the client. The system features:
    <ol>
        <li>
        1. Integration with Twitter, StockTwits, and Reddit to gather the latest social media posts on trending stocks.
        </li>
        <li>
        2. News updates retrieved using the Finviz API.
        <li>
        3. Sentiment analysis of the stock data using a machine learning model.
        </li>
        <li>
        4. Visual representation of stock sentiment in the form of a bar chart on the quote page for each ticker.
        </li>
    </ol>
    </br>
    This tool allows users to subscribe and receive timely information on trending stocks, while also providing insights based on sentiment analysis from social media and news data.`,
            images: [
                'portfolio_images/12. F - Quote Page.webp',
                'portfolio_images/12. F - Social Trending Stocks.webp',
                'portfolio_images/12. F - Home.webp',
                'portfolio_images/12. F - News.webp',
                'portfolio_images/12. F - Social Media Posts.webp',
                'portfolio_images/12. F - Screener.webp',
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
                        ${project.images.map(img => `<a href="${img}" target="_blank"><img src="${img}" alt="${project.title}" class="w-full rounded-lg"></a>`).join('')}
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