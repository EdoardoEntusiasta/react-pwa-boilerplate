import { i18n } from '@lingui/core';
import { en, it } from 'make-plural/plurals';
import { LOCAL_STORAGE_KEYS } from './constants';
import LocalStorageManager from '@utils/LocalStorageManager';

export type LocaleType = keyof typeof localeNames;

export const locales = {
  en: 'English',
  it: 'Italian',
};

export const localeNames = {
  en: 'en',
  it: 'it',
};

export const defaultLocale = 'it';

i18n.loadLocaleData({
  [defaultLocale]: { plurals: it },
  en: { plurals: en },
});

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: LocaleType, needToSetToLocalStorage: boolean = true) {
  const { messages } = await import(`/src/locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
  document.documentElement.lang = locale;

  if (needToSetToLocalStorage) {
    LocalStorageManager.setItem(LOCAL_STORAGE_KEYS.LOCALE, locale);
  }
}
