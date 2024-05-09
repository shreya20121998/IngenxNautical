using NAUTIBTP_NAUTICAL_TRANSACTIO_SRV from './external/NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.cds';
using NAUTIMASTER_BTP_SRV from './external/NAUTIMASTER_BTP_SRV.cds';
using NAUTINAUTICALCV_SRV from './external/NAUTINAUTICALCV_SRV.cds';
using NAUTIZVOYAPPROVAL_SRV from './external/NAUTIZVOYAPPROVAL_SRV.cds';

service NauticalVoyageService {
    
    entity xNAUTIxVoygItem as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxVoygItem
    {        key Voyno, key Vlegn, Portc, Portn, Pdist, Medst, Vspeed, Ppdays, Vsdays, Vetad, Vetat, Vetdd, Vetdt, Vwead, Pstat, Matnr, Maktx, Cargs, Cargu, Othco, Frcost, Totco     }    
;

 entity CostMasterSet as projection on NAUTIMASTER_BTP_SRV.CostMasterSet
    {        key Costcode, Cstcodes     }    
;

  entity CurrencySet as projection on NAUTIMASTER_BTP_SRV.CurrencySet
    {        Waers, key Isocd     }    
;
    entity CurTypeSet as projection on NAUTINAUTICALCV_SRV.CurTypeSet
    {        key Navoycur, Navoygcurdes     }    
;
   
    entity CarTypeSet as projection on NAUTINAUTICALCV_SRV.CarTypeSet
    {        key Carcd, Cardes     }    
;
  
    entity VoyTypeSet as projection on NAUTINAUTICALCV_SRV.VoyTypeSet
    {        key Voycd, Voydes     }    
;
 entity CargoUnitSet as projection on NAUTINAUTICALCV_SRV.CargoUnitSet
    {        key Uom, Uomdes     }    
;
 entity voyapprovalSet as projection on NAUTIZVOYAPPROVAL_SRV.voyapprovalSet
    {        key Vreqno, key Voyno, Zlevel, Uname, Zdate, Ztime, Zcomm, Zaction     }    
;
 entity xNAUTIxVOYAGEHEADERTOITEM as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxVOYAGEHEADERTOITEM
    {        key Voyno, Voynm, Vnomtk, Refdoc, Docind, Vessn, Vimo, Chtyp, Chpno, Currkeys, Frtco, Vstat, Voyty, Carty, Curr, Freght, Party, Bidtype, Frcost, Frtu, Frcost_Act, Frtu_Act, Ref_Voyno, GV_CSTATUS     }    
;


}