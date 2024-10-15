import PropTypes from "prop-types";
import { useState } from "react";
import "./SelectPlan.css";
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";

const SelectPlan = (props) => {
  const [plan, setPlan] = useState("arcade");
  let toggle = props.togglePlan;

  const handleChange = (e) => {
    setPlan(e.target.value);
  };

  const calcPlan = () => {
    return toggle ? 10 : 1;
  };

  const setDuration = () => {
    return toggle ? "yr" : "mo";
  };

  return (
    <div className="plan">
      <h1 className="plan__heading">Select your plan</h1>
      <p className="plan__description">
        You have the option of monthly or yearly billing.
      </p>
      <form action="" className="plan__form">
        <div className="plan__billing">
          {/* label fo the arcade plan */}
          <label
            htmlFor="arcade"
            className={plan === "arcade" ? "active" : null}
          >
            <img src={arcade} alt="" className="plan__image" />
            <input
              type="radio"
              name="category"
              id="arcade"
              value="arcade"
              className="plan__input"
              onChange={handleChange}
              checked={plan === "arcade"}
            />

            <div className="plan__details">
              <h3 className="plan__category">arcade</h3>
              <p className="plan__sub">
                ${9 * calcPlan()}/{setDuration()}
              </p>
              {toggle && <p className="plan__bonus">2 months free</p>}
            </div>
          </label>

          {/* label for the advanced plan */}
          <label
            htmlFor="advanced"
            className={plan === "advanced" ? "active" : null}
          >
            <img src={advanced} alt="" className="plan__image" />
            <input
              type="radio"
              name="category"
              id="advanced"
              value="advanced"
              className="plan__input"
              onChange={handleChange}
              checked={plan === "advanced"}
            />

            <div className="plan__details">
              <h3 className="plan__category">advanced</h3>
              <p className="plan__sub">
                ${12 * calcPlan()}/{setDuration()}
              </p>
              {toggle && <p className="plan__bonus">2 months free</p>}
            </div>
          </label>

          <label htmlFor="pro" className={plan === "pro" ? "active" : null}>
            <img src={pro} alt="" className="plan__image" />
            <input
              type="radio"
              name="category"
              id="pro"
              value="pro"
              className="plan__input"
              onChange={handleChange}
              checked={plan === "pro"}
            />

            <div className="plan__details">
              <h3 className="plan__category">pro</h3>
              <p className="plan__sub">
                ${15 * calcPlan()}/{setDuration()}
              </p>
              {toggle && <p className="plan__bonus">2 months free</p>}
            </div>
          </label>
        </div>

        <div className="plan__toggle">
          <p className={`plan__toggle-duration ${!toggle ? "active" : null}`}>
            monthly
          </p>
          <label htmlFor="toggle-plan" className="plan__toggle-btn">
            <input
              type="checkbox"
              name="toggle-plan"
              id="toggle-plan"
              onChange={props.click}
              checked={toggle}
            />
            <span></span>
          </label>
          <p className={`plan__toggle-duration ${toggle ? "active" : null}`}>
            yearly
          </p>
        </div>
      </form>
    </div>
  );
};

SelectPlan.propTypes = {
  togglePlan: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default SelectPlan;
