import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { CircularProgress } from "@mui/material";
const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
    render: (text) => <a className="font-medium">{text}</a>,
  },
  {
    title: "Sphere",
    dataIndex: "sphere",
    key: "spheres",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
  {
    title: "Cylinder",
    dataIndex: "cylinder",
    key: "cylinder",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
  {
    title: "Axis",
    dataIndex: "axis",
    key: "axis",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
  {
    title: "Pupillary Distance",
    dataIndex: "pd",
    key: "pd",
    render: (text) => <p className="text-lg font-light">{text}</p>,
  },
];
const data = [
  {
    key: "2",
    name: "OD",
    sphere: "+0.50",
    cylinder: "0.00",
    axis: "0",
    pd: "30.5",
  },
  {
    key: "1",
    name: "OS",
    sphere: "+0.50",
    cylinder: "-0.25",
    axis: "180",
    pd: "30.0",
  },
];

export default function ConfirmPrescription() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  return (
    <>
      {loading ? (
        <div className="text-center my-20">
          <CircularProgress />
        </div>
      ) : (
        <div className="m-10 shadow-md rounded-md">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      )}
    </>
  );
}
