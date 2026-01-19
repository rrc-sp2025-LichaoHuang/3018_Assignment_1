import express, { Express, Request, Response } from "express";

const app: Express = express();

interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}


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