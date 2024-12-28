import { useState } from "react";
import "./PickAddons.css";
const PickAddons = () => {
  const [selected, setSelected] = useState({
    service: false,
    storage: false,
    profile: false,
  });

  function toggleAddons(e, select) {
    setSelected((prev) => ({ ...prev, [e.target.name]: !select }));
  }

  console.log(selected);

  return (
    <div className="addons">
      <h1 className="addons__heading">Pick add-ons</h1>
      <p className="addons__description">
        Add-ons help enhance your gaming experience.
      </p>

      <form action="" className="addons__form">
        <label htmlFor="service" className={selected.service ? "active" : ""}>
          <input
            type="checkbox"
            id="service"
            name="service"
            value={selected.service}
            onChange={(e) => toggleAddons(e, selected.service)}
            checked={selected.service}
          />
          <div className="addons__details">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className="addons__amount">+$1/mo</p>
        </label>
        <label htmlFor="storage" className={selected.storage ? "active" : ""}>
          <input
            type="checkbox"
            id="storage"
            name="storage"
            value={selected.storage}
            onChange={(e) => toggleAddons(e, selected.storage)}
            checked={selected.storage}
          />
          <div className="addons__details">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className="addons__amount">+$2/mo</p>
        </label>

        <label htmlFor="profile" className={selected.profile ? "active" : ""}>
          <input
            type="checkbox"
            id="profile"
            name="profile"
            value={selected.profile}
            onChange={(e) => toggleAddons(e, selected.profile)}
            checked={selected.profile}
          />
          <div className="addons__details">
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className="addons__amount">+$2/mo</p>
        </label>
      </form>
    </div>
  );
};

export default PickAddons;
