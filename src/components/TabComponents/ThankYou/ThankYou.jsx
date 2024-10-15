import "./ThankYou.css";
import thanksIcon from "../../../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="thanks">
      <div className="thanks__svg">
        <img src={thanksIcon} alt="thank you icon" />
      </div>
      <h3 className="thanks__header">Thank you!</h3>
      <p className="thanks__remarks">
        Thank you! Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to email
        us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
