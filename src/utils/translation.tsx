import React, { createContext, ReactNode, useContext, useState } from "react";

import LocalizedStrings from "react-native-localization";
import { MMKV } from "react-native-mmkv";

import { Localization } from "src/assets";

const DEFAULT_LANGUAGE = "en";
const APP_LANGUAGE = "AppLanguage";
const languages = { id: Localization.id, en: Localization.en };
const translations = new LocalizedStrings(languages);

interface LocalizationContextType {
  translations: any;
  appLanguage?: string;
  setAppLanguage?: (language: string) => void;
  initializeAppLanguage?: () => void;
}

type LocalizationProviderProps = {
  children: ReactNode;
};

const defaultLocalizationContext: LocalizationContextType = {
  translations,
  appLanguage: "",
  setAppLanguage: () => {},
  initializeAppLanguage: () => {},
};

export const LocalizationContext = createContext<LocalizationContextType>(defaultLocalizationContext);

export function LocalizationProvider({ children }: LocalizationProviderProps) {
  const storage = new MMKV();

  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const handleSetLanguage = (language: string) => {
    translations.setLanguage(language);
    setAppLanguage(language);
    storage.set(APP_LANGUAGE, language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await storage.getString(APP_LANGUAGE);

    if (currentLanguage) {
      handleSetLanguage(currentLanguage);
    } else {
      const localeCode = DEFAULT_LANGUAGE;

      handleSetLanguage(localeCode);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        appLanguage,
        setAppLanguage: handleSetLanguage,
        initializeAppLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
}

export const useTranslation = () => useContext(LocalizationContext);
