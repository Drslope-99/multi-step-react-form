import PropTypes from "prop-types";
import "./FinishingUp.css";
const FinishingUp = ({ clicked }) => {
  return (
    <div className="summary">
      <h1 className="summary__header">Finishing up</h1>
      <p className="summary__desc">
        Double-check everything looks Ok before confirming.
      </p>

      <section className="summary__section">
        <div className="summary__items">
          <div>
            <p className="item__name first">Arcade(monthly)</p>
            <a
              href="#"
              className="item__change"
              onClick={(e) => {
                e.preventDefault();
                clicked();
              }}
            >
              Change
            </a>
          </div>

          <p className="item__price first">$9/mo</p>
        </div>

        <div className="summary__items">
          <p className="item__name">Online service</p>
          <p className="item__price">+$1/mo</p>
        </div>

        <div className="summary__items">
          <p className="item__name">Larger storage</p>
          <p className="item__price">+$2/mo</p>
        </div>
      </section>
      <div className="summary__total">
        <p>Total(per month)</p>
        <p className="summary__price">+$12/mo</p>
      </div>
    </div>
  );
};

FinishingUp.propTypes = {
  clicked: PropTypes.func,
};

export default FinishingUp;
