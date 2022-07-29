import type { NextPage } from "next";
import type { GetStaticProps } from "next";

import { t } from "@lingui/macro";
import { loadTranslation } from "../utils";
import { Switcher } from "../components/Switcher/Switcher";
import Test from "../components/Test";
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
      <div>From Page: {t`Hello world`}</div>
      <Test />
      <Switcher />
    </>
  );
};

export default Home;
