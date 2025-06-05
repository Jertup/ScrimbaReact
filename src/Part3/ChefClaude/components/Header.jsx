function Header() {
   const chefImg = new URL("./images/chef-claude-icon.png", import.meta.url)
  return (
    <header>
      <nav id="header-nav">
        <img src={chefImg} alt="Chef Claude Logo" />
        <h1>Chef Claude</h1>
      </nav>
    </header>
  )
}
export default Header;