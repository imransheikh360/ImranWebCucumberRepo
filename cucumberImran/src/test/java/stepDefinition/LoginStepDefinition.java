package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import featureFile.*;
/*import cuke4duke.StepMother;
import cuke4duke.Steps;
import cuke4duke.annotation.I18n.EN.When;*/
import org.openqa.selenium.JavascriptExecutor;

public class LoginStepDefinition {

	WebDriver driver;

	@Given("^User should be on login screen$")
	public void invokeBrowser() {
		System.setProperty("webdriver.gecko.driver", "C:\\CucumberGitRepository\\cucumberImran\\drivers\\geckodriver.exe");
		//C:\CucumberGitRepository\cucumberImran\drivers\geckodriver.exe
		driver =new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
		}
	
	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.close();
	}

	@When("^Login into application \"(.*)\" and \"(.*)\"$")
	public void login_into_application(String Username, String password) throws Throwable {
		
		driver.findElement(By.xpath("//input[@name='username']")).click();
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(Username);
		driver.findElement(By.xpath("//input[@type='password']")).click();
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
		WebElement el= driver.findElement(By.xpath("//input[@type='submit']"));
		((JavascriptExecutor) driver).executeScript("arguments[0].click();", el);
		
	}
	
	@Then("^logout from application$")
	public void logout_from_application() throws Throwable {
	   
	   driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
	}
	
	

	@Then("^Verify that user on home screen$")
	public void verify_that_user_on_home_screen() throws Throwable {
		//move to frame first
		driver.switchTo().frame("mainpanel");
		boolean isUserNameDisplayed= driver.findElement(By.xpath("//a[@title='Home']")).isDisplayed();
		Assert.assertTrue("Home tab should be displayed", isUserNameDisplayed);
	}

	

	@Then("^Click on product$")
	public void click_on_product() throws Throwable {
		driver.findElement(By.xpath("//div[@id='navMenu']/ul/li[13]/a[@title='Products']")).click();
		Thread.sleep(3000);
		
	}

	@Then("^Click on New Product button$")
	public void click_on_New_Product_button() {
		driver.findElement(By.xpath("//input[@value='New Product']")).click();
	}

	@Then("^Enter \"(.*)\" product name$")
	public void enter_product_name(String productName) throws Throwable {
		
		driver.findElement(By.xpath("//input[@name='name']")).clear();
		driver.findElement(By.xpath("//input[@name='name']")).sendKeys(productName);
		
	}

	@Then("^Enter cost$")
	public void enter_cost() throws Throwable {
		
		driver.findElement(By.xpath("//input[@name='cost']")).clear();
		driver.findElement(By.xpath("//input[@name='cost']")).sendKeys("100");
	}

	@Then("^Enter retail value$")
	public void enter_retail_value() throws Throwable {
		
		driver.findElement(By.xpath("//input[@name='retail_value']")).clear();
		driver.findElement(By.xpath("//input[@name='retail_value']")).sendKeys("50");
		}

	@Then("^Enter wholesale price$")
	public void enter_wholesale_price() throws Throwable {
		
		driver.findElement(By.xpath("//input[@name='wholesale']")).clear();
		driver.findElement(By.xpath("//input[@name='wholesale']")).sendKeys("25");
		
	}

	@Then("^enter description$")
	public void enter_description() throws Throwable {
		
		driver.findElement(By.xpath("//textarea[@name='description']")).clear();
		driver.findElement(By.xpath("//textarea[@name='description']")).sendKeys("Test Product Desc..");
		
	}

	@Then("^click on save button$")
	public void click_on_save_button() throws Throwable {
		
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		
	}

	@Then("^verify that product is created$")
	public void verify_that_product_is_created() throws Throwable {
		boolean editbuttonIsDisplayed= driver.findElement(By.xpath("//input[@value='Edit']")).isDisplayed();
		Assert.assertTrue("User name should be displayed on home screen", editbuttonIsDisplayed);

	}


	@When("^Delete the \"(.*)\" product$")
	public void click_on_delete_button_againt_created_product(String productName) throws Throwable {
		boolean result= false;
	   
	    List<WebElement> rows= driver.findElements(By.xpath("//table[@class='datacard']/tbody/tr"));
		for (int i = 0; i <rows.size() && !result ; i++) {
			List<WebElement> columns= rows.get(i).findElements(By.tagName("td"));
			for(int j=0; j<columns.size(); j++)
			{
				String a= columns.get(j).getText();
				String text = a.replaceAll("\\s",""); 
					if(text.equalsIgnoreCase(productName))
						{
							String n= columns.get(j+4).getText();
							columns.get(j+4).findElement(By.xpath("//a[3]")).click();
							Thread.sleep(3000);
							driver.switchTo().alert().accept();
							result=true;
							break;
						}
			}
		}
	}

	@Then("^accept the delete popup$")
	public void accept_the_delete_popup() throws Throwable {
	   
	    
	}

	@Then("^verify that deleted product no more exist$")
	public void verify_that_deleted_product_no_more_exist() throws Throwable {
		driver.findElement(By.xpath("//div[@id='navMenu']/ul/li[13]/a[@title='Products']")).click();
	}



}
