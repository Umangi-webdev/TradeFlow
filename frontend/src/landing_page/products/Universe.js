import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/media/images/smallcaseLogo.jpeg"
          style={{ width: "150px"}} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/streakLogo.jpeg" 
          style={{ width: "150px"}}/>
          <p className="text-small text-muted">Alogo &strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/sensibullLogo.jpeg"
          style={{ width: "150px"}} />
          <p className="text-small text-muted">options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/zerodha.jpeg"
          style={{ width: "150px"}} />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/Golden_pie_logo.jpeg" 
          style={{ width: "150px", margin: "0 auto"}}/>
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/ditto.jpeg" 
          style={{ width: "140px"}}/>
          <p className="text-small text-muted">insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;