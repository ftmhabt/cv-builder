import { useState } from "react";
import "./../styles/body.css";
import Left from "./left";
import Right from "./right";

export default function Body() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    schoolName: "",
    studyTitle: "",
    studyDate: "",
    companyName:'',
    positionTitle:'',
    mainResponsibilities:'',
    from:'',
    until:''
  });

  function handleChange(field, value) {
    setData((prevState) => ({ ...prevState, [field]: value }));
  }

  return (
    <>
      <Left data={data} onChange={handleChange} />
      <Right />
    </>
  );
}
