import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress';

const Result = ({ module, open, onResultClose, isFetching }) => (
  <React.Fragment>
    <Dialog
      open={open}
      onClose={onResultClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{module.name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isFetching ? <CircularProgress /> : module.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onResultClose} color="primary">
          Disagree
        </Button>
        <Button onClick={onResultClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
)

export default Result
