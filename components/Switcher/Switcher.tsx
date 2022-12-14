/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

type LOCALES = "en" | "sr" | "es" | "fr" | "pseudo";

export function Switcher() {
  const router = useRouter();
  const [locale, setLocale] = useState<LOCALES>(
    router.locale!.split("-")[0] as LOCALES
  );

  const languages: { [key: string]: string } = {
    en: `English`,
    sr: `Serbian`,
    es: `Spanish`,
    fr: `French`,
  };

  // enable 'pseudo' locale only for development environment
  // if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
  //   languages['pseudo'] = t`Pseudo`
  // }

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale });
  }, [locale, router.pathname]);

  return (
    <select
      value={locale}
      onChange={(evt) => setLocale(evt.target.value as LOCALES)}
    >
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {languages[locale as unknown as LOCALES]}
          </option>
        );
      })}
    </select>
  );
}
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { t } from '@lingui/macro'

// type LOCALES = 'en' | 'sr' | 'es' | 'pseudo'

// export function Switcher() {
//   const router = useRouter()
//   const [locale, setLocale] = useState<LOCALES>(router.locale!.split('-')[0] as LOCALES)

//   const languages: { [key: string]: string } = {
//     en: t`English`,
//     sr: t`Serbian`,
//     es: t`Spanish`,
//   }

//   // disabled for DEMO - so we can demonstrate the 'pseudo' locale functionality
//   if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
//     languages['pseudo'] = t`Pseudo`
//   }

//   function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
//     const locale = event.target.value as LOCALES

//     setLocale(locale)
//     router.push(router.pathname, router.pathname, { locale })
//   }

//   return (
//     <select value={locale} onChange={handleChange}>
//       {Object.keys(languages).map((locale) => {
//         return (
//           <option value={locale} key={locale}>
//             {languages[locale as unknown as LOCALES]}
//           </option>
//         )
//       })}
//     </select>
//   )
// }
