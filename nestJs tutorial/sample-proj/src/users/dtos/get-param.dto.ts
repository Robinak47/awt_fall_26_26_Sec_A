import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetParamDto {
  @IsInt({
    message:
      'Id should be a number. you cannot give any string that is not convertable to string',
  })
  @Type(() => Number)
  id: number;
}
