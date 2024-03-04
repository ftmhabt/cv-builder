import "./../styles/right.css";

export default function Right({ data }) {
  let [first, last] = data.name.split(" ");
  return (
    <div className="cv">
      <div className="paper">
        <div className="header">
          <div className="name">
            <div className="first">{first}</div>
            <div className="last">{last}</div>
          </div>
          <div className="info">
            <div className="phonenumber">{data.number}</div>
            <div className="email">{data.email}</div>
          </div>
        </div>
        <div className="education">
          <h3>Education</h3>
          <div>
            <h5>{data.schoolName}</h5>
            <h5>{data.studyTitle}</h5>
            <h5>{data.studyDate}</h5>
          </div>
        </div>
        <div className="profession">
            <h3>Expriance</h3>
            <div>
            <h5>in {data.companyName}</h5>
            <h5>as {data.positionTitle}</h5>
            <h5>{data.mainResponsibilities}</h5>
            <h5>from: {data.from}</h5>
            <h5>until: {data.until}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
