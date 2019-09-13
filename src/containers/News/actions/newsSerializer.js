import _ from 'lodash'
import {orderingSnakeCase} from '../../../helpers/serializer'

export const createSerializer = (data) => {

  const title = _.get(data, ['titleEn'])
  const titleRu = _.get(data, ['titleRu'])
  const titleUz = _.get(data, ['titleUz'])
  const text = _.get(data, ['textEn'])
  const textUz = _.get(data, ['textUz'])
  const textRu = _.get(data, ['textRu'])
  const photo = _.get(data, 'photo.id') ? _.get(data, 'photo.id') : _.get(data, 'photo')
  return {
    title_en: title,
    title_ru: titleRu,
    title_uz: titleUz,
    photo,
    text_en: text,
    text_ru: textRu,
    text_uz: textUz

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

