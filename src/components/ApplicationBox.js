import { extend } from "jquery";
import React from "react";

export default class ApplicationBox extends React.Component {
    constructor(props) {
        super(props);
    }

    titleClick() {
        console.log(this.props.url);
    }

    render() {
        return(
            <div className="application">
                <div className="application-title" onClick={this.titleClick}>{this.props.name}</div>
            </div>
        )
    }
}