import { createContext, FC, ReactNode, useContext } from 'react';
import { PerksData } from '../../business/types';
import perksData from '../../data.json';

const data: PerksData = perksData;

const perksContext = createContext<PerksData>(data);

export const PerksProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <perksContext.Provider value={data}>{children}</perksContext.Provider>
);

export const usePerks = () => useContext(perksContext);
