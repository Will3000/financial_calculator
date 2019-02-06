const validate = (value, isPercentage=false) => {
	value = parseFloat(value, 10)
  if ( isNaN(value) ) {
    return false
  } else {
    return true
  }
}

export {
	validate
}