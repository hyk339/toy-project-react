import "../css/Header.css"

function Header(){
    return (
        <header className="Header">
            <div className = "header_left">좌</div>
            <div className = "header_center">타이틀</div>
            <div className = "header_right">우</div>
        </header>
    )
}

export default Header;