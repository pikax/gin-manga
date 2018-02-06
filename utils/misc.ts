

interface NuxtProcess extends NodeJS.Process{
  BROWSER_BUILD?: boolean;
  SERVER_BUILD?:boolean;

}

export const isBrowserBuild =  (process as NuxtProcess).BROWSER_BUILD;
export const isServerBuild =  (process as NuxtProcess).SERVER_BUILD;
