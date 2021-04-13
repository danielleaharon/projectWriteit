import getConfig from 'next/config'
const {publicRuntimeConfig}=getConfig();
export const API=publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_DEVELOPEMNT: 'http://localhost:8081' ;

export const APP_NAME= publicRuntimeConfig.APP_NAME;