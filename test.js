import { Builder, By, until } from 'selenium-webdriver';

async function runTest() {
  // Start Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Load your website (update the path to YOUR file)
    await driver.get('file:///C:/Users/Amber/OneDrive/Documents/my-selenium-project/index.html');

    // Wait for the page to load
    await driver.wait(until.elementLocated(By.css('body')), 5000);

    console.log("Page loaded successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    // Close browser
    await driver.quit();
  }
}

runTest();
