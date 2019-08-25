function isDisabled(errors, touched) {
  return Object.entries(errors).some(([k, v]) => {
    if (typeof v !== "undefined" && typeof touched[k] !== "undefined") {
      return true
    }
    return false
  })
}

export default isDisabled
