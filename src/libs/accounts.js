class Account {
	constructor( amountOfDeposit, avgRetirementTaxRate, currMarginalTaxRate, inflationRate, returnOnInvestment, yearsInvested ) {
		this.amountOfDeposit = amountOfDeposit
		this.avgRetirementTaxRate = avgRetirementTaxRate
		this.currMarginalTaxRate = currMarginalTaxRate
		this.inflationRate = inflationRate
		this.returnOnInvestment = returnOnInvestment
		this.yearsInvested = yearsInvested
		this.realRate = (1+returnOnInvestment) / (1+inflationRate) - 1
	}
	futureValue( amount, rate, years ) {
    return amount* Math.pow((1 + rate), years)
	}
}

class TFSA extends Account{
	constructor( amountOfDeposit, avgRetirementTaxRate, currMarginalTaxRate, inflationRate, returnOnInvestment, yearsInvested ) {
		super(amountOfDeposit, avgRetirementTaxRate, currMarginalTaxRate, inflationRate, returnOnInvestment, yearsInvested)
	}
	calculateAfterTaxAmount() {
    this.afterTaxAmount = this.amountOfDeposit * (1 - this.currMarginalTaxRate)
	}
}

class RRSP extends Account{
	constructor( amountOfDeposit, avgRetirementTaxRate, currMarginalTaxRate, inflationRate, returnOnInvestment, yearsInvested ) {
		super(amountOfDeposit, avgRetirementTaxRate, currMarginalTaxRate, inflationRate, returnOnInvestment, yearsInvested)
	}
	calculateAfterTaxAmount() {
			
	}
}