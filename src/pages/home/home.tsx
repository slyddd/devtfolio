import { FULL_NAME, GH_USER } from "../../utils/vars.ts";
import "./styles/home.css";

export function Home() {
  return (
    <section id="home">
      <p>Hello there 👋 </p>
      <img src={"https://github.com/" + GH_USER + ".png"} alt="avatar" />
      <h1>{FULL_NAME}</h1>
      <p className="font-italic">
        Full-stack developer with a passion for web technologies.
      </p>
    </section>
  );
}
