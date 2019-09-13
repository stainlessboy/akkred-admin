import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
const style = {
  className: {
    fontWeight: '600',
    lineHeight: '2',
    '&:first-child': {
      marginTop: '0'
    },
    '& span': {
      fontWeight: 'normal',
      color: ({value}) => value ? '' : '#999'
    }
  }
}
const LabeledName = ({label, value, classes}) => {
  return (
    <div className={classes.className}>
      {label}: <span>{value || 'Не указано'}</span>
    </div>
  )
}

LabeledName.propTypes = {
  value: PropTypes.any,
  label: PropTypes.any,
  classes: PropTypes.object.isRequired
}

export default injectSheet(style)(LabeledName)
