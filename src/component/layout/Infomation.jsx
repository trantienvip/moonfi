import { BsFillAwardFill } from 'react-icons/bs';
const Infomation = () => {
    return (
        <div className="information" id="information">
            <div className="container row">
                <div className="col-md-6 banner-text" style={{ alignSelf: 'center' }}>
                    <p style={{ fontSize: 55 }}>INFOMATION</p>
                    <div className="info-content mt-3" style={{ textAlign: 'left' }}>
                        <p style={{ fontSize: 30 }}>The SafeMoon Protocol is a community focused, fair launched DeFi Token.</p>
                        <p style={{ fontSize: 15 }}>Three simple functions occur during each trade</p>
                    </div>
                    <ul className="info-list">
                        <li className="info-list-sm">
                            <BsFillAwardFill className="icon-info" />
                            <div className="info-list-sm-m">
                                <h5>Reflection</h5>
                                <span>5% is reflected to all holders for passive income</span>
                            </div>
                        </li>
                        <li className="info-list-sm">
                            <BsFillAwardFill className="icon-info" />
                            <div className="info-list-sm-m">
                                <h5>LP Acquisition</h5>
                                <span>5% is added to a liquidity pool</span>
                            </div>
                        </li>
                        <li className="info-list-sm">
                            <BsFillAwardFill className="icon-info" />
                            <div className="info-list-sm-m">
                                <h5>Burn</h5>
                                <span>A burn wallet receives a portion of the reflections to never be seen again.</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 banner-text">
                    {/* <img src="https://safemoon.net/_next/image?url=%2Fimg%2Fspaceman-stars.png&w=640&q=75" alt="" /> */}
                    <video className="video-ea" loop muted autoPlay controls='' style={{ opacity: 0.6 }}><source src="https://pixabay.com/vi/videos/download/video-30878_medium.mp4" type="video/mp4" /></video>
                </div>
            </div>
        </div>
    )
}

export default Infomation;