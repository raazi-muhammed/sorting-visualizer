import { changeDelay, changeSize } from "../../app/features/configSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IoClose } from "react-icons/io5";
import CustomNumbers from "./CustomNumbers";
import "./_settingsPanel.scss";

type SettingsPanel = {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsPanel = ({ setShowSettings }: SettingsPanel) => {
  const config = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setShowSettings(false);
  };

  return (
    <aside className="aside-panel">
      <button
        onClick={handleClose}
        className="btn btn--accent btn--icon aside-panel--close"
      >
        <IoClose size="1.4em" />
      </button>
      <h3 className="aside-panel--heading">Settings</h3>
      <section>
        <label className="input--label" htmlFor="delay">
          Delay:
        </label>
        <input
          min={0}
          max={1000}
          step={10}
          className="input--box"
          id="delay"
          value={config?.delay}
          onChange={(e) => dispatch(changeDelay(Number(e.target.value)))}
          type="number"
        />
        <br />
        <input
          min={0}
          max={1000}
          step={10}
          value={config?.delay}
          onChange={(e) => dispatch(changeDelay(Number(e.target.value)))}
          type="range"
          className="slider"
        />
      </section>
      <section>
        <label className="input--label" htmlFor="size">
          Size:
        </label>
        <input
          id="size"
          className="input--box"
          min={5}
          step={10}
          max={100}
          value={config?.size}
          onChange={(e) => dispatch(changeSize(Number(e.target.value)))}
          type="number"
        />
        <br />
        <input
          min={5}
          max={100}
          step={10}
          value={config?.size}
          onChange={(e) => dispatch(changeSize(Number(e.target.value)))}
          type="range"
          className="slider"
        />
      </section>
      <h3 className="aside-panel--heading">Custom Array</h3>
      <CustomNumbers />
      <p className="sub-text">Change device theme to change theme</p>
    </aside>
  );
};

export default SettingsPanel;
