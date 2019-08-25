const _registry = {}

class Registry {
  static get(key) {
    return _registry[key]
  }

  static set(key, value) {
    if (Object.prototype.hasOwnProperty.call(_registry, key)) {
      return
    }
  
    _registry[key] = value
  }

  static forceSet(key, value) {
    _registry[key] = value
  }
}

export default Registry
