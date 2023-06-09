export const pods = ['Panorama-Cloud', 'MESSAGE-CLOUD', 'LAB-Web-SERVICE','NVENTORY-WEB-SERVICE', 'Reporting-Business-Intelligence', 
  'TERMINOLOGY-API', 'INVENTORY-API', 'CONSENT-API', 'ORGANIZATION-API', 'SECURITY-API' , 'PROVIDER-API',
  'IMMUNIZATION-API', 'SHARED-SERVICE-API', 'INVESTIGATION-API', 'CLIENT-API','BATCH-SCHEDULER-CASE',
  'BATCH-SCHEDULER-INVENTORY','BATCH-SCHEDULER-IMMUNIZATION',
    '', ''];

 const podsObjs = {'Panorama-Cloud':'panorama-cloud', 'MESSAGE-CLOUD':'messaging-cloud', 'LAB-Web-SERVICE':'lab-web-services-web','NVENTORY-WEB-SERVICE':'inventory-web-services-web', 'BATCH-SCHEDULER-CASE':'batch-scheduler-case',
  'BATCH-SCHEDULER-INVENTORY':'batch-scheduler-inventory','BATCH-SCHEDULER-IMMUNIZATION':'batch-scheduler-immunization', 'INVESTIGATION-API':'sdsmapi-investigation-web', 'CLIENT-API':'sdsmapi-client-web',
  'TERMINOLOGY-API':'sdsmapi-terminology-web', 'INVENTORY-API':'sdsmapi-inventory-web', 'CONSENT-API':'sdsmapi-consent-web', 'ORGANIZATION-API':'sdsmapi-organization-web',
  'SECURITY-API':'sdsmapi-security-web' , 'PROVIDER-API':'sdsmapi-provider-web',
  'IMMUNIZATION-API':'sdsmapi-immunization-web' , 'SHARED-SERVICE-API':'sdsmapi-sharedservice-web',
   'Reporting-Business-Intelligence':'reporting-business-intelligence'};

   const link = 'panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/live';
   const separation = '-';
   const protocol = 'http://';
   export const envs = ['', 'T1', 'T2', 'AM1', 'AM3', 'AM4', 'PRT1'];
   const PRT1_PANORAMA_CLOUD = "https://panorama-prt1-panorama.ocp-prime-c55d62f44ecad82c5f9640d22d3526e6-i000.ca-tor.containers.appdomain.cloud/health/ready";

  export const buildUrl = (podId, env) => {
    const tempLink = link;
    if (podId.length > 0)
    {
        let httpProtocol = protocol;
        if (env.toUpperCase() === 'AM1' && podId === 'Panorama-Cloud')
       {
        httpProtocol = 'https://';
      
       } 
       else if (env.toUpperCase() === 'PRT1' && podId === 'Panorama-Cloud')
       {
        return PRT1_PANORAMA_CLOUD;
       }
        return httpProtocol + podsObjs[podId] + separation + env + separation + link;
    }
    return podId;
 }