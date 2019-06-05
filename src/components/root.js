import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { getTree, addFactory } from '../actions';

import Factory from './factory';
import About from './about';

class Root extends React.Component {

    componentDidMount() {
        this.props.getTree();        
      }


    renderInput = ({ input, label, placeholder, meta }) => {
        const className= ` root-form-input ${meta.touched && meta.error ? 'form-error-root' : ''}`
        return (
            <div className="root-form-block">
                <label className="root-form-label">{label}</label>
                <div>
                    <input {...input} className={className} required placeholder={placeholder} />
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="form-error-message-root">{error}</div>
            )
        }
    }

    onSubmit = (formProps) => {
        this.props.addFactory(formProps);
    }


    renderList() {
        return this.props.tree.map((factory) => {
            return (
                <div key={factory._id}>
                    <Factory key={factory._id} factory={factory}/>
                </div>
            )
        })
      }

    render() {
        return (
            <div>
                <About />
                <div className="root">
                    <div className="root-title">
                        <b>ROOT</b>
                    </div>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="root-form">
                        <Field name="lowerRange" component={this.renderInput} label="Range (lower)" placeholder="e.g. 5" className="form-element-number"/>
                        <Field name="upperRange" component={this.renderInput} label="Range (upper)" placeholder="e.g. 550" className="form-element-number"/>
                        <Field name="name" component={this.renderInput} label="Factory Name" placeholder="e.g. My cool factory" className="form-element-name"/>
                        <label className="root-add-submit">
                            <input type="submit" id="hideSubmit" />
                            <svg className="root-add-icon" viewBox="0 0 20 20">
                                <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>                        
                            </svg>
                        </label>
                        
                    </form>
                </div>
                {this.renderList()}
            </div>
        )
        
    }
}

const validate = (formValues) => {
    const errors = {};
    let isValidLowerRange = true;
    let isValidUpperRange = true;
    let isValidName = true;
    if(!formValues.lowerRange && isValidLowerRange) {
        isValidLowerRange = false;
        errors.lowerRange = "This field is required"
    }
    if(isNaN(formValues.lowerRange) && isValidLowerRange) {
        isValidLowerRange = false;
        errors.lowerRange = "Only numbers allowed"
    }
    if((formValues.lowerRange > formValues.upperRange) && isValidLowerRange) {
        isValidLowerRange = false;
        errors.lowerRange = "More than Upper Range"
    }
    if(!formValues.upperRange) {
        isValidUpperRange = false;
        errors.upperRange = "This field is required"
    }
    if(isNaN(formValues.upperRange) && isValidUpperRange) {
        isValidUpperRange = false;
        errors.upperRange = "Only numbers allowed"
    }
    if((formValues.lowerRange > formValues.upperRange) && isValidUpperRange) {
        isValidUpperRange = false;
        errors.upperRange = "Less than Lower Range"
    }
    if(!formValues.name) {
        isValidName = false;
        errors.name = "This field is required"
    }
    if (formValues.name) {
        let iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?@";
        for (let i = 0; i < formValues.name.length; i++) {
            if (iChars.indexOf(formValues.name.charAt(i)) != -1) {
                isValidName = false;
                errors.name = "Cannot include special chars"
            }
        }
    }
    return errors;
}

const mapStateToProps = state => {
    return { tree: Object.values(state.tree) };
  }

const formWrapped = reduxForm({
    form: 'rootForm',
    validate: validate
})(Root);

export default connect(mapStateToProps, { getTree, addFactory })(formWrapped);