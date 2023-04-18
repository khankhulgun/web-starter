import { App } from "vue";
import {getNumber, getMoney} from '~/utils/number'
import {getDate} from '~/utils/date'
import {imageFilePath} from '~/utils/image'
import {youTubeLinker} from '~/utils/youTubeLinker'
import {copyUrl} from '~/utils/copyUrl'
/**
 * Initialize Global Filters
 * @param app vue instance
 */
export function initFilters(app: App<Element>) {
  app.config.globalProperties.$number = (value)=>{
    return getNumber(value)
  }
  app.config.globalProperties.$date = (value)=>{
    return getDate(value)
  }
  app.config.globalProperties.$currencyMNT = (value)=>{
    return getMoney(value)
  }
  app.config.globalProperties.$imageFilePath = (value)=>{
    return imageFilePath(value)
  }
  app.config.globalProperties.$youTubeLinker = (value)=>{
    return youTubeLinker(value)
  }
  app.config.globalProperties.$copyUrl = ()=>{
    return copyUrl()
  }
}
