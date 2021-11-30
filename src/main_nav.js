import './styles/app.css'

import MainNavUl from './main_nav_ul.js'
import MainNavSpace from './main_nav_space'
import MainNavRight from './main_nav_right'

function MainNav () {
    return (
        <nav className="email-toolbar">
          <MainNavUl />
          <MainNavSpace />
          <MainNavRight />
        </nav>
    )
}

export default MainNav