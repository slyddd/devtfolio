import { sites } from "./utils/sites.tsx";
import "./styles/navBar.css";

export function NavBar() {
  return (
    <nav>
      <div id="end">
        <div id="links">
          {sites.map((site, index) => (
            <a key={index + site.name} href={site.href}>
              {site.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
