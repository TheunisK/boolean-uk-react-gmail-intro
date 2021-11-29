import './styles/app.css'

function HideReadLi () {
    return (
        <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input id="hide-read" type="checkbox" checked={false} />
        </li>
    )
}

export default HideReadLi