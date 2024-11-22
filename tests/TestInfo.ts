
import { test } from "@playwright/test";

export class TestInfo implements TestInfoRepo {
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

    })
  }
}



export interface TestInfoRepo {
  testName: string
  testUrl: string
  runTest:() => void
}