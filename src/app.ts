import express, { Express, Request, Response } from "express";

const app: Express = express();
/**
 * Represents the response structure for the health check endpoint.
 *
 * This interface defines the JSON object returned by
 * the `/api/v1/health` endpoint.
 */
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

/**
 * Health check endpoint.
 *
 * This endpoint allows clients or monitoring tools to verify
 * that the API is running and responsive.
 *
 * @route GET /api/v1/health
 * @returns A JSON object containing service health information.
 */
app.get("/api/v1/health", (req: Request, res: Response) => {
  const healthData: HealthCheckResponse = {
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };

  res.json(healthData);
});

import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";
/**
 * Portfolio performance calculation endpoint.
 *
 * This endpoint calculates the performance of a financial portfolio
 * based on query parameters provided by the client.
 *
 * @route GET /api/v1/portfolio/performance
 * @param initialInvestment - The original investment amount (query parameter)
 * @param currentValue - The current value of the investment (query parameter)
 * @returns A JSON object containing portfolio performance metrics.
 */
app.get("/api/v1/portfolio/performance", (req, res) => {
  const initialInvestment = Number(req.query.initialInvestment);
  const currentValue = Number(req.query.currentValue);

  const result = calculatePortfolioPerformance(
    initialInvestment,
    currentValue
  );

  res.json(result);
});

export default app;