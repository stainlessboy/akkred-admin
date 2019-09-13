import React from 'react'
import _ from 'lodash'
import Layout from '../../components/Layout'
import {compose} from 'recompose'
import {
  ReestrGridList
} from './components'
import {
  listWrapper,
  detailWrapper,
  createWrapper,
  updateWrapper
} from '../Wrappers'

import {
  articlesCreateAction,
  articlesUpdateAction,
  articlesListFetchAction,
  articlesDeleteAction,
  articlesItemFetchAction
} from './actions/reestr'
import confirmWrapper from '../Wrappers/ConfirmWrapper'

const updateKeys = {
  photo: 'image',
  title: 'title',
  text: 'text',
  intro: 'intro'
}

const enhance = compose(
  listWrapper({
    listFetchAction: articlesListFetchAction,
    storeName: 'reestr'
  }),
  detailWrapper({
    itemFetchAction: articlesItemFetchAction,
    storeName: 'reestr',
    paramName: 'reestrId'
  }),
  createWrapper({
    createAction: articlesCreateAction,
    formName: 'ArticlesCreateForm',
    storeName: 'reestr.create'
  }),
  updateWrapper({
    updateKeys,
    updateAction: articlesUpdateAction,
    formName: 'ArticlesCreateForm',
    storeName: 'reestr'
  }),
  confirmWrapper({
    storeName: 'reestr',
    confirmAction: articlesDeleteAction,
    successMessage: 'Успешно удалено',
    failMessage: 'Удаление невозможно из-за связи с другими данными'
  })
)

const ReestrList = enhance((props) => {
  const {
    list,
    listLoading,
    detail,
    detailLoading,
    filter,
    layout,
    params
  } = props

  const detailId = _.toInteger(_.get(params, 'reestrId'))

  const listData = {
    data: _.get(list, 'results'),
    listLoading
  }

  const detailData = {
    id: detailId,
    data: detail,
    detailLoading
  }
  console.warn(props)
  return (
    <Layout {...layout}>
      <ReestrGridList
        filter={filter}
        listData={listData}
        detailData={detailData}
        createDialog={props.createDialog}
        confirmDialog={props.confirmDialog}
        updateDialog={props.updateDialog}
      />
    </Layout>
  )
})

export default ReestrList
