import _ from 'lodash'
import toSnakeCase from './toSnakeCase'
import numberWithoutSpaces from './numberWithoutSpaces'
export default (keys, data) => toSnakeCase(
  _.chain(keys)
    .mapKeys(key => key)
    .mapValues(path => {
      const value = _.get(data, `${path}.value`)
      if (_.isNull(value) || _.isUndefined(value) || value === '') return _.get('')

      if (_.isBoolean(value)) {
        return value
      }

      if (_.isArray(value)) {
        return value
      }

      if (_.isNaN(_.toNumber(value))) {
        return value
      }

      return numberWithoutSpaces(value)
    })
    .value()
)

export const formInitialValues = (keys, data) => _.chain(keys)
  .mapKeys(key => key)
  .mapValues(path => {
    const value = _.get(data, `${path}.id`) || _.get(data, path)

    // Ignore undefined and Null Values
    if (_.isNull(value) || _.isUndefined(value)) {
      return _.get('')
    }

    // Handle Array Like Values
    if (_.get(_.head(value), 'id')) {
      const values = _.map(value, i => i.id)
      return {value: values}
    }
    // Handle Boolean (true/false) values
    if (_.isBoolean(value)) {
      return {value}
    }

    // Handle Non Numeric values
    if (_.isNaN(_.toNumber(value))) {
      return {value}
    }
    // Handle Numeric values
    return {value: _.toNumber(value)}
  })
  .value()
