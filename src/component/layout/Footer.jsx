const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top" style={{ backgroundColor: "#191D24", padding: "20px 0", color: '#F1FFFF' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex align-center justify-content-center">
                            <img width={100} style={{ objectFit: "contain" }} src="https://png2png.com/wp-content/uploads/2021/06/moon-png1-1024x1024.png" alt="logo" />
                        </div>
                        <div className="col-md-4" style={{ textAlign: "justify" }}>
                        The MoonFi Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn.
                        </div>
                        <div className="col-md-4 social-all">
                            <h5 style={{color: "white"}}>Connecting to the MoonFi Protocol</h5>
                            <p className="social">
                                <a href="/"><i className="ti-facebook"></i></a>
                                <a href="/"><i className="ti-twitter"></i></a>
                                <a href="/"><i className="ti-linkedin"></i></a>
                                <a href="/"><i className="ti-youtube"></i></a>
                            </p>
                            <span><img width={120} src="https://images.dmca.com/Badges/DMCA_logo-grn-btn120w.png?ID=7a90b714-7124-4fd6-935a-0f697cef6594" alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom" style={{ backgroundColor: "#1F242C", padding: "20px 0", color: '#F1FFFF' }}>
                <span className="container text-center">© 2021 - Copyright MoonFi</span>
            </div>
        </footer>
    )
}

export default Footer;