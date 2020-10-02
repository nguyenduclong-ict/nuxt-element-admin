interface RuleItem {
  required: boolean
  type:
    | 'string'
    | 'number'
    | 'boolean'
    | 'method'
    | 'regexp'
    | 'integer'
    | 'float'
    | 'array'
    | 'object'
    | 'enum'
    | 'date'
    | 'url'
    | 'hex'
    | 'email'
    | 'any'
  pattern: RegExp
  min: number
  max: number
  length: number
  enum: any[]
  whitespace: boolean
  transform: (value) => any
  message: string | (() => string)
  asyncValidator: (rule, value, callback) => Promise<any>
  validator: (rule, value, callback) => string | string[]
}

interface Rules {
  [x: string]: RuleItem[] | RuleItem
}

export declare function createRules(rules: Rules): Rules
