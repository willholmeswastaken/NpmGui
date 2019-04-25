import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import { requestNpmModule } from '../../actions'
import Finder from './finder'
import Result from './result'

class ModuleFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moduleSearchName: '',
      resultOpen: false
    }
    this.handleModuleNameChange = this.handleModuleNameChange.bind(this)
  }

  handleModuleNameChange(moduleSearchName) {
    this.setState({ moduleSearchName })
  }

  render() {
    const { onRequestModule, module, isFetching, error } = this.props
    const { moduleSearchName, resultOpen } = this.state
    return (
      <Fragment>
        <Grid
          container
          spacing={24}
          justify="center"
          direction="row"
          alignItems="center">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <h1>NpmGui</h1>
            <h3>Find your npm package now...</h3>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <Finder
              moduleName={moduleSearchName}
              onModuleNameChange={this.handleModuleNameChange}
              onRequestModule={moduleName => { this.setState({ resultOpen: true }); onRequestModule(moduleName); }}
              isFetching={isFetching}
            />
            <Result
              module={module}
              open={resultOpen}
              isFetching={isFetching}
              onResultClose={() => this.setState({ resultOpen: false })}
            />
            {error.length > 0 && <h3>Error: {error}</h3>}
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  module: state.module,
  isFetching: state.loading,
  error: state.error
})

const mapDispatchToProps = dispatch => ({
  onRequestModule: moduleName => dispatch(requestNpmModule(moduleName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleFinder)
