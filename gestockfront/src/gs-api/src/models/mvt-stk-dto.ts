/* tslint:disable */
import { ItemDto } from './item-dto';
export interface MvtStkDto {
  id?: number;
  dateMvt?: number;
  quantite?: number;
  item?: ItemDto;
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  sourceMvtStk?: 'COMMANDE_EMPLOYE' | 'ENTREE_EN_STOCK';
}
