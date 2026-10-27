import { PartialType } from '@nestjs/mapped-types';
import { CreatePassportsDto } from './create-passports.dto.js';

export class UpdatePassportsDto extends PartialType(CreatePassportsDto) {}
