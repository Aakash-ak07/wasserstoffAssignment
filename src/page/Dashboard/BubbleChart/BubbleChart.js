import React from "react";
import "./bubblechart.css";
import { BarChartOutlined, EyeOutlined } from "@ant-design/icons";

const BubbleChart = () => {
    return (
        <div className="dashBoard__right">
            <p className="timeline">Timeline</p>
            <div className="dashBoard__right-timeline"></div>

            {/* Circle */}
            <div className="dashBoard__right-parent__circle">
                <div className="dashBoard__right-child__circle">
                    <div className="time-period">
                        <span>1W</span>
                        <span>1M</span>
                        <span>3M</span>
                        <span>1Y</span>
                        <span>All</span>
                    </div>
                </div>
            </div>


            {/* informers */}
            <div className="dashBoard__right-informer">
                <div className="dashBoard__right-trendGoods">
                    <BarChartOutlined style={{
                        backgroundColor: "white",
                        width: "46px",
                        height: "36px",
                        paddingTop: "5px",
                        fontSize: "25px",
                        color: "#023AFF",
                        marginLeft: "15px"
                    }} />



                    <p className="bubble-bottom-name">TREND GOODS</p>
                    <p className="bubble-bottom-value">204</p>
                </div>
                <div className="dashBoard__right-shoppingViews">
                    <EyeOutlined style={{
                        backgroundColor: "white",
                        width: "46px",
                        height: "36px",
                        paddingTop: "5px",
                        fontSize: "25px",
                        color: "#023AFF",
                        marginLeft: "22px"
                    }} />


                    <p className="bubble-bottom-name">SHOPPING VIEWS</p>
                    <p className="bubble-bottom-value">65,540</p>
                </div>
                <div className="dashBoard__right-storeDynamics">
                    <BarChartOutlined style={{
                        backgroundColor: "white",
                        width: "46px",
                        height: "36px",
                        paddingTop: "5px",
                        fontSize: "25px",
                        justifyContent: "center",
                        color: "#023AFF",
                        marginLeft: "22px"
                    }} />
                    <p className="bubble-bottom-name">STORE DYNAMICS</p>
                    <p className="bubble-bottom-value">204</p>
                </div>
            </div>
        </div>
    );
};

export default BubbleChart;
