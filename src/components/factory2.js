import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Child from './child';
import Root from './root';

import { connect } from 'react-redux';
import { generateChildren } from '../actions';

class Factory extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         validateFactory: new Object(),
    //         factoryId: this.props.factory._id
    //     }
    // }

    renderInput = ({ input, label, placeholder, meta }) => {
        // console.log(meta)
        const className= ` form-input ${meta.touched && meta.error ? 'form-error' : ''}`
        return (
            <div>
                <label className="form-label">{label}</label>
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
                <div className="form-error-message">{error}</div>
            )
        }
    }

    renderChildren() {
        return this.props.factory.children.map((child) => {
            return (
                <div key={child}>
                    <Child key={child} child={child}/>
                </div>
            )
        })
    }

    onSubmit = (formProps) => {
        let numberOfChildren = formProps[this.props.factory._id]
        let min = this.props.factory.lowerRange;
        let max = this.props.factory.upperRange + 1;
        let arr = [];
        for (let i=0; i<numberOfChildren; i++) {
            let num = Math.trunc(Math.random() * (max - min) + min);
            arr.push(num);
        }
        this.props.factory.children = arr;
        this.props.generateChildren(this.props.factory);
    }

    onEdit = () => {
        return (
            <div>
                <Root />
            </div>
        )

    }

    render() {
        console.log(this.props)
        return (
            <div>
            <div className="factory">
                <label className="factory-edit">
                    {/* <svg viewBox="0 0 20 20" className="factory-edit-icon">
                    <path fill="#2a3867" d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"></path>
                        
                    </svg> */}
                        <a href={`/edit/${this.props.factory._id}`}>
                            edit                        
                        </a>
                </label>
                <div className="factory-title">
                    <b>{this.props.factory.name}</b> - Range: {this.props.factory.lowerRange} - {this.props.factory.upperRange}
                </div>
                
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="factory-add-cta">
                    <Field name={this.props.factory._id} component={this.renderInput} label="Number of Children" placehorder="0 - 15" className="form-element-number" />
                    <label className="factory-add-submit">
                        <input type="submit" id="hideSubmit" />
                        <svg className="factory-add-icon" viewBox="0 0 20 20">
                            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>                        
                        </svg>
                    </label>
                </form>
                <Link to={`/delete/${this.props.factory._id}`}>delete</Link>
                {/* <svg className="factory-delete" viewBox="0 0 20 20">                                    
                    
                    <path d="M16.471,5.962c-0.365-0.066-0.709,0.176-0.774,0.538l-1.843,10.217H6.096L4.255,6.5c-0.066-0.362-0.42-0.603-0.775-0.538C3.117,6.027,2.876,6.375,2.942,6.737l1.94,10.765c0.058,0.318,0.334,0.549,0.657,0.549h8.872c0.323,0,0.6-0.23,0.656-0.549l1.941-10.765C17.074,6.375,16.833,6.027,16.471,5.962z"></path>
                    <path d="M16.594,3.804H3.406c-0.369,0-0.667,0.298-0.667,0.667s0.299,0.667,0.667,0.667h13.188c0.369,0,0.667-0.298,0.667-0.667S16.963,3.804,16.594,3.804z"></path>
                    <path d="M9.25,3.284h1.501c0.368,0,0.667-0.298,0.667-0.667c0-0.369-0.299-0.667-0.667-0.667H9.25c-0.369,0-0.667,0.298-0.667,0.667C8.583,2.985,8.882,3.284,9.25,3.284z"></path>                
                </svg>                        */}
            </div>
            {this.renderChildren()}
            </div>         

            
        )
        
    }
}

let validateFactory = new Object();
console.log(state)
validateFactory= (formValues, props) => {
    // console.log(props)
    const errors = {};
    if(!formValues[props.factory._id]) {
        errors[props.factory._id] = "This field is required"
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'factoryForm',
    validate: validateFactory
})(Factory);

export default connect(null, { generateChildren })(formWrapped);