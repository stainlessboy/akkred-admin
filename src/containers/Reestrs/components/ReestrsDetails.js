import _ from 'lodash'
import React from 'react'
import fp from 'lodash/fp'

import PropTypes from 'prop-types'
import * as ROUTES from '../../../constants/routes'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import LinearProgress from '../../../components/LinearProgress'
import {Link} from 'react-router'
import {BORDER_STYLE} from '../../../constants/styleConstants'
import {langTabValues, ARTICLE_TYPES} from 'constants/backendConstants'
import Tabs from 'components/MaterialUI/Tabs'
import LabeledValue from 'components/Utils/LabeledValue'
export const arrayObjToObj = (ARR) => fp.flow(
  fp.map(fp.values),
  fp.fromPairs
)(ARR)
const enhance = compose(
  injectSheet({
    // DETAILS
    loader: {
      display: 'flex',
      alignItems: 'center',
      height: '100px',
      position: 'relative',
      width: '100%'
    },
    details: {
      boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
      width: '100%'
    },
    detailTitle: {
      alignItems: 'center',
      borderBottom: BORDER_STYLE,
      display: 'flex',
      fontSize: '16px',
      fontWeight: '600',
      height: '65px',
      justifyContent: 'space-between',
      padding: '0 30px',
      position: 'relative'
    },
    closeDetail: {
      cursor: 'pointer',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '1'
    },
    detailContent: {
      lineHeight: '1.5',
      padding: '0 30px 30px',
      '& ul': {
        display: 'block',
        listStyleType: 'disc',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '40px'
      },
      '& img': {
        maxWidth: '100%'
      }
    }
  })
)

const ReestrsDetails = enhance((props) => {
  const {
    filter,
    data,
    loading,
    classes,
    actionButtons
  } = props

  const detailId = _.get(data, 'id')
  const tab = filter.getParam('tab') || 'Ru'

  if (loading) {
    return (
      <div className={classes.loader}>
        <LinearProgress/>
      </div>
    )
  }
  const title = _.get(data, 'title') || 'Нет контента...'
  const accreditationDate = _.get(data, 'accreditationDate') || 'Нет контента...'
  const accreditationDuration = _.get(data, 'accreditationDuration') || 'Нет контента...'
  const address = _.get(data, 'address') || 'Нет контента...'
  const area = _.get(data, 'area') || 'Нет контента...'
  const code = _.get(data, 'code') || 'Нет контента...'
  const designationOfTheFundamentalStandard = _.get(data, 'designationOfTheFundamentalStandard') || 'Нет контента...'
  const email = _.get(data, 'email') || 'Нет контента...'
  const formOwnership = _.get(data, 'formOwnership') || 'Нет контента...'
  const fullName = _.get(data, 'fullName') || 'Нет контента...'
  const inn = _.get(data, 'inn') || 'Нет контента...'
  const keywords = _.get(data, 'keywords') || 'Нет контента...'
  const number = _.get(data, 'number') || 'Нет контента...'
  const phone = _.get(data, 'phone') || 'Нет контента...'
  // const file = _.get(data, 'file.id') ? _.get(data, 'file.id') : _.get(data, 'file')
  const file = _.get(data, 'file.name') ? _.get(data, 'file.name') : _.get(data, 'file')
  const region = _.get(data, 'region') || 'Нет контента...'
  const statusDate = _.get(data, 'statusDate') || 'Нет контента...'
  const typeOrgan = _.get(data, 'typeOrgan') || 'Нет контента...'
  const STATUS_TYPES_LIST = [
    {id: 'active', name: 'Действующий'},
    {id: 'inactive', name: 'Прекращен'},
    {id: 'paused', name: 'Приостановлен'},
    {id: 'extended', name: 'Продлен'}
  ]

  const STATUS_TYPES = arrayObjToObj(STATUS_TYPES_LIST)

  const status = STATUS_TYPES[_.get(data, 'status')]

  return (
    <div
      key={detailId}
      className={classes.details}>
      <div className={classes.content}>
        <div className={classes.detailTitle}>
          <Link to={{
            pathname: ROUTES.REESTR_LIST_URL,
            query: filter.getParams()
          }} className={classes.closeDetail}/>
          <span>{_.get(data, 'title')}</span>
          {actionButtons(detailId)}
        </div>
        <div className={classes.detailContent}>

          <div style={{paddingTop: '30px'}}>
            {/* <LabeledValue label={'Наименование юридического лица ООС или МС'} value={title}/> */}
            <LabeledValue label={'Дата аккредитации'} value={accreditationDate}/>
            <LabeledValue label={'Срок действия свидетельства об аккредитации'} value={accreditationDuration}/>
            <LabeledValue label={'Юридический и фактический адрес'} value={address}/>
            <LabeledValue label={'Area'} value={area}/>
            <LabeledValue label={'Code'} value={code}/>
            <LabeledValue label={'Обозначение НД регламентирующих требования к оценке'} value={designationOfTheFundamentalStandard}/>
            <LabeledValue label={'Mail'} value={email}/>
            <LabeledValue label={'Форма собственности'} value={formOwnership}/>
            <LabeledValue label={'Ф.И.О. руководителя'} value={fullName}/>
            <LabeledValue label={'ИНН юридического лица'} value={inn}/>
            <LabeledValue label={'Keywords'} value={keywords}/>
            <LabeledValue label={'Номер государственного реестра'} value={number}/>
            <LabeledValue label={'Телефон, e-mail'} value={phone }/>
            <LabeledValue label={'Регион'} value={region}/>
            <LabeledValue label={'Status'} value={status}/>
            <LabeledValue label={'StatusDate'} value={statusDate}/>
            <LabeledValue label={'Вид ООС или МС'} value={typeOrgan}/>
            <LabeledValue label={'Ссылка на область аккредитации'} value={file}/>
          </div>
        </div>
      </div>
    </div>
  )
})

ReestrsDetails.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

export default ReestrsDetails
