
## ну тут краткий хелп по плагину для IBM FUNCTIONS
@see https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-cli-plugin-functions-cli


## А тут начальный туториал
@see https://cloud.ibm.com/docs/mobilefoundation?topic=mobilefoundation-logging-and-tracing

## Create serverless functions to send push notifications
@see https://developer.ibm.com/components/apache-openwhisk/patterns/serverless-functions-push-notifications

@see https://github.com/IBM/ibm-cloud-functions-mobile-push-notifications/blob/master/actions/get-three-day-weather.js


## Всяко-разно
https://github.com/ibm-functions/iam-token-manager-nodejs
https://github.com/ibm-functions
https://github.com/ibm-functions/iam-token-manager-nodejs/blob/master/index.js
https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-pkg_ov     
https://github.com/IBM/ibm-cloud-functions-serverless-apis
https://medium.com/codait/deploy-your-cloud-functions-with-bluemix-devops-ef8dfdb1a603

[How to setup multiple webhooks in Watson Assistant](https://stackoverflow.com/questions/61594937/how-to-setup-multiple-webhooks-in-watson-assistant)
https://medium.com/codait/deploy-your-cloud-functions-with-bluemix-devops-ef8dfdb1a603

[Build a database-driven Slackbot](https://cloud.ibm.com/docs/solution-tutorials?topic=solution-tutorials-slack-chatbot-database-watson#slack-chatbot-database-watson)

https://github.com/apache/openwhisk-external-resources

https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-templates

Залогиниться в ibmcloud cli

```bash
    ibmcloud login -sso
```    

Установить организацию и пространство

```bash
        ibmcloud target -o pavlo.shcherbukha -s dev  
```

```text
Targeted org Pavlo.Shcherbukha

Targeted space DEV



API endpoint:      https://cloud.ibm.com
Region:            eu-de
User:              Pavlo.Shcherbukha@ua.ibm.com
Account:           IBM (e7e7ece643ed12e247ea053e9232461a)
Resource group:    No resource group targeted, use 'C:\Program Files\IBM\Cloud\bin\ibmcloud.exe target -g RESOURCE_GROUP'   
CF API endpoint:   https://api.eu-de.cf.cloud.ibm.com (API version: 2.148.0)
Org:               Pavlo.Shcherbukha
Space:             DEV
```

Получить список функций своего пакета
```bash
    ibmcloud fn package get --summary NbuServices
```

создать action

```bash
    ibmcloud fn action create hello folder/hello_world.js
    ibmcloud fn action create cmdpkg/cmdaction ./func/packages/NbuServices/getCurrentExchRate.js

    ## создать пакет
    ibmcloud fn package create cmdpkg

```