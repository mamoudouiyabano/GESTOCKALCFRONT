export interface ErrorDto {
 
    httpCode?: any;
    code?: any;
    message?:string
    errors?: Array<any>;
}