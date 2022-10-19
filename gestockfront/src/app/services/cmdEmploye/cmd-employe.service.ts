import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeEmployeDto } from 'src/gs-api/src/models';
import { Gestockv1cmdemployesService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class CmdEmployeService {

  constructor(private cmd:Gestockv1cmdemployesService) { }

  saveCmd(ommandeEmployeDto: CommandeEmployeDto): Observable<CommandeEmployeDto> {
    
    return this.cmd.saveCommande(ommandeEmployeDto);

  }

  findAll(): Observable<CommandeEmployeDto[]> {
    return this.cmd.findAll();
  }

  findAllLigneCmd(): Observable<CommandeEmployeDto[]> {
    return this.cmd.findAllLigneCmdes();
  }

  findById(iditem: number): Observable<CommandeEmployeDto> {
    return this.cmd.findById(iditem);
  }

  findAllLignesCmdEmployeByCmdEmployeId(idCommande: number): Observable<CommandeEmployeDto> {
    return this.cmd.findAllLignesCmdEmployeByCmdEmployeId(idCommande);
  }

  findByCodeCmd(code: number): Observable<CommandeEmployeDto> {
    return this.cmd.findById(code);
  }

  delete(iditem?: number) : Observable<any> {

    return this.cmd.delete(iditem);

  }


}
