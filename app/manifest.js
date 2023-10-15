export default function manifest() {
    return {
        name: 'Shield signalisation Inc',
        short_name: 'Shield signalisation',
        description: 'Entreprise de signalisation routière. Nous sommes situés à Saint-Jérôme et nous offrons nos services partout au Québec.',
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            },
            {
                src: '/images/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/images/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png'
            },
            {
                src: '/images/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/images/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/images/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/images/safari-pinned-tab.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/images/mstile-150x150.png',
                sizes: '150x150',
                type: 'image/png',
            },
        ]
    }
};