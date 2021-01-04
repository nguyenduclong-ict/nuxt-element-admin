import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isBetween from 'dayjs/plugin/isBetween'
import 'dayjs/locale/vi'

dayjs.extend(customParseFormat)
dayjs.extend(isBetween)
dayjs.locale('vi')

export default dayjs
