import { Description } from './description.model';

export class Column{
    constructor(public _id: string, public name:string, public columns:Description[]){}
}