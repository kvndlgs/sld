
import Script from 'next/script';


export default function CustomerChat(){
  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script strategy='lazyOnload' id="customer-chat">
        {`var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "118775154651491");
        chatbox.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v18.0'
          });
        };
        (function(d, s, id) {
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;
           js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
           fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
         `}
      </Script>
    </div>
  )
}