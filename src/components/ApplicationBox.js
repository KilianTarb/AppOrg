import { extend } from "jquery";
import React from "react";

export default class ApplicationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.getFavicon = this.getFavicon.bind(this);
    }

    componentDidMount() {
        if (this.props.url != null) {
            this.setState({url: this.props.url});
        } else {
            this.setState({url: '?'});
        }
    }

    getFavicon() {
        if (this.props.url != null)
            return `https://${this.props.url}/favicon.ico`;
    }

    titleClick() {
        console.log(this.props.url);
    }

    render() {
        return(
            <div className="application">
                <div className="application-img"><img src={this.getFavicon()} /></div>
                <div className="application-title" onClick={this.titleClick}>{this.props.name}</div>
            </div>
        )
    }
}