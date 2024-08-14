import { useContext } from "react";
import { cvContext } from '../../context/cv-context';

export default function General() {
  const context = useContext(cvContext);

  
  return (
    <form className="single-form">
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        value={context.cvData.name}
        onChange={(e) => context.setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={context.cvData.email}
        onChange={(e) => context.setEmail(e.target.value)}
      />
      <label htmlFor="linkedin">LinkedIn</label>
      <input
        type="text"
        id="linkedin"
        value={context.cvData.linkedin}
        onChange={(e) => context.setLinkedin(e.target.value)}
      />
      <label htmlFor="about">About me</label>
      <textarea
        name="about"
        id="about"
        value={context.cvData.about}
        onChange={(e) => context.setAbout(e.target.value)}
      ></textarea>
    </form>
  );
}
