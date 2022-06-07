import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/1");
  }, [router]);

  return (
    <div>
      hi from Dashboard
      {JSON.stringify(router.query)}
    </div>
  );
};

export default Dashboard;
