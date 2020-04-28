import { Description } from './description.model';

export class Column{
    constructor(public name:string, public columns:Description[]){}
}