import type { NextPage } from "next";
import type { GetStaticProps } from "next";

import { t } from "@lingui/macro";
import { loadTranslation } from "../utils";
import { Switcher } from "../components/Switcher/Switcher";
export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      translation,
    },
  };
};
const Home: NextPage = () => {
  return (
    <>
      <div>{t`Hello world`}</div>
      <Switcher />
    </>
  );
};

export default Home;
