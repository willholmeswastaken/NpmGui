import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { requestNpmModule } from '../../actions'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

class ModuleFinder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moduleSearchName: ''
    }
  }

  render() {
    const { onRequestModule, module, isFetching, error } = this.props
    const { moduleSearchName } = this.state
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
            <Paper elevation={1} style={{ padding: 20 }}>
              <TextField
                id="standard-full-width"
                placeholder="Enter npm module name..."
                fullWidth
                style={{ paddingLeft: 10, paddingRight: 10 }}
                margin="normal"
                onChange={evt =>
                  this.setState({ moduleSearchName: evt.target.value })
                }
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Button
                size="large"
                color="primary"
                variant="contained"
                style={{ marginTop: 15, textAlign: 'center', width: 250 }}
                onClick={() => onRequestModule(moduleSearchName)}>
                Search
              </Button>
            </Paper>

            {isFetching && <p>fetching...</p>}
            {module !== {} && (
              <React.Fragment>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </React.Fragment>
            )}
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
