import { Injectable } from '@nestjs/common';
import { Decimal } from 'decimal.js';

@Injectable()
export class WebSocketService {
  async sleep(ms: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getYCoordinate(xCoordinate: number): Decimal {
    return this.toDecimal(-0.06366)
      .add(
        this.toDecimal(0.12613).mul(
          this.toDecimal(this.getRadius(xCoordinate, 500)).cos(),
        ),
      )
      .add(
        this.toDecimal(0.12258).mul(
          this.toDecimal(this.getRadius(xCoordinate, 250)).cos(),
        ),
      )
      .add(
        this.toDecimal(0.01593).mul(
          this.toDecimal(this.getRadius(xCoordinate, 500)).sin(),
        ),
      )
      .add(
        this.toDecimal(0.03147).mul(
          this.toDecimal(this.getRadius(xCoordinate, 250)).sin(),
        ),
      )
      .toSignificantDigits(5);
  }

  getRefreshRate(frameRate: number): number {
    return 1000 / frameRate;
  }

  msToSeconds(ms: number): number {
    return ms / 1000;
  }

  private getRadius(dividend: number, divider: number): number {
    return Math.PI * (dividend / divider);
  }

  private toDecimal(value: Decimal.Value): Decimal {
    return new Decimal(value);
  }
}
