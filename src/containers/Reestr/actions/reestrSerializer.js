import _ from 'lodash'
import {orderingSnakeCase} from '../../../helpers/serializer'

export const createSerializer = (data) => {
  const title = _.get(data, ['title'])
  return {
    title
  }
}

export const listFilterSerializer = (data) => {
  const {...defaultData} = data
  const ordering = _.get(data, 'ordering')

  return {
    'name': _.get(defaultData, 'name'),
    'search': _.get(defaultData, 'search'),
    'page': _.get(defaultData, 'page'),
    'page_size': _.get(defaultData, 'pageSize'),
    'ordering': ordering && orderingSnakeCase(ordering)
  }
}

