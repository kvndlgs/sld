import { FormData } from '@/app/components/Forms/Contact';
import { QuoteData } from '@/app/components/Forms/Quote';

export function sendEmail(data: FormData) {
    const apiEndpoint = '/api/mail';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }


  export function sendQuote(data: QuoteData) {
    const apiEndpoint = 'api/quote';

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    }) 
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
  }