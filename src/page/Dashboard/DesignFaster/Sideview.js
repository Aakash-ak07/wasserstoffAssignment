import React from "react";
import DemoRadialBar from "./DemoRadialBar"
import DemoTinyArea from  "./DemoTinyArea"
import "./sideview.css";

function Sideview() {
  return (
    <div
      style={{
        width: "220px",
        height: "255px",
        borderRadius: "7px",
        marginLeft: "10px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
      <div style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "205px",
            // marginTop: "-5px",
            height: "90px"
          }}
        >
          <DemoRadialBar />
        </div>
        <div style={{ textAlign: "center", fontFamily: "Roboto,sansSerif" }}>
          Total Earning
        </div>
        <h6
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "10px",
            marginTop:"2px",
            fontSize: "19px"
          }}
        >
          $12,875
        </h6>
        <p
          style={{
            fontSize: "10px",
            textAlign: "center",
            marginBottom: "15px",
            color: "gray",
          }}
        >
          Compressed to $21,537 last year
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "18px",
            marginTop:"10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px"
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: "10px", marginRight: "10px" }}>
                Presentation
              </div>
              <p
                style={{ fontSize: "10px", color: "gray", marginLeft: "20px" }}
              >
                234
              </p>
              <div
                style={{
                  fontSize: "10px",
                  width: "50px",
                  height: "12px",
                  marginLeft: "20px"
                }}
              >
                <DemoTinyArea />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px"
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: "10px", marginRight: "10px" }}>
                Development
              </div>
              <p
                style={{ fontSize: "10px", color: "gray", marginLeft: "15px" }}
              >
                234
              </p>
              <div
                style={{
                  fontSize: "10px",
                  width: "50px",
                  height: "12px",
                  marginLeft: "20px"
                }}
              >
                <DemoTinyArea />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: "10px", marginRight: "10px" }}>
                Research
              </div>
              <p
                style={{ fontSize: "10px", color: "gray", marginLeft: "32px" }}
              >
                234
              </p>
              <div
                style={{
                  fontSize: "10px",
                  width: "50px",
                  height: "12px",
                  marginLeft: "20px"
                }}
              >
                <DemoTinyArea />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="row">
          <div className="col">
            <p style={{ fontWeight: "100" }}>Total Earnings</p>
          </div>
          <div className="col">
            <h2>
              $12,875 <span className="increase">+10%</span>
            </h2>
          </div>
          <div className="col">
            <p style={{ fontSize: "12px" }}>Compared to $21,490 last year</p>
          </div>
        </div>
        <div style={{ borderBottom: "1px solid  #6B5ED2" }}></div>
        <div className="row">
          <div className="col">
            <p style={{ fontWeight: "100" }}>Sales</p>
          </div>
          <div className="col">
            <h2>
              $43,123 <span className="increase">+12%</span>
            </h2>
          </div>
          <div className="col">
            <p style={{ fontSize: "12px" }}>Compared to $21,490 last year</p>
          </div>
        </div>
      </div>

      <div className="card-container-third">
        <div className="card-row-third">
          <div className="card_third">Travel</div>
          <div className="card_third" style={{ color: "gray" }}>
            760
          </div>
          <div className="card_third">2,540</div>
          <div className="card_third">+</div>
        </div>
        <div className="card-row-third">
          <div className="card_third">Presentation</div>
          <div className="card_third" style={{ color: "gray" }}>
            650
          </div>
          <div className="card_third">2,304</div>
          <div className="card_third">+</div>
        </div>
        <div className="card-row-third">
          <div className="card_third">Business</div>
          <div className="card_third" style={{ color: "gray" }}>
            612
          </div>
          <div className="card_third">2,140</div>
          <div className="card_third">+</div>
        </div>
      </div>

    </div>   
  );
}

export default Sideview;