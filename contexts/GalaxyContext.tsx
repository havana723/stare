import React, { useContext, useState } from "react";
import { StarAttr } from "../types/Star";

interface GalaxyContextType {
  database: StarAttr[];
  database2: StarAttr[];
  hoverStar: StarAttr | null;
  setHoverStar: (hoverStar: StarAttr | null) => void;
}

export const GalaxyContext = React.createContext<GalaxyContextType>({
  database: [],
  database2: [],
  hoverStar: null,
  setHoverStar: () => {
    /* to be filled */
  },
});

export const GalaxyContextProvider: React.FC<{
  database: StarAttr[];
  database2: StarAttr[];
  children: React.ReactNode;
}> = (props) => {
  const [hoverStar, setHoverStar] = useState<StarAttr | null>(null);

  return (
    <GalaxyContext.Provider
      value={{
        database: props.database,
        database2: props.database2,
        hoverStar: hoverStar,
        setHoverStar: setHoverStar,
      }}
    >
      {props.children}
    </GalaxyContext.Provider>
  );
};

export const useGalaxyContext = () => useContext(GalaxyContext);
