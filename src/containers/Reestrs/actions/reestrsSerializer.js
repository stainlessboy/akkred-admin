import _ from 'lodash'
import {orderingSnakeCase} from '../../../helpers/serializer'
import moment from 'moment'

export const createSerializer = (data) => {
  const title = _.get(data, ['title'])
  const typeOrgan = _.get(data, ['typeOrgan'])
  const phone = _.get(data, ['phone'])
  const text = _.get(data, ['text'])
  const address = _.get(data, ['address'])
  const fullName = _.get(data, ['fullName'])
  const number = _.get(data, ['number'])
  const inn = _.get(data, ['inn'])
  const keywords = _.get(data, ['keywords'])
  const accreditationDate = moment(_.get(data, ['accreditationDate'])).format('YYYY-MM-DD')
  const statusDate = moment(_.get(data, ['statusDate'])).format('YYYY-MM-DD')
  const accreditationDuration = moment(_.get(data, ['accreditationDuration'])).format('YYYY-MM-DD')
  const formOwnership = _.get(data, ['formOwnership'])
  const status = _.get(data, ['status'])
  const area = _.get(data, ['area'])
  const designationOfTheFundamentalStandard = _.get(data, ['designationOfTheFundamentalStandard'])
  // Const file = _.get(data, 'file.id') ? _.get(data, 'file.id') : _.get(data, 'file')
  const file = _.get(data, ['file', 'id'])
  return {
    title,
    phone,
    area,
    file,
    address,
    text,
    full_name: fullName,
    type_organ: typeOrgan,
    form_ownership: formOwnership,
    designation_of_the_fundamental_standard: designationOfTheFundamentalStandard,
    number,
    keywords,
    inn,
    status,
    accreditation_date: accreditationDate,
    accreditation_duration: accreditationDuration,
    status_date: statusDate
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

