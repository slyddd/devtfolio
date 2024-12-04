import { ChangeTheme } from "../themeSwitch/changeTheme.tsx";
import { GH_USER } from "../../utils/vars.ts";
import "./styles/navBar.css";
import { sites } from "./utils/sites.tsx";

export function NavBar() {
  return (
    <nav>
      <div id="logo">
        <h1>{GH_USER}</h1>
      </div>
      <div id="end">
        <div id="links">
          {sites.map((site, index) => (
            <a key={index + site.name} href={site.href}>
              {site.name}
            </a>
          ))}
        </div>
        <div id="burger"></div>
        <ChangeTheme />
      </div>
    </nav>
  );
}
