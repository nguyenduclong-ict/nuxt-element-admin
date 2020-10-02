export const inputProps = {
  value: [String, Number],
  size: String,
  resize: String,
  form: String,
  disabled: Boolean,
  readonly: Boolean,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  autosize: {
    type: [Boolean, Object],
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  suffixIcon: String,
  prefixIcon: String,
  label: String,
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  tabindex: String,
}
