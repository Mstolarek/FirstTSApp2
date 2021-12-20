import React, {createContext, FC, useContext, useEffect, useState} from 'react';

export const SearchContextProvider: FC = ({children}) => {
  const [searchInput, setSearchInput] = useState<string>('');
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <searchContext.Provider
      value={{input: searchInput, setInput: setSearchInput}}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(searchContext);
  return context;
};

export const searchValue = {input: '', setInput: () => {}};
export const searchContext = createContext<SearchContextType>(searchValue);

export type SearchContextType = {input: string; setInput(v: string): void};
