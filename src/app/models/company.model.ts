import { JsonObject, JsonProperty } from 'json2typescript';
import { BaseModel } from './base.model';

@JsonObject('CompanyModel')
export class CompanyModel extends BaseModel {

    @JsonProperty('name', String)
    public name: string = undefined;

    @JsonProperty('catchPhrase', String)
    public catchPhrase: string = undefined;

    @JsonProperty('bs', String)
    public bs: string = undefined;
}
