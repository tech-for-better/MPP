import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { auth, db } from "../connection";

const Chart = () => {
  const [mindProgressData, setMindProgressData] = React.useState();
  const [bodyProgressData, setBodyProgressData] = React.useState();

  const data = [
    {
      name: "Mind",
      Mind: mindProgressData,
    },
    { name: "Body", Body: bodyProgressData },
  ];

  React.useEffect(() => {
    const username: any = auth().currentUser?.displayName;
    console.log(username)
    let userInfo = db.collection("users").doc(username);
    userInfo.get().then(function (doc: any) {
      if (doc.exists) {
        console.log("Document data:", doc.data().mindprogress);
        setMindProgressData(doc.data().mindprogress);
        setBodyProgressData(doc.data().bodyprogress);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <ResponsiveContainer className="chart-container" width="40%" height={400}>
    <BarChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
      barGap={-100}
      barCategoryGap={50}
      style={{ overflow: "hidden" }}
    >
      <CartesianGrid strokeDasharray='1 10' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='Mind' fill='rgb(87, 173, 199)' />
      <Bar dataKey='Body' fill='var(--boxing-orange)' />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
