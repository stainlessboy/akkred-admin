import React from 'react'
import {compose, withState} from 'recompose'
import PropTypes from 'prop-types'
import MUIPopover from '@material-ui/core/Popover'
import withStyles from '@material-ui/core/styles/withStyles'
const styles = {
  text: {
    padding: '6px 16px'
  }
}
const enhance = compose(
  withState('elem', 'setElem', null),
  withStyles(styles)

)
const FIRST = 0
const SECOND = 1
const Popover = props => {
  const {elem, setElem, children} = props
  const open = Boolean(elem)

  const childProps = {
    'aria-owns': open ? 'render-props-popover' : null,
    'aria-haspopup': true,
    'variant': 'contained',
    'onClick': event => setElem(event.currentTarget)
  }
  return (
    <React.Fragment>
      {React.cloneElement(children[FIRST], childProps)}
      <MUIPopover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        id="render-props-popover"
        open={open}
        anchorEl={elem}
        onClose={() => setElem(null)}
      >
        {children[SECOND]}
      </MUIPopover>
    </React.Fragment>
  )
}
Popover.propTypes = {
  open: PropTypes.bool

}
export default enhance(Popover)
