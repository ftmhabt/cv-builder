export default function General({ data, onChange }) {
  return (
    <form>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="text"
        id="number"
        value={data.number}
        onChange={(e) => onChange("number", e.target.value)}
      />
    </form>
  );
}
