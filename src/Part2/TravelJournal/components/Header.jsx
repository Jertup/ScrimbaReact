
function Header() {
   const globeImg = new URL("./images/Globe.png", import.meta.url)
  return (
    <header>
      <nav>
        <img src={globeImg} alt="Travel Journal Logo" />
        <span>my travel journal.</span>
      </nav>
    </header>
  )
}
export default Header;