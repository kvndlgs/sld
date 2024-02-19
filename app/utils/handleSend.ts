import { FormData } from "@/app/components/Forms/Contact";
import { JobData } from "@/app/components/Forms/Job";
import { QuoteData } from "@/app/components/Forms/Quote";

export function sendJob(data: JobData) {
  const apiEndpoint = "/api/job";
}

export function sendQuote(data: QuoteData) {
  const apiEndpoint = "/api/quote";
}

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err.message);
    });
}
