import React from 'react'
import ApplicationCreateForm from "./ApplicationCreateForm";

export default class ApplicationCreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.applicationCreateModalId = 'applicationCreateModel';

       // this.setDisplay = this.setDisplay.bind(this);
    }
    
    componentDidUpdate() {
        if (this.props.status == 'active') {
            this.setDisplay('block');
        } else {
            this.setDisplay('none');
        }
    }

    setDisplay(status) {
        console.log("Display: "+status);
        if (document.getElementById(this.applicationCreateModalId) != null) {
            let modal = document.getElementById(this.applicationCreateModalId);
            if (status == true) {
                modal.classList.remove('modal-hidden');
                modal.classList.add('modal-active');
            } else if (status == false) {
                modal.classList.remove('modal-active');
                modal.classList.add('modal-hidden');
            }
        }
    }

    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.setDisplay(true)}>Register Application</button>
                <div className='modal' id={this.applicationCreateModalId}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={() => this.setDisplay(false)}>&times;</span>
                            <h2>Register new application</h2>
                        </div>
                        <div className="modal-body">
                            <ApplicationCreateForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}   