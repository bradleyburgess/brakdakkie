import { useState, useLayoutEffect } from "react";
import theme from "../styles/theme";

export default function useDeviceType(): "mobile" | "desktop" {
  const [deviceType, setDeviceType] = useState<DeviceType>();
  useLayoutEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(
        window.innerWidth < theme.breakpoints.mobile ? "mobile" : "desktop"
      );
    };
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);
  return deviceType;
}

export type DeviceType = "desktop" | "mobile" | undefined;
