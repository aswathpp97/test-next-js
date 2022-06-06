import { useTranslation } from "next-i18next";
import nextI18nextConfig from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const Building = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      {t("hi")} from Building
      {JSON.stringify(router.query)}
    </div>
  );
};

export default Building;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, undefined, nextI18nextConfig)),
    },
  };
}
