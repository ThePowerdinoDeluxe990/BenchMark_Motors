import { test } from "@playwright/test";

test("html simple", async ({ page }) => {
  await page.goto("https://developer.mozilla.org", {
    waitUntil: "load",
  });

  await page.close();

});

test("load page", async ({ page }) => {
  await page.goto(
    "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL",
    {
      waitUntil: "load",
    },
  );

  await page.close();
});

