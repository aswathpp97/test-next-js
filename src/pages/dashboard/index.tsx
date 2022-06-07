import { useRouter } from "next/router";

const Building = () => {
  const router = useRouter();

  return (
    <div>
      hi from Building
      {JSON.stringify(router.query)}
    </div>
  );
};

export default Building;
