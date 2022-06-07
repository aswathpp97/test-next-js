import { useTranslation } from "next-i18next";
import nextI18nextConfig from "next-i18next.config";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const Alerts = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      {t("hi")} from Alerts
      {JSON.stringify(router.query)}
    </div>
  );
};

export default Alerts;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, undefined, nextI18nextConfig)),
    },
  };
}
