import {createRoot} from 'react-dom/client';
import {HeaderElement} from './header';
import {FooterElement} from './footer';
import {MainContent} from './main';
const root = createRoot(document.getElementById("root"));


root.render(
  <>
    <HeaderElement />
      <MainContent />
      <FooterElement />
  </>
)