/* tslint:disable */
import { ItemDto } from './item-dto';
import { CommandeEmployeDto } from './commande-employe-dto';
export interface LigneCmdEmployeDto {
  id?: number;
  item?: ItemDto;
  commandeEmploye?: CommandeEmployeDto;
  quantite?: number;
  prixUnitaire?: number;
}
