import {
  FIELD_LABEL,
  FIELD_NAME,
  FIELD_PLACEHOLDER,
} from './addTaskForm.constants'

export const formConfig = [
  {
    id: '1',
    name: FIELD_NAME.TITLE,
    label: FIELD_LABEL.TITLE,
    placeholder: FIELD_PLACEHOLDER.TITLE,
  },
  {
    id: '2',
    name: FIELD_NAME.DESCRIPTION,
    label: FIELD_LABEL.DESCRIPTION,
    placeholder: FIELD_PLACEHOLDER.DESCRIPTION,
  },
  {
    id: '3',
    name: FIELD_NAME.DATE,
    label: FIELD_LABEL.DATE,
    placeholder: FIELD_PLACEHOLDER.DATE,
  },
  {
    id: '4',
    name: FIELD_NAME.LOCATION,
    label: FIELD_LABEL.LOCATION,
    placeholder: FIELD_PLACEHOLDER.LOCATION,
  },
]
