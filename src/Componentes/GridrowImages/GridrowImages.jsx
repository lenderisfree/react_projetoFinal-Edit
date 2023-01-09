const GridrowImages = () => {
  return (
    <div className="gridrow marginverticalfull">
      <div className="col-12 col-t-4">
        <img
          className="imgfit"
          srcset="imgs/press/press01.jpg 720w, imgs/press/medium/press01.jpg 450w"
          sizes="(min-width: 1200px) 720px, 450px"
          src="imgs/press/press01.jpg"
        />
        <p className="textcenter">Replica Collection</p>
      </div>
      <div className="col-6 col-t-4">
        <img
          className="imgfit"
          srcset="imgs/press/press02.jpg 720w, imgs/press/medium/press02.jpg 450w"
          sizes="(min-width: 1200px) 720px, 450px"
          src="imgs/press/press02.jpg"
        />
        <p className="textcenter">Hublot Collaboration</p>
      </div>
      <div className="col-6 col-t-4">
        <img
          className="imgfit"
          srcset="imgs/press/press03.jpg 720w, imgs/press/medium/press03.jpg 450w"
          sizes="(min-width: 1200px) 720px, 450px"
          src="imgs/press/press03.jpg"
        />
        <p className="textcenter">Dr Martens vs Yamamoto</p>
      </div>
    </div>
  );
};
