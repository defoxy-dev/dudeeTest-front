import { useEffect, useState } from "react";
import Card from "../components/card";
import instance from "../utils/axios";

function Home() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const res = await instance.get("/wdata");
      const { data } = res;
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.log("loginError", error);
    }
  }, []);
  return (
    <div>
      <div className="container">
        <main>
          <div className="row" style={{ marginTop: "20px" }}>
            {data.map(function (data) {
              return <Card key={data.id} data={data} />;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
