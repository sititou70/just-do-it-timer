import React, {useEffect} from "react";

import SettingsIcon from 'ui/icons/baseline_settings_white_48dp.png';
import SimpleButtonDialog from "./SimpleButtonDialog";
import Setting from "./Setting";
import CircleProgress from "./CircleProgress";
import RemainingTimeMessage from "./RemainingTimeMessage";
import RandomMaxim, {nextMaxims} from "./RandomMaxim";

import bindActionCreator from "ui/bindActionCreator";
import * as types from "infrastructure/types";

const App = () => {
  useEffect(() => {
    setInterval(() => bindActionCreator(types.SET_CURRENT, {date: new Date()}), 123);
    setInterval(() => nextMaxims(), 15000);
  });

  return (
    <div>
      <CircleProgress />
      <div
        className="message_box"
      >
        <RemainingTimeMessage />
        <RandomMaxim />
      </div>
      <div
        className="setting_dialog"
      >
        <SimpleButtonDialog
          title="設定"
          button_content={
            <img
              src={SettingsIcon}
              alt="setting icon"
            />
          }
        >
          <Setting />
        </SimpleButtonDialog>
      </div>
    </div>
  );
};

export default App;

