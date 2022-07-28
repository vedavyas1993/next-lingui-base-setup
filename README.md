<!-- I18N Language translation steps START-->

<!-- SAMPLE CODE IS IN COMMENTS -->

1. ADD language locale code to `locales` array in `i18n` object in `next.config.js` file in root folder.
   <!-- module.exports = {
     i18n: {
       locales: ['en', 'sr', 'es', `fr`,`<Add language locale code here> `, 'pseudo'],
       defaultLocale: 'en',
     },
   } -->
2. ADD language locale code to `locales` array in `lingui.config.js` file in root folder.
   <!-- module.exports = {
     locales: ['en', 'sr', 'es', `fr`,`<Add language locale code here>`,'pseudo'],
     pseudoLocale: 'pseudo',
     sourceLocale: 'en',
     fallbackLocales: {
       default: 'en',
     },
     catalogs: [
       {
         path: 'src/translations/locales/{locale}/messages',
         include: ['src/pages', 'src/components'],
       },
     ],
     format: 'po',
   } -->

3) To add Plurals in add language locale code to `initTranslation` in `src/utils.js`.
<!--
export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    sr: { plurals: sr },
    es: { plurals: es },
    <Add language locale code here>: { plurals: `<Add language locale code here>` },
    pseudo: { plurals: en },
  })
}
 -->

3. Repeat the above steps for all the required languages.

<!-- ADDING TRANSLATION TO PAGES -->

4. Import `GetStaticProps`,`t`,`loadTranslation` as shown in the below example.
<!--
import type { GetStaticProps } from 'next'
import { t, Trans } from '@lingui/macro'
import { loadTranslation } from '../utils'
 -->

5. Export `GetStaticProps` before component declaration.
 <!--
 export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!, process.env.NODE_ENV === 'production')
  return {
    props: {
      translation,
    },
  }
} 
 -->

6. a)Where `Trans` tag can be used, wrap the text in the `Trans` tag
   <!-- <Trans>Hello World!</Trans> -->

   b)Where `Trans` tag can not be be used, use back-ticks (``) literal template syntax with "t" following the text.
      <!-- {t`Hello World!`} -->

7. Run the command `yarn extract`, to get `src/translations/{language}/messages.po`, this file is used by NEXT.JS in development mode.
8. Run the command `yarn compile`, to get `src/translations/{language}/messages.js`, this file is used by NEXT.JS in production mode.

9. In messages.po file there will be a list of message id's `msgid` and message string's `msgstr`.
Complete the message strings with the respective language translated strings.
<!--
#: src/pages/allRaces.tsx:44
msgid "All Races"
msgstr "Toutes les courses" -->

10. After completing the above steps check for steps 7,9 to see if any translations are missing.

<!-- I18N Language translation steps END-->
