const MAX_KOBO=9_000_000_000_000_000;
export function parseNaira(value:string):number|null{const c=value.trim().replaceAll(",","");if(!/^\d+(\.\d{1,2})?$/.test(c))return null;const[w,d=""]=c.split(".");const k=Number(w)*100+Number(d.padEnd(2,"0"));return Number.isSafeInteger(k)&&k>=0&&k<=MAX_KOBO?k:null}
export function formatNaira(k:number):string{return new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:k%100?2:0,maximumFractionDigits:2}).format(k/100)}
export function koboToInput(k:number):string{return(k/100).toFixed(k%100?2:0)}
