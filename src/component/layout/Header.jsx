import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const logo = "https://png2png.com/wp-content/uploads/2021/06/moon-png1-1024x1024.png";

const Header = () => {
    return (
        <div className="header">
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="App-logo" width={60} src={logo} alt="" /></Link>
                    <div className="menu-text">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <AiOutlineMenu style={{color: "white", fontSize: "3rem"}}/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#information">Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#tokenomic">Tokenomic</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#partnership">Partnership</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/chart" className="nav-link">Chart</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/buy" className="nav-link">Buy MoonFi</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/info-token" className="nav-link">Info token</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;