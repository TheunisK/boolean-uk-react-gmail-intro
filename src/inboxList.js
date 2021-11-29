import './styles/app.css'

import InboxLi from './inbox_li'
import StarredLi from './starred_li'
import HideReadLi from './hideRead_li'

function InboxList () {
    return (
        <ul className="inbox-list">
          <InboxLi />
          <StarredLi />
          <HideReadLi />
        </ul>
    )
}

export default InboxList