$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Create Product in Free CRM",
  "description": "",
  "id": "create-product-in-free-crm",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Create CRM product"
    }
  ],
  "line": 4,
  "name": "Create CRM product",
  "description": "",
  "id": "create-product-in-free-crm;create-crm-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User should be on login screen",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When Login into application \"imrans\" and \"360logica\""
    }
  ],
  "line": 7,
  "name": "Login into application \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that user on home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on New Product button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter \"\u003cproductName\u003e\" product name",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter cost",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter retail value",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter wholesale price",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "enter description",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify that product is created",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout from application",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "create-product-in-free-crm;create-crm-product;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "productName"
      ],
      "line": 21,
      "id": "create-product-in-free-crm;create-crm-product;;1"
    },
    {
      "cells": [
        "imrans",
        "360logica",
        "TestProduct"
      ],
      "line": 22,
      "id": "create-product-in-free-crm;create-crm-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Create CRM product",
  "description": "",
  "id": "create-product-in-free-crm;create-crm-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User should be on login screen",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#When Login into application \"imrans\" and \"360logica\""
    }
  ],
  "line": 7,
  "name": "Login into application \"imrans\" and \"360logica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that user on home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on product",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on New Product button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter \"TestProduct\" product name",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Enter cost",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter retail value",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter wholesale price",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "enter description",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify that product is created",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "logout from application",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.invokeBrowser()"
});
formatter.result({
  "duration": 9373745376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imrans",
      "offset": 24
    },
    {
      "val": "360logica",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.login_into_application(String,String)"
});
formatter.result({
  "duration": 651019141,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_that_user_on_home_screen()"
});
formatter.result({
  "duration": 6096195888,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_product()"
});
formatter.result({
  "duration": 3093389224,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_New_Product_button()"
});
formatter.result({
  "duration": 125529632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestProduct",
      "offset": 7
    }
  ],
  "location": "LoginStepDefinition.enter_product_name(String)"
});
formatter.result({
  "duration": 895267021,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_cost()"
});
formatter.result({
  "duration": 155649950,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_retail_value()"
});
formatter.result({
  "duration": 135230257,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_wholesale_price()"
});
formatter.result({
  "duration": 101423860,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enter_description()"
});
formatter.result({
  "duration": 200623755,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_save_button()"
});
formatter.result({
  "duration": 49267777,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_that_product_is_created()"
});
formatter.result({
  "duration": 1202655507,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.logout_from_application()"
});
formatter.result({
  "duration": 72988192,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 264658708,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "#Scenario: Delete CRM product"
    }
  ],
  "line": 25,
  "name": "Delete CRM product",
  "description": "",
  "id": "create-product-in-free-crm;delete-crm-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User should be on login screen",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#When Login into application \"imrans\" and \"360logica\""
    }
  ],
  "line": 28,
  "name": "Login into application \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Verify that user on home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on product",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Delete the \"\u003cproductName\u003e\" product",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "create-product-in-free-crm;delete-crm-product;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "productName"
      ],
      "line": 35,
      "id": "create-product-in-free-crm;delete-crm-product;;1"
    },
    {
      "cells": [
        "imrans",
        "360logica",
        "TestProduct"
      ],
      "line": 36,
      "id": "create-product-in-free-crm;delete-crm-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Delete CRM product",
  "description": "",
  "id": "create-product-in-free-crm;delete-crm-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User should be on login screen",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "#When Login into application \"imrans\" and \"360logica\""
    }
  ],
  "line": 28,
  "name": "Login into application \"imrans\" and \"360logica\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Verify that user on home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on product",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Delete the \"TestProduct\" product",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.invokeBrowser()"
});
formatter.result({
  "duration": 8499486814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imrans",
      "offset": 24
    },
    {
      "val": "360logica",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.login_into_application(String,String)"
});
formatter.result({
  "duration": 612917373,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_that_user_on_home_screen()"
});
formatter.result({
  "duration": 6322781285,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.click_on_product()"
});
formatter.result({
  "duration": 3100493125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestProduct",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.click_on_delete_button_againt_created_product(String)"
});
formatter.result({
  "duration": 3364493555,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1092478551,
  "status": "passed"
});
});