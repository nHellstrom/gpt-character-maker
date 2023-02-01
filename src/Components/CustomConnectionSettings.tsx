import React from "react";
import "./CustomConnectionSettings.css";

interface IApiSettings {
  useCustom: boolean;
}

const CustomConnectionSettings = (props: IApiSettings) => {
  const ConnectionSettingsVisibility = props.useCustom
    ? "ConnectionSettings--visible"
    : "ConnectionSettings--hidden";

  return (
    <div className={ConnectionSettingsVisibility}>
      <section className="ConnectionSettings">
        
      </section>
    </div>
  );
};

export default CustomConnectionSettings;
