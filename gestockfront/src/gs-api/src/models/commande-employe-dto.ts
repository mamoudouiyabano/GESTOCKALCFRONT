/* tslint:disable */
import { EmployeDto } from './employe-dto';
import { LigneCmdEmployeDto } from './ligne-cmd-employe-dto';
export interface CommandeEmployeDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  employe?: EmployeDto;
  ligneCmdEmployeDtos?: Array<LigneCmdEmployeDto>;
  commandeLivree?: boolean;
}
