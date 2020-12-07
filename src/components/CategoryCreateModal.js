import React from 'react'
import CategoryCreateForm from './CategoryCreateForm';

export default class CategoryCreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.categoryCreateModalId = 'categoryCreateModal';
        this.setDisplay = this.setDisplay.bind(this);
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
        if (document.getElementById(this.categoryCreateModalId) != null) {
            let modal = document.getElementById(this.categoryCreateModalId);
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
                <button className='btn btn-primary' onClick={() => this.setDisplay(true)}>Register Category</button>
                <div className='modal' id={this.categoryCreateModalId}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={() => this.setDisplay(false)}>&times;</span>
                            <h2>Register new category</h2>
                        </div>
                        <div className="modal-body">
                            <CategoryCreateForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
