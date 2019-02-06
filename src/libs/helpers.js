function futureValue( amount, rate, years ) {
  return amount* Math.pow((1 + rate), years)
}

export {
	futureValue
}