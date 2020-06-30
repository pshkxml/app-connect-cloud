ibmcloud login -sso
ibmcloud target -o pavlo.shcherbukha -s dev
ibmcloud fn package get --summary NbuServices

-- создание пакета
ibmcloud fn package create cmdpkg

-- создание action в пакете
ibmcloud fn action create cmdpkg/cmdaction ./func/packages/NbuServices/getCurrentExchRate.js

-- просомтреть пакет
ibmcloud fn package get --summary NbuServices