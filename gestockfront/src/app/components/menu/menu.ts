export interface Menu {
    id?: string;
    titre?: any;
    icon?: string;
    url?:string
    sousMenu?: Array<Menu>;
}