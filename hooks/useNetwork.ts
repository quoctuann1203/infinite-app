import { useEffect, useState } from "react";
import * as Network from "expo-network";

export const useNetwork = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const checkNetwork = async () => {
      const { isConnected } = await Network.getNetworkStateAsync();
      setIsConnected(isConnected ?? null);
    };

    checkNetwork();
  }, []);

  return { isConnected };
};
