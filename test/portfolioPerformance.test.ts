import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("calculates excellent performance correctly", () => {
    const result = calculatePortfolioPerformance(10000, 13000);

    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(13000);
    expect(result.profitOrLoss).toBe(3000);
    expect(result.percentageChange).toBe(30);
    expect(result.performanceSummary).toBe(
      "Excellent performance! Your investments are doing great."
    );
  });
});