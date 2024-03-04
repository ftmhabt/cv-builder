export default function Educational({ data, onChange }) {
  return (
    <form>
      <label htmlFor="schoolName">School Name</label>
      <input
        type="text"
        id="schoolName"
        value={data.schoolName}
        onChange={(e) => onChange("schoolName", e.target.value)}
      />
      <label htmlFor="studyTitle">Name of School</label>
      <input
        type="text"
        id="studyTitle"
        value={data.studyTitle}
        onChange={(e) => onChange("studyTitle", e.target.value)}
      />
      <label htmlFor="studyDate">Title of Study</label>
      <input
        type="date"
        name="studyDate"
        id="studyDate"
        value={data.studyDate}
        onChange={(e) => onChange("studyDate", e.target.value)}
      />
    </form>
  );
}
