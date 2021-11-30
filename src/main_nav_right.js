import './styles/app.css'

import MainNavRightP from './main_nav_right_p'
import MainNavBack from './main_nav_back'
import MainNavForward from './main_nav_forward'

function MainNavRight () {
    return (
        <div>
            <MainNavRightP />
            <MainNavBack />
            <MainNavForward />
        </div>
    )
}

export default MainNavRight