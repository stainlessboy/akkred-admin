import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import * as ROUTES from '../../../constants/routes'
import injectSheet from 'react-jss'
import {compose} from 'recompose'
import LinearProgress from '../../../components/LinearProgress'
import {Link} from 'react-router'
import {BORDER_STYLE} from '../../../constants/styleConstants'
import t from "../../../helpers/translate";
// import HtmlContent from 'components/Utils/HtmlContent'

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
      padding: '20px 30px 30px'
    }
  })
)

const ReestrDetails = enhance((props) => {
  const {
    filter,
    data,
    loading,
    classes,
    actionButtons
  } = props

  const detailId = _.get(data, 'id')

  if (loading) {
    return (
      <div className={classes.loader}>
        <LinearProgress/>
      </div>
    )
  }

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
        <div><strong>Дата аккредитации:</strong><span>{_.get(data, 'accreditationDate')}</span></div>
        <div><strong>Срок действия свидетельства об аккредитации:</strong> <span>{_.get(data, 'accreditationDuration')}</span></div>
        <div><strong>Юридический и фактический адрес:</strong> <span>{_.get(data, 'address')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'area')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'code')}</span></div>
        <div><strong>Обозначение НД регламентирующих требования к оценке и компетентности ООС или МС::</strong> <span>{_.get(data, 'designationOfTheFundamentalStandard')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'email')}</span></div>
        <div><strong>Форма собственности:</strong> <span>{_.get(data, 'formOwnership')}</span></div>
        <div><strong>Ф.И.О. руководителя:</strong> <span>{_.get(data, 'fullName')}</span></div>
        <div><strong>ИНН юридического лица:</strong> <span>{_.get(data, 'inn')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'keywords')}</span></div>
        <div><strong>Номер государственного реестра:</strong> <span>{_.get(data, 'number')}</span></div>
        <div><strong>Телефон, e-mail:</strong> <span>{_.get(data, 'phone')}</span></div>
        <div><strong>Регион:</strong> <span>{_.get(data, 'region')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'status')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'statusDate')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'text')}</span></div>
        <div><strong>Наименование юридического лица ООС или МС:</strong> <span>{_.get(data, 'title')}</span></div>
        <div><strong>Article:</strong> <span>{_.get(data, 'typeOrgan')}</span></div>
        <div><strong>Вид ООС или МС:</strong> INN</div>

      </div>
    </div>
  )
})

ReestrDetails.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.object
}

export default ReestrDetails
