import React from 'react';

import Modal from './modal';
import { connect } from 'react-redux';
import { getTree, deleteFactory } from '../actions';

import history from '../history';

class DeleteFactory extends React.Component {

    componentDidMount() {
        this.props.getTree();
    }

    renderActions() {
        return (
            <React.Fragment className="modal-buttons">
                <button className="modal-yes button-primary-dark" onClick={()=>this.props.deleteFactory(this.props.factory._id)}>
                    Yes
                </button>
                <button className="modal-no button-primary-dark" onClick={()=>history.push('/')}>
                    No
                </button>
            </React.Fragment>
        )
    }

    renderTitle() {
        if(!this.props.factory) {
            return 'Are you sure you want to delete this factory?'
        }

        return `Are you sure you want to delete ${this.props.factory.name}`
    }

    render() {
        console.log(this.props)
        return (
            <Modal 
                title={this.renderTitle()}
                actions={this.renderActions()}
            />
        )
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        factory: state.tree[ownProps.match.params.id]
    };
  }

export default connect(mapStateToProps, { getTree, deleteFactory })(DeleteFactory);