import React, {useState} from "react";
import SettingsIcon from 'ui/icons/baseline-settings-20px.svg';
import SimpleButtonDialog from "./SimpleButtonDialog";
import Setting from "./Setting";

const App = () => {

  return (
    <div>
      <div
        className="setting_dialog"
      >
        <SimpleButtonDialog
          title="設定"
          button_content={<img src={SettingsIcon} />}
        >
          <Setting />
        </SimpleButtonDialog>
      </div>
    </div>
  );
};

export default App;

