import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const Result = ({ module, open, onResultClose, isFetching }) => (
  <React.Fragment>
    <Dialog
      open={open}
      onClose={onResultClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{isFetching ? 'Fetching module...' : module.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isFetching ? 'Fetching module description...': module.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onResultClose} color="primary">
          Thanks
        </Button>
        <Button onClick={onResultClose} color="primary" autoFocus>
          GitHub Repository
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
)

export default Result
