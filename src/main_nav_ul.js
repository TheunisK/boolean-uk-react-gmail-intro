import './styles/app.css'

import BackArrow from './back_arrow_li'
import DownloadButton from './download_button'
import RubbishButton from './rubbish_button'

function MainNavUl () {
    return (
        <ul>
            <BackArrow />
            <DownloadButton />
            <RubbishButton />
        </ul>
    )
}

export default MainNavUl