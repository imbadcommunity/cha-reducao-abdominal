"use client";

import IPhoneArt from "./IPhoneArt";
import IPadArt from "./IPadArt";
import WatchArt from "./WatchArt";
import MacBookArt from "./MacBookArt";
import AirPodsArt from "./AirPodsArt";
import type { DeviceKey } from "@/lib/data";

interface DeviceArtProps {
  className?: string;
}

export default function DeviceArt({
  device,
  className = "",
}: DeviceArtProps & { device: DeviceKey }) {
  const map: Record<DeviceKey, (props: DeviceArtProps) => React.ReactElement> = {
    iphone: IPhoneArt,
    ipad: IPadArt,
    watch: WatchArt,
    macbook: MacBookArt,
    airpods: AirPodsArt,
  };

  const Component = map[device];
  return <Component className={className} />;
}
