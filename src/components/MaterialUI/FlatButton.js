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
  const {label, classes, withBorder, ...defaultProps} = props
  return (
    <Button {...defaultProps} classes={classes} variant={withBorder ? 'outlined' : 'text'}>
      {label}
    </Button>
  )
}

FlatButton.propTypes = {
  label: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  withBorder: PropTypes.bool.isRequired
}

export default withStyles(styles)(FlatButton)
