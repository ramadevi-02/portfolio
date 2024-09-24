import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `https://us22.api.mailchimp.com/3.0/lists/<your-list-id>/members?u=<your-user-id>&id=<your-audience-id>`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  );
}
