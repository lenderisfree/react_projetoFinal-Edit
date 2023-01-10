const Looks = () => {
    return(
        <section id="looks" className="paddingverticaldouble">
        <h2 className="textcenter marginbottomfull">Looks</h2>
        <div className="gridrow">
            <div className="col-6 col-t-3">
                <a href="#" title="View Look" className="look-card">
                    <div className="look-card-image">
                        <img className="imgfit" srcSet="imgs/looks/looks01.jpg 720w, imgs/looks/medium/looks01.jpg 360w, imgs/looks/small/looks01.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="imgs/looks/looks01.jpg" />
                    </div>
                    <p className="fancytext">Look 1</p>
                </a>
            </div>
            <div className="col-6 col-t-3">
                <a href="#" title="View Look" className="look-card">
                    <div className="look-card-image">
                        <img className="imgfit" srcSet="imgs/looks/looks02.jpg 720w, imgs/looks/medium/looks02.jpg 360w, imgs/looks/small/looks02.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="imgs/looks/looks02.jpg" />
                    </div>
                    <p className="fancytext">Look 2</p>
                </a>
            </div>
            <div className="col-6 col-t-3">
                <a href="#" title="View Look" className="look-card">
                    <div className="look-card-image">
                        <img className="imgfit" srcSet="imgs/looks/looks03.jpg 720w, imgs/looks/medium/looks03.jpg 360w, imgs/looks/small/looks03.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="imgs/looks/looks03.jpg" />
                    </div>
                    <p className="fancytext">Look 3</p>
                </a>
            </div>
            <div className="col-6 col-t-3">
                <a href="#" title="View Look" className="look-card">
                    <div className="look-card-image">
                        <img className="imgfit" srcSet="imgs/looks/looks04.jpg 720w, imgs/looks/medium/looks04.jpg 360w, imgs/looks/small/looks04.jpg 240w" sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px" src="imgs/looks/looks04.jpg" />
                    </div>
                    <p className="fancytext">Look 4</p>
                </a>
            </div>
        </div>
    </section>
    )
}

export default Looks;