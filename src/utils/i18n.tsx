import { i18n } from '@lingui/core';
import { en, it } from 'make-plural/plurals'

export const locales = {
  en: "English",
  it: "Italian"
};

export const defaultLocale = "en-US";

i18n.loadLocaleData({
  en: { plurals: en },
  it: { plurals: it }
})

/**
* We do a dynamic import of just the catalog that we need
* @param locale any locale string
*/
export async function dynamicActivate(locale: string) {
  const { messages } = await import(`/src/locales/${locale}/messages`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}