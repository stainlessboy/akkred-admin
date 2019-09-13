import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
const styles = {
  text: {
    padding: '6px 16px'
  }
}
const FlatButton = props => {
  const {label, classes, ...defaultProps} = props
  return (
    <Button variant="contained" {...defaultProps} classes={classes}>
      {label}
    </Button>
  )
}

FlatButton.propTypes = {
  label: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired
}

export default withStyles(styles)(FlatButton)
