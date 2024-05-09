using NAUTINAUTICALCV_SRV from './external/NAUTINAUTICALCV_SRV.cds';

service NAUTINAUTICALCV_SRVSampleService {
  
    entity CarTypeSet as projection on NAUTINAUTICALCV_SRV.CarTypeSet
    {        key Carcd, Cardes     }    
;
  
    entity CargoUnitSet as projection on NAUTINAUTICALCV_SRV.CargoUnitSet
    {        key Uom, Uomdes     }    
;
  
    entity CurTypeSet as projection on NAUTINAUTICALCV_SRV.CurTypeSet
    {        key Navoycur, Navoygcurdes     }    
;
  
    entity VoyTypeSet as projection on NAUTINAUTICALCV_SRV.VoyTypeSet
    {        key Voycd, Voydes     }    
;

}