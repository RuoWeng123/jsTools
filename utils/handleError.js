import { decorate } from './decorate'
import {Message} from "element-ui"
export const handleError = utils.decorate(function (target, name, descriptor, {success, error} = {}) {
  const raw = descriptor.value
  descriptor.value = async function () {
    try {
      const ret = await raw.apply(this, arguments)
      success && Message({type:'success',message:success || '操作成功'})
      return ret
    } catch (err) {
      Message({type:'error', message: error || err.message})
      return null
    }
  }
})