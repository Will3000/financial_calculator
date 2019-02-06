function futureValue( amount, rate, years ) {
  return Math.round( amount* Math.pow((1 + rate), years) )
}

export {
	futureValue
}