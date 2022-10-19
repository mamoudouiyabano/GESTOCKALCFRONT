/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ItemDto {
  id?: number;
  codeItem?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  quantite?: number;
  category?: CategoryDto;
}
