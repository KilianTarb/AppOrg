import React from 'react';

import ApplicationBox from '../components/ApplicationBox';
import ApplicationCreateModal from '../components/ApplicationCreateModal';
import { getData } from "../lib/data/DataFile";

export default class ApplicationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: []
        };
        this.appContainerId = 'ApplicationContainer';
        this.appListId = 'ApplicationList';

        this.loadApps = this.loadApps.bind(this);
    }

    componentDidMount() {
        this.loadApps();
    }

    loadApps() {
        this.apps = [];
        getData((data) => { 
            let applications = data.applications;
            let components = [];
            for (let i = 0; i < applications.length; i++) {
                const element = applications[i];
                components.push(<ApplicationBox key={i} name={element.name} url={element.url} />);
            }
            this.setState({applications: components});
        });
    }

    render() {
        return (
            <div id={this.appContainerId}>
                <h3>My Applications</h3>
                <ApplicationCreateModal />
                <hr/>
                
                <div id={this.appListId}>
                    {this.state.applications}
                </div>
            </div>
        )
    }
}