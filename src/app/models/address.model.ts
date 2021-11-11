import { JsonObject, JsonProperty } from 'json2typescript';
import { BaseModel } from './base.model';
import { GeoModel } from './geo.model';

@JsonObject('AddressModel')
export class AddressModel extends BaseModel {

    @JsonProperty('street', String)
    public street: string = undefined;

    @JsonProperty('suite', String)
    public suite: string = undefined;

    @JsonProperty('city', String)
    public city: string = undefined;

    @JsonProperty('zipcode', String)
    public zipcode: string = undefined;

    @JsonProperty('geo', GeoModel)
    public geo: GeoModel = undefined;
}

