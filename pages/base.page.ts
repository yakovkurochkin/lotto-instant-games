import { Page } from '@playwright/test';

export abstract class BasePage {
  abstract url: string;

  constructor(protected readonly page: Page) {}

  async goto(param?: string) {
    const target = param ? `${this.url}${param}` : this.url;
    await this.page.goto(target);
  }
}
