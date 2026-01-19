
/**
 * Represents the result of a portfolio performance calculation.
 *
 * This interface defines the structure of the object returned by
 * `calculatePortfolioPerformance`. All fields correspond to values
 * calculated based on an initial investment and current value.
 */
export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

/**
 * Calculates the performance of a financial portfolio.
 *
 * This function takes an initial investment and its current value and returns
 * an object conforming to `PortfolioPerformance`. The result includes the
 * profit or loss, the percentage change, and a performance summary message.
 *
 * The performance summary is selected based on defined thresholds:
 * - >= 30%: "Excellent performance! Your investments are doing great."
 * - >= 10%: "Solid gain. Keep monitoring your investments."
 * - > 0%:   "Modest gain. Your portfolio is growing slowly."
 * - 0%:     "No change. Your portfolio is holding steady."
 * - < 0% and > -10%: "Minor loss. Stay calm and review your options."
 * - <= -10%: "Significant loss. Review your portfolio strategy."
 *
 * @param initialInvestment - The amount originally invested.
 * @param currentValue - The value of the investment at the current time.
 * @returns An object containing investment performance metrics and summary.
 */
export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
const profitOrLoss = currentValue - initialInvestment;
const percentageChange = (profitOrLoss / initialInvestment) * 100;

const summaryRules = [
  { test: percentageChange >= 30, message: "Excellent performance! Your investments are doing great." },
  { test: percentageChange >= 10, message: "Solid gain. Keep monitoring your investments." },
  { test: percentageChange > 0,  message: "Modest gain. Your portfolio is growing slowly." },
  { test: percentageChange === 0, message: "No change. Your portfolio is holding steady." },
  { test: percentageChange < 0 && percentageChange > -10, message: "Minor loss. Stay calm and review your options." },
  { test: true, message: "Significant loss. Review your portfolio strategy." }
];

  const performanceSummary =
    summaryRules.find(rule => rule.test)?.message ?? "";

return {
  initialInvestment,
  currentValue,
  profitOrLoss,
  percentageChange,
  performanceSummary
};
}