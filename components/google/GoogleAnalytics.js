import Script from "next/script"



const GoogleAnalytics = () => {
    return (
      <>
        <Script
          src={`src="https://www.googletagmanager.com/gtag/js?id=G-LN7CCNMJDJ"`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-LN7CCNMJDJ');
          `}
        </Script>
      </>
    );
  };
  
  export default GoogleAnalytics;