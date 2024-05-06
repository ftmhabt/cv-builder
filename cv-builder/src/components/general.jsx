import { useContext } from "react";
import cvContext from "../context/general-context";

export default function General() {
  const context = useContext(cvContext);

  return (
    <form>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        value={context.name}
        onChange={(e) => context.setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={context.email}
        onChange={(e) => context.setEmail(e.target.value)}
      />
      <label htmlFor="linkedin">LinkedIn</label>
      <input
        type="text"
        id="linkedin"
        value={context.linkedin}
        onChange={(e) => context.setLinkedin(e.target.value)}
      />
    </form>
  );
}
