import { TestInfoRepo } from './TestInfo'
import { test } from '@playwright/test'

export class PerformanceInfo implements TestInfoRepo{
  testName: string = ""
  testUrl: string = ""

  constructor(testName:string, testUrl:string) {
    this.testName = testName
    this.testUrl = testUrl
  }

  runTest():void{
    test(this.testName, async({page}) => {
      await page.goto(this.testUrl);
      await page.waitForLoadState('domcontentloaded')

      //performance tests
      await page.waitForTimeout(20000);
    })
  }
}