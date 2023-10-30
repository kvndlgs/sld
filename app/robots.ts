import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [ '/' , '/about' , '/services' , '/services/signalisation' , '/job' , '/contact' ],
            disallow: '/private',
        },
        sitemap: 'https://shieldsignalisation.com/sitemap.xml',
    }
}