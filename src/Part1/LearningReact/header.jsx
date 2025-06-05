const reactLogo = new URL('./logo.png', import.meta.url).href;

function HeaderElement() {
  return (
    <header className="header-content">
      <img className="logo-image" src={reactLogo} alt="React Logo"/>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul> 
        </nav>
    </header>
  )
}
export {HeaderElement};