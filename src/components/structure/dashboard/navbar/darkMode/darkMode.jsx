import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import useApp from "../../../../../appContext/useApp";

export default function DarkModeSwitch() {
    const {darkMode,setDarkMode} = useApp();
    
  return (
    <Switch
      defaultSelected
      size="sm"
      color="secondary"
      value={darkMode}
        onChange={() => setDarkMode(darkMode === "" ? "dark" : "")}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >

    </Switch>
  );
}