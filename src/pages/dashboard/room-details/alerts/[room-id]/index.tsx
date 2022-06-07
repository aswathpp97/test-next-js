import { useRouter } from "next/router";

const Alerts = () => {
  const router = useRouter();

  return (
    <div>
      hi from Alerts
      {JSON.stringify(router.query)}
    </div>
  );
};

export default Alerts;
