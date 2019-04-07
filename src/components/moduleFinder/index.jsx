import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestNpmModule } from '../../actions';

class ModuleFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            moduleSearchName: ''
        }
    }

    render() { 
        const { onRequestModule, module, isFetching, error } = this.props;
        const { moduleSearchName } = this.state;
        return ( 
        <div>
            <input type="text" placeholder="Enter module name" onChange={evt => this.setState({ moduleSearchName: evt.target.value })} />
            <button type="button" onClick={() => onRequestModule(moduleSearchName)} >Search </button>

            {
                isFetching &&
                <p>fetching...</p>
            }
            {
                module !== {} &&
                <React.Fragment>
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>
                </React.Fragment>
            }
            {
                error.length > 0 &&
                <h3>Error: {error}</h3>
            }
        </div>
         );
    }
}

const mapStateToProps = state => ({
    module: state.module,
    isFetching: state.loading,
    error: state.error,
})

const mapDispatchToProps = dispatch => ({
    onRequestModule: moduleName => dispatch(requestNpmModule(moduleName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModuleFinder)
