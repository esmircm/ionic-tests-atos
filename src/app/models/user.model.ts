import { JsonObject, JsonProperty } from 'json2typescript';
import { AddressModel } from './address.model';
import { BaseModel } from './base.model';
import { CompanyModel } from './company.model';

@JsonObject('UserModel')
export class UserModel extends BaseModel {

    @JsonProperty('id', Number)
    public id: number = undefined;

    @JsonProperty('username', String)
    public username: string = undefined;

    @JsonProperty('email', String)
    public email: string = undefined;

    @JsonProperty('address', AddressModel)
    public address: AddressModel = undefined;

    @JsonProperty('phone', String)
    public phone: string = undefined;

    @JsonProperty('website', String)
    public website: string = undefined;

    @JsonProperty('company', CompanyModel)
    public company: CompanyModel = undefined;
}

