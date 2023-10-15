export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        allow: '/services'
        allow: '/services/signalisaiton',
        allow: '/about',
        allow: '/job',
        allow: '/contact'
      },
      sitemap: 'https://shieldsignalisation.com/sitemap.xml',
    }
  }