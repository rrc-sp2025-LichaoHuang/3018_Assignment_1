import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerformance", () => {
  it("should calculates excellent performance correctly", () => {
    // Argue and Act
    const result = calculatePortfolioPerformance(10000, 13000);
    // Assert
    expect(result.initialInvestment).toBe(10000);
    expect(result.currentValue).toBe(13000);
    expect(result.profitOrLoss).toBe(3000);
    expect(result.percentageChange).toBe(30);
    expect(result.performanceSummary).toBe(
      "Excellent performance! Your investments are doing great."
    );
  });
});

it("should calculate solid gain performance correctly", () => {
  // Argue and Act
    const result = calculatePortfolioPerformance(10000, 11500);
  // Assert
    expect(result.profitOrLoss).toBe(1500);
    expect(result.percentageChange).toBe(15);
    expect(result.performanceSummary).toBe(
    "Solid gain. Keep monitoring your investments."
  );
});

it("should calculate no change performance correctly", () => {
    // Argue and Act
    const result = calculatePortfolioPerformance(10000, 10000);
    // Assert
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe(
    "No change. Your portfolio is holding steady."
  );
});

it("should calculate significant loss performance correctly", () => {
    // Argue and Act
    const result = calculatePortfolioPerformance(10000, 8500);

    expect(result.profitOrLoss).toBe(-1500);
    expect(result.percentageChange).toBe(-15);
    expect(result.performanceSummary).toBe(
    "Significant loss. Review your portfolio strategy."
  );
});