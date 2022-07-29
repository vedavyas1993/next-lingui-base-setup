import { I18n } from "@lingui/core";
import { en, es, sr, fr } from "make-plural/plurals";
export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    sr: { plurals: sr },
    es: { plurals: es },
    fr: { plurals: fr },
    pseudo: { plurals: en },
  });
}

export async function loadTranslation(locale: string, isProduction: boolean) {
  let data;
  if (isProduction) {
    data = await import(`./translations/locales/${locale}/messages`);
  } else {
    data = await import(
      `@lingui/loader!./translations/locales/${locale}/messages.po`
    );
  }
  return data.messages;
}
