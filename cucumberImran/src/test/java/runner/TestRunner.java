package runner;
import org.junit.runner.RunWith;
import org.junit.AfterClass;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.Reporter;
import util.PropertyReader;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\CucumberGitRepository\\cucumberImran\\src\\main\\java\\featureFile"
				//C:\CucumberGitRepository\cucumberImran\src\main\java\featureFile
		,glue={"stepDefinition"},
				//D:\ProjectWorkspace\cucumberImran\cucumberImran\src\test\java\stepDefinition
		//plugin= {"pretty", "html:HTML-REPORT", "json:JASON-REPORT/Cucumber.json","junit:XML-REPORT/Cucumber.xml" },
		plugin = { "com.cucumber.listener.ExtentCucumberFormatter:EXTENT-REPORT/report.html"},
		tags={"~@Regression", "~@smoke" },
		monochrome=true,
		dryRun= false
		)

public class TestRunner {
	
	@AfterClass
	public static void writeExtentReport() {
		PropertyReader prop= new PropertyReader();
		String configFilePath= prop.readApplicationFile("reportConfigPath");
		Reporter.loadXMLConfig(configFilePath);
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	    Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	    Reporter.setSystemInfo("Machine", 	"Windows 10 " + "64 Bit");
	    Reporter.setSystemInfo("Browser", "FF 53(64bit)");
	    Reporter.setSystemInfo("Selenium", "3.4.0");
	    Reporter.setSystemInfo("Maven", "3.5.2");
	    Reporter.setSystemInfo("Java Version", "1.8.0_121");
	}

}
