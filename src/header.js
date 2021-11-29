import './styles/app.css'

import HeaderLeftMenu from './header_left_menu'
import HeaderSearch from './header_search'

function Header () {
    return (
        <header className="header">
        <HeaderLeftMenu />
        <HeaderSearch />
      </header>
    )
}

export default Header