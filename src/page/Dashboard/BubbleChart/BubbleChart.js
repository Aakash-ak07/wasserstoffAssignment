import React from "react";
import { BarChartOutlined, EyeOutlined } from "@ant-design/icons";
import { TbHexagonLetterO } from "react-icons/tb";
import { data } from "../../../components/Data";
import "./bubblechart.css";

const BubbleChart = () => {
    return (
        <div className="bubbles item-center">
            <div className="top_heading item-center">
                <p className="timeline">TIMELINE</p>
            </div>
            <div class="time-period">
                <span>1W</span>
                <span>1M</span>
                <span>3M</span>
                <span>1Y</span>
                <span>All</span>
            </div>
            <div className="all-bubles item-center">
                <div className="pink first">
                    <p>Development</p>
                    <p className="updown">${data.development}</p>
                </div>
                <div className="pink second"></div>
                <div className="center-div item-center">
                    <div className="innermost">
                        <p>Investment</p>
                        <p className="updown">${data.investments}</p>
                    </div>
                </div>
                <div className="yellow"></div>
                <div className="purple purple1"></div>
                <div className="purple purple2"></div>
                <div className="purple purple3"></div>
                <div className="purple purple4"></div>
                <div className="blue blue1"></div>
                <div className="blue blue2"></div>
                <div className="blue blue3">
                    <p>Buisness</p>
                    <p className="updown">${data.buisness}</p>
                </div>
                <div className="blue blue4"></div>
                <div className="blue blue5"></div>
                <div className="pink third">
                    <p>Finance</p>
                    <p className="updown">${data.finance}</p>
                </div>
                <div className="pink forth">
                    <p>Design</p>
                    <p className="updown">${data.design}</p>
                </div>
            </div>
            <div className="data">
                <div>

                    <BarChartOutlined style={{
                        backgroundColor: "white",
                        width: "46px",
                        height: "36px",
                        paddingTop: "5px",
                        fontSize: "27px",
                        color: "#023AFF",
                        marginLeft: "1px",
                        dispaly: "flex"
                    }} />
                    <br />
                    <span className="title">TREND GOOD</span>
                    <br />
                    <span className="title_data">{data.trendGoods}</span>
                </div>
                <div>
                    <EyeOutlined style={{
                        backgroundColor: "white",
                        width: "46px",
                        height: "36px",
                        paddingTop: "5px",
                        fontSize: "29px",
                        color: "#023AFF",
                        marginLeft: "1px",
                        dispaly: "flex"
                    }} />
                    <br />
                    <span className="title">SHOPPING VIEWS</span>
                    <br />
                    <span className="title_data">{data.shoppingVeiws}</span>
                </div>
                <div>
                    <BarChartOutlined style={{
                        backgroundColor: "white",
                        width: "46px",
                        height: "36px",
                        paddingTop: "5px",
                        fontSize: "27px",
                        justifyContent: "center",
                        color: "#023AFF",
                        marginLeft: "1px"
                    }} />
                    <br />
                    <span className="title">STORE DYNAMICS</span>
                    <br />
                    <span className="title_data">{data.storeDynamics}</span>
                </div>
            </div>
        </div>

    );
};

export default BubbleChart;