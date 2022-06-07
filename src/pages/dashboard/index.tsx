import { useRouter } from "next/router";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "next-i18next.config";
import { useTranslation } from "next-i18next";

const Dashboard = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    router.replace("/dashboard/1");
  }, [router]);

  return (
    <div>
      {t("hi")} from Dashboard
      {JSON.stringify(router.query)}
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, undefined, nextI18nextConfig)),
    },
  };
}
