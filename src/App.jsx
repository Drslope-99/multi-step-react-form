import { useState } from "react";
import Layout from "./components/Layout/Layout";
import SideBar from "./components/SideBar/SideBar";
import MenuItem from "./components/MenuItem/MenuItem";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import NextButton from "./components/Buttons/NextButton";
import BackButton from "./components/Buttons/BackButton";
import ConfirmButton from "./components/Buttons/ConfirmButton";
import PersonalInfo from "./components/TabComponents/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/TabComponents/SelectPlan/SelectPlan";
import PickAddons from "./components/TabComponents/PickAddons/PickAddons";
import FinishingUp from "./components/TabComponents/FinishingUp/FinishingUp";
import ThankYou from "./components/TabComponents/ThankYou/ThankYou";
import "./App.css";

function App() {
  const menuDetails = [
    { step: "step1", info: "your info" },
    { step: "step2", info: "select plan" },
    { step: "step3", info: "add-ons" },
    { step: "step4", info: "summary" },
  ];

  const [selected, setSelected] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [toggle, setToggle] = useState(false);

  const selectMenu = (tab) => {
    setSelected(tab);
    setConfirm(false);
  };

  const prevBtnHandler = () => {
    setConfirm(false);
    if (selected < 1) {
      return;
    }
    setSelected(selected - 1);
  };

  const nextBtnHandler = () => {
    setConfirm(false);
    if (selected > menuDetails.length - 1) {
      return;
    }
    setSelected(selected + 1);
  };

  const onToggleHandler = () => {
    setToggle((prev) => !prev);
  };

  let tabElement;
  if (selected === 0) {
    tabElement = <PersonalInfo />;
  } else if (selected === 1) {
    tabElement = <SelectPlan togglePlan={toggle} click={onToggleHandler} />;
  } else if (selected === 2) {
    tabElement = <PickAddons />;
  } else if (selected === 3) {
    tabElement = <FinishingUp clicked={() => selectMenu(1)} />;
  } else {
    tabElement = null;
  }

  return (
    <div className="app">
      <Layout>
        <SideBar>
          {menuDetails.map((d, i) => (
            <MenuItem
              className={`menu__btn ${selected === i ? "active" : null}`}
              key={i}
              index={`${i + 1}`}
              step={d.step}
              info={d.info}
              clicked={() => selectMenu(i)}
            />
          ))}
        </SideBar>
        <MainContent>{confirm ? <ThankYou /> : tabElement}</MainContent>
        {confirm ? null : (
          <Footer>
            {selected > 0 ? <BackButton clicked={prevBtnHandler} /> : null}

            {selected === menuDetails.length - 1 ? (
              <ConfirmButton confirm={() => setConfirm(true)} />
            ) : (
              <NextButton clicked={nextBtnHandler} />
            )}
          </Footer>
        )}
      </Layout>
    </div>
  );
}

export default App;
