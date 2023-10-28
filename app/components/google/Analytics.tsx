import Script from 'next/script'

export default function Analytics() {
    return (
              <>
                <Script async
                  src="https://www.googletagmanager.com/gtag/js?id=G-LN7CCNMJDJ" />
                <Script id="google-analytics" strategy="afterInteractive">
                  {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
          
                   gtag('config', 'G-LN7CCNMJDJ');
                    `}
                </Script>
              </>
    )
}