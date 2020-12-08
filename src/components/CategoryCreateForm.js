import React from 'react'
import { createCategory } from "../lib/data/Models";

export default class CategoryCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categoryName: ''}
        this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryNameChange(e) {
        this.setState({categoryName: e.target.value});
    }

    handleSubmit(e) {
        createCategory(this.state.categoryName, this.state.appUrl);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='categoryName'>Name</label>
                <input id='categoryName' name='categoryName' type='text' onChange={this.handleCategoryNameChange} />
                <button className='btn btn-primary right'>Submit</button>
            </form>
        )
    }
}
