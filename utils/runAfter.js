
export const runAfter = utils.decorate(function (target, name, descriptor, handle) {
  const raw = descriptor.value
  descriptor.value = async function () {
    try {
      return await raw.apply(this, arguments)
    } finally {
      this[handle]()
    }
  }
})
