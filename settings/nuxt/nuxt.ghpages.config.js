import baseConfig from '../../nuxt.config'
import _ from '../../lib/utils/external/lodash'

const config = _.mergeWith(
  baseConfig,
  {
    ssr: false,
    target: 'static',
    router: {
      base: '/nuxt-element-admin/',
    },
  },
  _.customDefaultsMerge
)

export default config
