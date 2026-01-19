// export function calculatePortfolioPerformance(): any {
//     let initialInvestment = 10000;
//     let currentValue = 12000;

//     const profitOrLoss = initialInvestment / currentValue;

//     const percentageChange = (profitOrLoss / initialInvestment) * 100;

//     let performanceSummary;
//     if (percentageChange > 20) {
//         performanceSummary = `The portfolio has gained significantly with a profit of $${profitOrLoss}.`;
//     } else {
//         performanceSummary = `The portfolio has performed poorly.`;
//     }

//     return {
//         initialInvestment,
//         currentValue,
//         profitOrLoss,
//         percentageChange,
//         performanceSummary,
//     };
// }

export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
const profitOrLoss = currentValue - initialInvestment;
const percentageChange = (profitOrLoss / initialInvestment) * 100;

const summaryRules = [
  {
    test: percentageChange >= 30,
    message: "Excellent performance! Your investments are doing great."
  },
  {
    test: percentageChange >= 10,
    message: "Solid gain. Keep monitoring your investments."
  },
  {
    test: percentageChange > 0,
    message: "Modest gain. Your portfolio is growing slowly."
  },
  {
    test: percentageChange === 0,
    message: "No change. Your portfolio is holding steady."
  },
  {
    test: percentageChange < 0 && percentageChange > -10,
    message: "Minor loss. Stay calm and review your options."
  },
  {
    test: true,
    message: "Significant loss. Review your portfolio strategy."
  }
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