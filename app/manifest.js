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
            }
        ]
    }
};