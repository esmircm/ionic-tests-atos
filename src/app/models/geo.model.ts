import { JsonObject, JsonProperty } from 'json2typescript';
import { BaseModel } from './base.model';

@JsonObject('GeoModel')
export class GeoModel extends BaseModel {

    @JsonProperty('lat', String)
    public lat: string = undefined;

    @JsonProperty('lng', String)
    public lng: string = undefined;
}
