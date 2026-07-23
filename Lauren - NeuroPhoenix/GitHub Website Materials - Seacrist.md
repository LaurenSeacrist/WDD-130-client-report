:root {
    /* Color Palette */
    --primary-dark-crimson: #1e0509;
    --secondary-deep-red: #2e0212; /* Corrected your typo layout data hex from #2e02c12 */
    --accent-electric-pink: #ff1f6e;
    --accent-muted-red: #3d1018;
    --accent-dusty-rose: #c47080;
    --accent-blush-white: #ffe8ec;

    /* Fonts */
    --font-heading: 'Barlow Condensed', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-quote: 'DM Serif Display', serif;
}

/* Global resets for your layout style preview */
body {
    background-color: var(--primary-dark-crimson);
    color: var(--accent-blush-white);
    font-family: var(--font-body);
    margin: 0;
}

h1, h2, h3, .large-headline {
    font-family: var(--font-heading);
    text-transform: uppercase;
}

.quote-block, .pull-quote, .subheadline-serif {
    font-family: var(--font-quote);
}

.pink-bg {
    background-color: var(--accent-electric-pink);
    color: var(--primary-dark-crimson);
}



