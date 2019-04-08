import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleMenu = this.handleMenu.bind(this)
  }

  handleMenu = open => {
    this.setState({ open })
  }

  render() {
    const { open } = this.state
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={() => this.handleMenu(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            NpmGui
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <SwipeableDrawer
          open={open}
          onClose={() => this.handleMenu(false)}
          onOpen={() => this.handleMenu(true)}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.handleMenu(false)}
            onKeyDown={() => this.handleMenu(false)}>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </AppBar>
    )
  }
}

export default Header
