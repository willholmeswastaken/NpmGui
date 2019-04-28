import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Links from './links'

const Result = ({ module, open, onResultClose, isFetching }) => (
  <React.Fragment>
    <Dialog
      open={open}
      fullWidth
      onClose={onResultClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {isFetching
          ? 'Fetching module...'
          : module !== null && `Package: ${module.name} - v${module.version}`}
      </DialogTitle>
      <DialogContent>
        {isFetching
          ? 'Fetching module description...'
          : module !== null && (
              <div>
                <h5>Published by:</h5>
                <p>
                  {module.publisher.username} ({module.publisher.email})
                </p>
                <h5>Description:</h5>
                <p>{module.description}</p>
                <Links links={module.links} />
              </div>
            )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onResultClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
)

export default Result
