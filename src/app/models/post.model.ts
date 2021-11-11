import { JsonObject, JsonProperty } from 'json2typescript';
import { BaseModel } from './base.model';

@JsonObject('PostModel')
export class PostModel extends BaseModel {

  @JsonProperty('userId', Number)
  public userId: number = undefined;

  @JsonProperty('id', Number)
  public id: number = undefined;

  @JsonProperty('title', String)
  public title: string = undefined;

  @JsonProperty('body', String)
  public body: string = undefined;
}
