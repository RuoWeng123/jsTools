export const runBefore = utils.decorate(function (target, name, descriptor, handle) {
  const raw = descriptor.value
  descriptor.value = async function () {
    try {
      const flag = await this[handle]()
      flag && raw.apply(this, arguments)
    } catch (err) {
    }
  }
})