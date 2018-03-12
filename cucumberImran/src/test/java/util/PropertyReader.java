package util;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

	public class PropertyReader
	{	
		String path =  getPath();
		
		public String readApplicationFile(String key){ 
	    	String value = "";
	        try{         	  
		          Properties prop = new Properties();
		          File f = new File(path + "//src//main//java//config//configuration.properties");
		          //C:\CucumberGitRepository\cucumberImran\src\main\java\config\configuration.propertie
		          if(f.exists()){
			          prop.load(new FileInputStream(f));
			          value = prop.getProperty(key); 	
			          
	          	}
		   }
	        catch(Exception e){  
	           System.out.println("Failed to read from application.properties file.");  
	        }
	        return value;
	     } 
	    
		public String getPath()
		{
			String path ="";		
			File file = new File("");
			String absolutePathOfFirstFile = file.getAbsolutePath();
			path = absolutePathOfFirstFile.replaceAll("\\\\+", "/");		
			return path;
		}

	/*	public static void main(String[] args) {
			PropertyReader p= new PropertyReader();
			String pp= p.getPath();
			System.out.println("My path is: "+ pp);
			String xmlFile= p.readApplicationFile("reportConfigPath");
			System.out.println("My xml file path is: " + xmlFile);
		}*/
}
