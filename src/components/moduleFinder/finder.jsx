import React from 'react';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const Finder = ({
  moduleName,
  onModuleNameChange,
  onRequestModule,
  isFetching
}) => (
  <Paper elevation={1} style={{ padding: 20 }}>
    <TextField
      id="standard-full-width"
      placeholder=""
      label="Enter package name.."
      fullWidth
      style={{ paddingLeft: 10, paddingRight: 10 }}
      margin="normal"
      value={moduleName}
      onChange={evt => onModuleNameChange(evt.target.value)}
      InputLabelProps={{
        shrink: true
      }}
    />
    <Button
      size="large"
      color="primary"
      variant="contained"
      style={{ marginTop: 15, textAlign: 'center', width: 250 }}
      disabled={isFetching}
      onClick={() => onRequestModule(moduleName)}>
      Search
    </Button>
  </Paper>
)

export default Finder
