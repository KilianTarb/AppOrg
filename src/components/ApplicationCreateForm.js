import { bind } from 'file-loader';
import React from 'react';
import { createApplication } from "../lib/data/Models";

export default class ApplicationCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appName: '', appUrl: ''}
        this.handleAppNameChange = this.handleAppNameChange.bind(this);
        this.handleAppUrlChange = this.handleAppUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAppNameChange(e) {
        console.log('AppName Input Change: ' + e.target.value);
        this.setState({appName: e.target.value});
        console.log('AppName State Change: ' + this.state.appName);
    }

    handleAppUrlChange(e) {
        this.setState({appUrl: e.target.value});
    }

    handleSubmit(e) {
        console.log('Submit Values -- appname: ' + this.state.appName);
        createApplication(this.state.appName, this.state.appUrl);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='appName'>Name</label>
                <input id='appName' name='appName' type='text' onChange={this.handleAppNameChange} />
                <label htmlFor='appUrl'>URL</label>
                <input id='appUrl' name='appUrl' type='text' onChange={this.handleAppUrlChange} />
                <button className='btn btn-primary right'>Submit</button>
            </form>
        )
    }
}