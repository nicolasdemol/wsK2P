import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Grow } from "@material-ui/core";

export default function Sensor({ children }) {
  const [active, setActive] = useState(false);

  const onChange = (isVisible) => {
    if (isVisible) {
      setActive(true);
    }
  };
  return (
    <VisibilitySensor onChange={onChange}>
      <Grow in={active}>{children}</Grow>
    </VisibilitySensor>
  );
}
