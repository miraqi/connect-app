/**
 * DesignOption section
 */
import React from 'react'
import PT from 'prop-types'
import { withRouter } from 'react-router-dom'
import FormsyForm from 'appirio-tech-react-components/components/Formsy'
const Formsy = FormsyForm.Formsy
const TCFormFields = FormsyForm.Fields
import TextInputWithCounter from '../../../../components/TextInputWithCounter/TextInputWithCounter'
import LinkList from '../timeline/LinkList'
import styles from './DesignOption.scss'

class DesignOption extends React.Component {
  render() {
    const { index, content, onDeleteOption, onUpdateField } = this.props
    const { title, submissionId, previewUrl, links } = content
    return (
      <div className={`${styles['container']}`}>
        <div className={`${styles['left-column']}`}>
          <div className={`${styles['image-container']}`}>
            <img className={`${styles['preview-img']}`} src={previewUrl} />
          </div>
        </div>
        <div className={`${styles['right-column']}`}>
          <Formsy.Form
            ref="form"
            className={`${styles['form-container']}`}
            disabled={false}
            // onInvalid={() => {}}
            // onValid={() => {}}
            // onValidSubmit={() => {}}
            // onChange={() => {}}
          >
            <TextInputWithCounter
              wrapperClass={`${styles['title-input']}`}
              label="Title"
              name="title-input"
              type="text"
              maxLength="64"
              disabled={false}
              value={title}
              onChange={(name, value) => {
                onUpdateField(index, 'title', value)
              }}
            />
            <TCFormFields.TextInput
              wrapperClass={`${styles['submission-id-input']}`}
              label="Submission Id"
              name="submission-id-input"
              type="number"
              disabled={false}
              value={submissionId}
              onChange={(name, value) => {
                onUpdateField(index, 'submissionId', value)
              }}
            />
            <TCFormFields.TextInput
              wrapperClass={`${styles['preview-link-input']}`}
              label="Preview URL"
              name="preview-link-input"
              type="text"
              disabled={false}
              value={previewUrl}
              onChange={(name, value) => {
                onUpdateField(index, 'previewUrl', value)
              }}
            />
            <div className={`${styles['links-wrapper']}`}>
              <div className={`${styles['links-title']}`}>Presentation links</div>
              <LinkList
                links={links}
                onAddLink={(values, linkIndex) => {
                  links.splice(linkIndex, 1, values)
                  onUpdateField(index, 'links', links)
                }}
                onRemoveLink={(linkIndex) => {
                  if (!window.confirm('Are you sure you want to remove this link?')) {
                    return
                  }
                  links.splice(linkIndex, 1)
                  onUpdateField(index, 'links', links)
                }}
                onUpdateLink={(values, linkIndex) => {
                  links.splice(linkIndex, 1, values)
                  onUpdateField(index, 'links', links)
                }}
                fields={[{
                  name: 'title',
                  value: `Design ${links.length + 1}`,
                  maxLength: 64,
                }, {
                  name: 'url'
                }]}
                addButtonTitle="Add design link"
                formAddTitle="Add Design Link"
                formAddButtonTitle="Add link"
                formUpdateTitle="Editing link"
                formUpdateButtonTitle="Save changes"
                // isUpdating={milestone.isUpdating}
                // fakeName={`Design ${links.length + 1}`}
                canAddLink
              />
            </div>
            <div className={`${styles['button-wrapper']}`}>
              <button className={`${styles['delete-btn']} tc-btn tc-btn-warning tc-btn-sm action-btn`} onClick={() => { onDeleteOption(index) }}>Delete</button>
              <button className={`${styles['cancel-btn']} tc-btn tc-btn-default tc-btn-sm action-btn`} onClick={() => {}}>Cancel</button>
              <button className={`${styles['save-changes-btn']} tc-btn tc-btn-primary tc-btn-sm action-btn`} onClick={() => {}}>Save changes</button>
            </div>
          </Formsy.Form>
        </div>
      </div>
    )
  }
}

DesignOption.defaultProps = {
}

DesignOption.propTypes = {
  index: PT.number.isRequired,
  content: PT.shape({
    title: PT.string,
    submissionId: PT.string,
    previewUrl: PT.string,
    attachmentId: PT.string,
    links: PT.arrayOf(PT.shape({
      title: PT.string,
      url: PT.string
    }))
  }).isRequired,
  onDeleteOption: PT.func.isRequired,
  onUpdateField: PT.func.isRequired
}

export default withRouter(DesignOption)
