import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Loader from 'components/Loader'
import {Field, reduxForm} from 'redux-form'
import {
  ImageUploadField,
  TextField,
  StaticUniversalSearchField, DateField, UniversalSearchField, DateCustomField
} from 'components/ReduxForm'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
import t from 'helpers/translate'
import Editor from 'components/ReduxForm/Editor/Editor'
import {ARTICLE_TYPES_LIST, langTabValues} from 'constants/backendConstants'
import Tabs from 'components/MaterialUI/Tabs'
import * as API from '../../../constants/api'
import {STATUS_LIST} from '../../Reestr/components/ReestrCreateDialog'
import FileSimpleUploadField from 'components/ReduxForm/Basic/FileSimpleUploadField'

export const ARTICLES_CREATE_DIALOG_OPEN = 'openCreateDialog'

const enhance = compose(
  injectSheet({
    dialog: {
      overflowY: 'auto'
    },
    loader: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#fff',
      top: '0',
      left: '0',
      alignItems: 'center',
      zIndex: '999',
      justifyContent: 'center',
      display: ({loading}) => loading ? 'flex' : 'none'
    },
    popUp: {
      color: '#333 !important',
      overflowY: 'unset !important',
      overflowX: 'unset !important',
      fontSize: '13px !important',
      position: 'relative',
      padding: '0 !important',
      height: '100%',
      maxHeight: 'none !important',
      marginBottom: '64px'
    },
    titleContent: {
      background: '#fff',
      color: '#333',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #efefef',
      padding: '0 10px 0 30px',
      height: '60px',
      zIndex: '999'
    },
    inContent: {
      display: 'flex',
      minHeight: '184px',
      overflow: 'unset',
      padding: '0 30px 20px',
      color: '#333'
    },
    bodyContent: {
      width: '100%'
    },
    form: {
      position: 'relative'
    },
    field: {
      width: '100%'
    },
    bottomButton: {
      bottom: '0',
      left: '0',
      right: '0',
      padding: '10px',
      zIndex: '999',
      borderTop: '1px solid #efefef',
      background: '#fff',
      textAlign: 'right',
      '& span': {
        fontSize: '13px !important',
        fontWeight: '600 !important',
        color: '#129fdd',
        verticalAlign: 'inherit !important'
      }
    },
    inputDateCustom: {
      fontSize: '13px !important',
      height: '45px !important',
      marginTop: '7px',
      '& > div:first-child': {
        fontSize: '13px !important'
      },
      '& label': {
        top: '20px !important',
        lineHeight: '5px !important'
      },
      '& input': {
        marginTop: '0 !important'
      },
      '& div:first-child': {
        height: '45px !important'
      }
    },
    textFieldArea: {
      top: '-20px !important',
      lineHeight: '20px !important',
      fontSize: '13px !important',
      '& textarea': {
        overflow: 'hidden'
      }
    },
    actionButton: {
      fontSize: '13px !important',
      margin: '0 !important'
    },
    imageField: {
      marginBottom: '10px',
      '& .imageDropZone': {
        width: '100%',
        minHeight: '100px'
      }
    }
  }),
  reduxForm({
    form: 'ArticlesCreateForm',
    enableReinitialize: true
  })
)

const ReestrsCreateDialog = enhance((props) => {
  const {open, handleSubmit, onClose, classes, isUpdate, filter} = props
  const formNames = ['title', 'text', 'address', 'fullName', 'inn']
  const onSubmit = handleSubmit(() => props.onSubmit(formNames))
  return (
    <Dialog
      modal={true}
      open={open}
      onRequestClose={onClose}
      className={classes.dialog}
      contentStyle={{width: '500px'}}
      bodyStyle={{minHeight: 'auto'}}
      bodyClassName={classes.popUp}>
      <div className={classes.titleContent}>
        <span>{isUpdate ? t('Изменить статью') : t('Добавить реестр')}</span>
        <IconButton onClick={onClose}>
          <CloseIcon color="#666666"/>
        </IconButton>
      </div>
      <div className={classes.bodyContent}>
        <form onSubmit={onSubmit} className={classes.form} style={{minHeight: 'auto'}}>
          <div className={classes.loader}>
            <Loader size={0.75}/>
          </div>
          <div className={classes.inContent} style={{minHeight: '100px', paddingTop: '15px'}}>
            <div className={classes.field}>
              <Field
                name="title"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Наименование органа')}
                fullWidth={true}/>
              <Field
                name="phone"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Телефон, e-mail:')}
                fullWidth={true}/>
              <Field
                name="address"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Юридический и фактический адрес')}
                fullWidth={true}/>
              <Field
                name="designationOfTheFundamentalStandard"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Обозначения основополагающего стандарта')}
                fullWidth={true}/>
              <Field
                name="formOwnership"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Форма собственности')}
                fullWidth={true}/>
              <Field
                name="fullName"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Ф.И.О. руководителя')}
                fullWidth={true}/>
              <Field
                name="area"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('area')}
                fullWidth={true}/>
              <Field
                name="number"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Номер в Госреестре')}
                fullWidth={true}/>
              <Field
                name="inn"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('ИНН')}
                fullWidth={true}/>
              <Field
                name="keywords"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Ключевые слова')}
                fullWidth={true}/>
              <Field
                name="text"
                component={TextField}
                className={classes.inputFieldCustom}
                label={t('Область аккредитации')}
                fullWidth={true}/>
              <Field
                name="accreditationDate"
                component={DateField}
                className={classes.inputFieldCustom}
                label={t('Дата аккредитации')}
                fullWidth={true}/>
              <Field
                name="accreditationDuration"
                component={DateField}
                className={classes.inputFieldCustom}
                label={t('Срок действия аккредитации')}
                fullWidth={true}/>
              <Field
                name="statusDate"
                component={DateField}
                className={classes.inputFieldCustom}
                label={t('Дата статуса')}
                fullWidth={true}/>

              <Field
                name="region"
                component={UniversalSearchField}
                textName={'title'}
                listPath={API.REGIONS_LIST}
                // ItemPath={API.REGIONS_ITEM}
                label={'Регион'}
                className={classes.inputFieldCustom}
                fullWidth={true}/>

              <Field
                name="typeOrgan"
                component={UniversalSearchField}
                listPath={API.ORGANS_LIST}
                textName={'title'}

                  // ItemPath={API.REGIONS_ITEM}
                label={'Органы'}
                className={classes.inputFieldCustom}
                fullWidth={true}/>

              <Field
                name="status"
                // ItemPath={API.REGIONS_ITEM}
                label={'Статус'}
                component={StaticUniversalSearchField}
                items={STATUS_LIST}
              />

              <Field
                name={'file'}
                withfileDetails={true}
                label={'Загрузит файл '}
                component={FileSimpleUploadField}
              />
            </div>
          </div>
          <div className={classes.bottomButton}>
            <FlatButton
              color={'primary'}
              type={'submit'}
              label={'Сохранить'}
            />
          </div>
        </form>
      </div>
    </Dialog>
  )
})

ReestrsCreateDialog.propTypes = {
  isUpdate: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

ReestrsCreateDialog.defaultProps = {
  isUpdate: false
}

export default ReestrsCreateDialog
