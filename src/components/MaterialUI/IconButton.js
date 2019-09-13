import React from 'react'
import MuiIconButton from '@material-ui/core/IconButton'
const IconButton = props => {
  const {children, ...defaultProps} = props
  return (
    <MuiIconButton {...defaultProps}>
      {children}
    </MuiIconButton>
  )
}

IconButton.propTypes = {
}

export default IconButton
