import profileImg from "./assets/avatar.png";
import {
  MoonStars,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { ButtonLink } from "./components/button-link";

export function App() {
  return (
    <div className="container">
      <div className="profile">
        <img src={profileImg} alt="" className="img-profile" />
        <p>@maykbrito</p>
      </div>

      <div className="toggle-container">
        <div className="toggle-switch dark">
          <MoonStars size={16} />
        </div>
      </div>

      <div className="links">
        <ButtonLink
          name="Inscreva-se no NLW"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Baixar meu e-book"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Veja meu portfólio"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Conheça o Explorer"
          link="https://www.rocketseat.com.br"
        />
      </div>

      <div className="social-media">
        <a href="github.com" target="_blank">
          <GithubLogo size={24} />
        </a>
        <a href="instagram.com" target="_blank">
          <InstagramLogo size={24} />
        </a>
        <a href="youtube.com" target="_blank">
          <YoutubeLogo size={24} />
        </a>
        <a href="linkedin.com" target="_blank">
          <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  );
}
