import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import MuiTabs from '@material-ui/core/Tabs'
import MuiTab from '@material-ui/core/Tab'
import withStyles from '@material-ui/core/styles/withStyles'
import {hashHistory} from 'react-router'

const styles = {
  root: {
    borderBottom: '1px solid #e8e8e8'
  },
  buttonRoot: {
    '@media (min-width: 960px)': {
      minWidth: 'unset'
    }
  }
}

const Tabs = props => {
  const {classes, values, filter, queryName, ...defaultProps} = props
  const defaultValue = _.get(values, '0.value')
  const tabValue = filter && (filter.getParam(queryName) || defaultValue)
  const onTabChange = (ev, detailTab) => hashHistory.replace(filter.createURL({[queryName]: detailTab}))
  return (
    <MuiTabs classes={{root: classes.root}} onChange={onTabChange} value={tabValue} {...defaultProps}>
      {_.map(values, (tab, index) => (
        <MuiTab
          key={index}
          classes={{root: classes.buttonRoot}}
          {...tab}/>
      ))}
    </MuiTabs>
  )
}
Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  values: PropTypes.array.isRequired,
  queryName: PropTypes.string
}
Tabs.defaultProps = {
  queryName: 'tab'
}
export default withStyles(styles)(Tabs)
