import { useRouter } from "next/router";

const SensorInfo = () => {
  const router = useRouter();

  return (
    <div>
      hi from Sensor Info
      {JSON.stringify(router.query)}
    </div>
  );
};

export default SensorInfo;
