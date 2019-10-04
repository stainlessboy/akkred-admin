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
  title: 'title',
}

const enhance = compose(
  listWrapper({
    listFetchAction: articlesListFetchAction,
    storeName: 'regions'
  }),
  detailWrapper({
    itemFetchAction: articlesItemFetchAction,
    storeName: 'regions',
    paramName: 'regionsId'
  }),
  createWrapper({
    createAction: articlesCreateAction,
    formName: 'ArticlesCreateForm',
    storeName: 'regions.create'
  }),
  updateWrapper({
    updateKeys,
    updateAction: articlesUpdateAction,
    formName: 'ArticlesCreateForm',
    storeName: 'regions'
  }),
  confirmWrapper({
    storeName: 'regions',
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

  const detailId = _.toInteger(_.get(params, 'regionsId'))

  const listData = {
    data: _.get(list, 'results'),
    listLoading
  }

  const detailData = {
    id: detailId,
    data: detail,
    detailLoading
  }

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
