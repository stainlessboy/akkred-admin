import React from 'react'
import _ from 'lodash'
import Layout from '../../components/Layout'
import {compose} from 'recompose'
import setInitialValues from 'helpers/setInitialValues'
import {
  ReestrsGridList
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
} from './actions/reestrs'
import confirmWrapper from '../Wrappers/ConfirmWrapper'

const updateKeys = {
  title: 'title',
  phone: 'phone',
  area: 'area',
  file: 'file',
  address: 'address',
  text: 'text',
  fullName: 'fullName',
  typeOrgan: 'typeOrgan',
  formOwnership: 'formOwnership',
  designationOfTheFundamentalStandard: 'designationOfTheFundamentalStandard',
  number: 'number',
  keywords: 'keywords',
  inn: 'inn',
  status: 'status',
  accreditationDate: 'accreditationDate',
  accreditationDuration: 'accreditationDuration',
  statusDate: 'statusDate'
}

const enhance = compose(
  listWrapper({
    listFetchAction: articlesListFetchAction,
    storeName: 'reestr',
    except: {tab: null, createTab: null}
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

const ReestrsList = enhance((props) => {
  const {
    list,
    listLoading,
    detail,
    detailLoading,
    filter,
    layout,
    params,
    updateDialog
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

  const updateInitial = {
    type: {value: _.get(detail, 'type')},
    content: _.get(detail, 'content')
  }

  setInitialValues(updateDialog, updateInitial)
  return (
    <Layout {...layout}>
      <ReestrsGridList
        filter={filter}
        listData={listData}
        detailData={detailData}
        createDialog={props.createDialog}
        confirmDialog={props.confirmDialog}
        updateDialog={updateDialog}
      />
    </Layout>
  )
})

export default ReestrsList
