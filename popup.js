document.addEventListener('DOMContentLoaded', function () {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupDetails = document.getElementById('popup-details');
    const closePopupBtn = document.getElementById('close-popup');

    const projects = {
        'meyka': {
            title: 'Meyka — AI Stock Research Platform',
            desc: 'An AI-powered stock research tool that helps investors make better decisions. Covers major global markets.',
            image: 'portfolio_images/about_meyka.webp',
            link: 'https://meyka.com/'
        },
        'topchor': {
            title: 'Topchor — NGX Stock Screener',
            desc: 'A full stock screener for the Nigerian Exchange Group. Covers 145+ stocks with 20+ filters, technical indicators, watchlists, and daily market signals.',
            image: 'portfolio_images/topchor.webp',
            link: 'https://topchor.com/'
        },
        'nepse-research': {
            title: 'NEPSE Research',
            desc: 'Full stock market tool for Nepal. Includes a screener, candlestick pattern detection, and chart pattern analysis.',
            image: 'portfolio_images/nepse-research.webp',
            link: 'https://nepseresearch.com'
        },
        'bravo-scan': {
            title: 'Bravo Scan — US Market Screener',
            desc: 'US market screener with technical indicators, custom filters, and advanced market insights.',
            image: 'portfolio_images/bravo-scan.webp',
            link: 'https://bravo-scan.com'
        },
        'salary-scout': {
            title: 'SalaryScout',
            desc: 'A salary research tool that collects and shows developer salary data across the tech industry.',
            image: 'portfolio_images/SalaryScout.webp',
            link: 'https://salary-scout.com/'
        },
        'task-earn': {
            title: 'Task Earn',
            desc: 'A platform that connects users with task-based earning opportunities using AI-powered matching.',
            image: 'portfolio_images/task-earn.webp',
            link: 'https://taskearn.app/'
        },
        'murat-stock-screener': {
            title: 'Custom EMA/SMA Stock Screener',
            desc: 'A screener that finds stocks based on EMA(15) crossing SMA(30), with RSI, saved lists, and real-time data.',
            image: 'portfolio_images/murat-stock-screener1.webp',
            longDesc: `Built for a private client. Finds stocks where EMA(15) crosses SMA(30) and tracks direction after the crossover.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>EMA/SMA crossover scanner as the core filter.</li>
          <li>Save and manage custom stock lists.</li>
          <li>Multi-symbol search separated by commas.</li>
          <li>Real-time RSI(14), price, and change data.</li>
          <li>Filtering by timeframe (1 Day).</li>
        </ol>`,
            images: [
                'portfolio_images/murat-stock-screener1.webp',
                'portfolio_images/murat-stock-screener2.webp'
            ]
        },
        'yahoo-technical-stock-screener': {
            title: 'Technical Stock Screener',
            desc: 'A full-featured screener with technical indicators, sector filters, sentiment scores, and export tools.',
            image: 'portfolio_images/yahoo-technical-stock-screener.webp',
            longDesc: `A Yahoo Finance-style screener built for a private client. Lets traders filter stocks across multiple markets.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Filters by sector, price, volume, market cap, CCI, RV, AO, MFI, and Stockscores.</li>
          <li>Real-time prices and trading data.</li>
          <li>Sentiment and signal scores.</li>
          <li>Saved filter lists and custom views.</li>
          <li>Export to CSV for further analysis.</li>
        </ol>`,
            images: ['portfolio_images/yahoo-technical-stock-screener.webp']
        },
        'private-client-canada': {
            title: 'Private Stock Scanner — Canada',
            desc: 'Custom stock scanner with daily reports built around a unique percentage-increase strategy for a Canadian client.',
            image: 'portfolio_images/1 - home1.webp',
            longDesc: `Built for a Canada-based client using their API and custom strategy.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Custom price-increase calculation using client's strategy.</li>
          <li>Scanner with price and percentage filters.</li>
          <li>Automated daily reports.</li>
          <li>Clean, easy-to-use interface.</li>
        </ol>`,
            images: [
                'portfolio_images/1 - home1.webp',
                'portfolio_images/1 - StockHistoricalPage.webp',
                'portfolio_images/1 - home.webp',
                'portfolio_images/1 - screener.webp',
                'portfolio_images/1 - StockDetailPage.webp'
            ]
        },
        'dividend-calculator': {
            title: 'Dividend Calculator Web App — Canada',
            desc: 'Turned a client spreadsheet into a full web app with dividend calculations, watchlists, screeners, and portfolios.',
            image: 'portfolio_images/2 - DividendCalculator - Portfolio.webp',
            longDesc: `Built for a Canada-based client who wanted their spreadsheet logic as a fast web app.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Exact replication of spreadsheet dividend calculations.</li>
          <li>Watchlists, screener, portfolio management, and summary tabs.</li>
          <li>Fast, smooth interface.</li>
          <li>Design aligned with the client's requirements.</li>
        </ol>`,
            images: [
                'portfolio_images/2 - DividendCalculator - Portfolio.webp',
                'portfolio_images/2 - DividendCalculator - WatchList.webp',
                'portfolio_images/2 - Dividend Calculator - DataBank.webp',
                'portfolio_images/2 - DividendCalculator - Summary.webp'
            ]
        },
        'options-screener': {
            title: 'Private Options Screener',
            desc: 'Options screener built from a client-provided design and API. I built the full backend and integrated everything.',
            image: 'portfolio_images/3 - RH Screener.webp',
            longDesc: `The client provided the design and API templates. I built the backend and wired it all together.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Custom backend for options screening logic.</li>
          <li>Integration of provided design and API.</li>
          <li>Clean, efficient performance.</li>
        </ol>`,
            images: [
                'portfolio_images/3 - RH Screener.webp',
                'portfolio_images/3 - RH Options.webp'
            ]
        },
        'us-exchange-screener': {
            title: 'US Exchange Screener with Portfolio Management',
            desc: 'US stock screener with portfolio management, market movers, top gainers, top losers, and most active.',
            image: 'portfolio_images/4 - AI - Home.webp',
            longDesc: `Built for a private client with specific feature requirements.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>US exchange stock screener.</li>
          <li>Portfolio management with a 4-portfolio-per-user limit.</li>
          <li>Market movers: top gainers, top losers, most active.</li>
          <li>Smooth user experience built to the client's specs.</li>
        </ol>`,
            images: [
                'portfolio_images/4 - AI - Home.webp',
                'portfolio_images/4 - AI - Screener.webp'
            ]
        },
        'finviz-style-screener': {
            title: 'Finviz-Style Screener & Scanner',
            desc: 'A Finviz-style screener with custom filters on a proprietary database, kept fresh by scheduled update jobs.',
            image: 'portfolio_images/5. TG.webp',
            longDesc: `Modeled after Finviz but running on the client's own database.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Screener and scanner with custom filters.</li>
          <li>Proprietary database as the data source.</li>
          <li>Scheduled programs to keep the database updated.</li>
          <li>Clean interface for fast screening.</li>
        </ol>`,
            images: ['portfolio_images/5. TG.webp']
        },
        'signal-generator-stock-crypto': {
            title: 'Signal Generator — Stocks & Crypto',
            desc: 'Real-time buy and warning signal generator for stock and crypto markets. Uses client-provided API and technical indicators.',
            image: 'portfolio_images/6. AT-Crypto.webp',
            longDesc: `Built for a private client who needed signals in both stock and crypto markets.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Buy and warning signal generation.</li>
          <li>Real-time data from client-provided API.</li>
          <li>Technical indicator calculations.</li>
          <li>Reliable and accurate signal delivery.</li>
        </ol>`,
            images: [
                'portfolio_images/6. AT-Crypto.webp',
                'portfolio_images/6. AT-Stocks.webp'
            ]
        },
        'us-stock-market-screener': {
            title: 'Yahoo Finance-Style US Screener',
            desc: 'Full-featured US market screener with subscriptions, quote pages, TradingView charts, and market movers dashboard.',
            image: 'portfolio_images/7. Ryan-QuotePage.webp',
            longDesc: `A Yahoo Finance-inspired platform for US stock market analysis.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Subscription plans with tiered access.</li>
          <li>Quote pages with detailed stock data.</li>
          <li>Fundamental data and custom charts.</li>
          <li>TradingView integration.</li>
          <li>Market movers: top gainers, losers, most active.</li>
        </ol>`,
            images: [
                'portfolio_images/7. Ryan-QuotePage.webp',
                'portfolio_images/7. Ryan-Screener.webp',
                'portfolio_images/7. Ryan-Home.webp',
                'portfolio_images/7. Ryan-Pricing.webp'
            ]
        },
        'wordpress-discord-alerts': {
            title: 'WordPress + Discord Stock Alerts',
            desc: 'Added insider transactions, upgrades, downgrades, and filters to a WordPress site. Auto-sends alerts to Discord channels.',
            image: 'portfolio_images/8. H-Insider Transactions.webp',
            longDesc: `Added functionality to an existing WordPress site to generate and push stock alerts.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Insider trading data, upgrades, and downgrades.</li>
          <li>Custom filters for alert conditions.</li>
          <li>Shortcodes for easy WordPress integration.</li>
          <li>Automatic alert delivery to Discord channels.</li>
        </ol>`,
            images: [
                'portfolio_images/8. H-Insider Transactions.webp',
                'portfolio_images/8. H-Upgrades-Downgrades.webp',
                'portfolio_images/8. H-Alerts.webp'
            ]
        },
        'finviz-crypto-screener': {
            title: 'Finviz-Style Crypto Screener + Discord Alerts',
            desc: 'Crypto screener with scanner, quote page, charts, coin comparison, scoring, and automated Discord community alerts.',
            image: 'portfolio_images/10. A-Coin-Overview.webp',
            longDesc: `A full crypto screening platform with community alert features.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Coin scanner with custom filters.</li>
          <li>Detailed quote page per coin.</li>
          <li>Custom charts and coin comparison tool.</li>
          <li>Coin scoring system.</li>
          <li>Automated Discord alerts based on conditions.</li>
        </ol>`,
            images: [
                'portfolio_images/10. A-Coin-Overview.webp',
                'portfolio_images/10. A-Screener.webp',
                'portfolio_images/10. A-Coin-Profile.webp',
                'portfolio_images/10. A-Coin-Twitter.webp'
            ]
        },
        'finviz-stock-screener-discord': {
            title: 'Finviz-Style Stock Screener + Discord Alerts',
            desc: 'Full stock screener with scanner, quote page, comparison tool, scoring system, and Discord community alerts.',
            image: 'portfolio_images/11. TL - InsiderBot.webp',
            longDesc: `Another Finviz-inspired screener built for a client with an active Discord community.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Stock scanner with filter controls.</li>
          <li>Quote page with full stock details.</li>
          <li>Stock comparison feature.</li>
          <li>Custom scoring and ranking system.</li>
          <li>Automated Discord alert integration.</li>
        </ol>`,
            images: [
                'portfolio_images/11. TL - InsiderBot.webp',
                'portfolio_images/11. TLI - Screener.webp',
                'portfolio_images/11. TL - SocialMediaBot.webp',
                'portfolio_images/11. TL - VolumeMonitorBot.webp',
                'portfolio_images/11. TLI - Comparasion.webp',
                'portfolio_images/11. TLI - Quote.webp'
            ]
        },
        'social-media-stock-sentiment': {
            title: 'Social Media Stock Sentiment Tool',
            desc: 'Pulls trending stock posts from Twitter, StockTwits, and Reddit, runs sentiment analysis, and shows results per ticker.',
            image: 'portfolio_images/12. F - Quote Page.webp',
            longDesc: `A social media and sentiment platform for stock traders.
        <br/><br/>Key features:
        <ol style="padding-left:16px;list-style:decimal">
          <li>Twitter, StockTwits, and Reddit integration.</li>
          <li>Finviz API for news data.</li>
          <li>Machine learning sentiment analysis model.</li>
          <li>Sentiment bar chart on each ticker's quote page.</li>
          <li>Subscription system for alerts and updates.</li>
        </ol>`,
            images: [
                'portfolio_images/12. F - Quote Page.webp',
                'portfolio_images/12. F - Social Trending Stocks.webp',
                'portfolio_images/12. F - Home.webp',
                'portfolio_images/12. F - News.webp',
                'portfolio_images/12. F - Social Media Posts.webp',
                'portfolio_images/12. F - Screener.webp'
            ]
        }
    };

    /* ---- Render portfolio cards ---- */
    function buildPortfolio() {
        if (!portfolioGrid) return;
        let html = '';
        for (const [id, p] of Object.entries(projects)) {
            const isLink = !!p.link;
            html += `<article class="portfolio-card fade-up" role="article">
            <img loading="lazy" src="${p.image}" alt="${p.title}" width="400" height="190" />
            <div class="portfolio-card-body">
            <h3 class="portfolio-card-title">${p.title}</h3>
            <p class="portfolio-card-desc">${p.desc}</p>
            ${isLink
                    ? `<a href="${p.link}" target="_blank" rel="${p.link.includes('meyka.com') ? 'noopener' : 'noopener noreferrer nofollow'}" class="portfolio-card-link">View Live →</a>`
                    : `<button class="portfolio-card-link open-popup-btn" data-id="${id}">View Details →</button>`
                }
            </div>
            </article>`;
        }
        portfolioGrid.innerHTML = html;

        // Wire up fade-up after cards are added
        if ('IntersectionObserver' in window) {
            const newFades = portfolioGrid.querySelectorAll('.fade-up');
            const io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            newFades.forEach(function (el) { io.observe(el); });
        } else {
            portfolioGrid.querySelectorAll('.fade-up').forEach(function (el) {
                el.classList.add('visible');
            });
        }
    }

    /* ---- Open popup ---- */
    function openPopup(id) {
        const p = projects[id];
        if (!p || p.link) return;

        let imagesHtml = '';
        if (p.images && p.images.length) {
            imagesHtml = `<div class="popup-images-grid">
        ${p.images.map(img => `<a href="${img}" target="_blank" rel="noopener"><img loading="lazy" src="${img}" alt="${p.title}" /></a>`).join('')}
      </div>`;
        }

        popupDetails.innerHTML = `
      <h2>${p.title}</h2>
      <p style="margin-bottom:16px">${p.longDesc || p.desc}</p>
      ${imagesHtml}
    `;

        popupOverlay.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        closePopupBtn.focus();
    }

    /* ---- Close popup ---- */
    function closePopup() {
        popupOverlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }

    if (closePopupBtn) closePopupBtn.addEventListener('click', closePopup);

    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) closePopup();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popupOverlay && !popupOverlay.hasAttribute('hidden')) {
            closePopup();
        }
    });

    // Event delegation for popup buttons
    if (portfolioGrid) {
        portfolioGrid.addEventListener('click', function (e) {
            const btn = e.target.closest('.open-popup-btn');
            if (btn) openPopup(btn.getAttribute('data-id'));
        });
    }

    buildPortfolio();
});