import { JsonObject, JsonProperty } from 'json2typescript';
import { BaseModel } from './base.model';

@JsonObject('CommentModel')
export class CommentModel extends BaseModel {

  @JsonProperty('postId', Number)
  public postId: number = undefined;

  @JsonProperty('id', Number)
  public id: number = undefined;

  @JsonProperty('name', String)
  public name: string = undefined;

  @JsonProperty('email', String)
  public email: string = undefined;

  @JsonProperty('body', String)
  public body: string = undefined;
}
