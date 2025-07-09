function Entry() {
    return (
        <section className="entry-card">
            <div className="entry-photo"></div>
            <div className="entry-info">
                <div className="entry-topbar">
                    <svg className="marker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">{/*<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    <p className="entry-country">Japan</p>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="entry-google">View on Google Maps</a>
                </div>
                <h2 className="entry-title">Mount Fuji</h2>
                <h3 className="entry-dates">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className="entry-details">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
        
    )
}

export default Entry