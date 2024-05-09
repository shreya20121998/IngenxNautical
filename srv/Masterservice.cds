using NAUTIMASTER_BTP_SRV from './external/NAUTIMASTER_BTP_SRV.cds';

service NauticalMasterService {
    
    entity BidMasterSet as projection on NAUTIMASTER_BTP_SRV.BidMasterSet
    {        key Bname, key Code, Value, Cvalue, Cunit, Datatype, Tablename, MultiChoice     }    
;
    
    entity BusinessPartnerSet as projection on NAUTIMASTER_BTP_SRV.BusinessPartnerSet
    {        key Lifnr, PartnerRole, Anred, Name1, Name2, Name3, Sort1, StrSuppl1, StrSuppl2, HouseNum1, Stras, Pstlz, Ort01, Land1, Regio, TimeZone, Spras, Telf1, Telf2, Telfx, SmtpAddr, Erdat, DateTo     }    
;
    
    entity ClassMasterSet as projection on NAUTIMASTER_BTP_SRV.ClassMasterSet
    {        key ZfValue, ZfDesc }    
;
    
    entity CostMasterSet as projection on NAUTIMASTER_BTP_SRV.CostMasterSet
    {        key Costcode, Cstcodes     }    
;
    
    entity CountryMasterSet as projection on NAUTIMASTER_BTP_SRV.CountryMasterSet
    {        key ZfValue, ZfDesc     }    
;
    
    entity CountrySet as projection on NAUTIMASTER_BTP_SRV.CountrySet
    {        Spras, key Land1, Landx50     }    
;
    
    entity CurrencySet as projection on NAUTIMASTER_BTP_SRV.CurrencySet
    {        Waers, key Isocd     }    
;
    
    entity EventMasterSet as projection on NAUTIMASTER_BTP_SRV.EventMasterSet
    {        key Evtty, Text     }    
;

    entity MaintainGroupSet as projection on NAUTIMASTER_BTP_SRV.MaintainGroupSet
    {        key Zuser, Zgroup     }    
;

    entity PortmasterSet as projection on NAUTIMASTER_BTP_SRV.PortmasterSet
    {        key Country, key Portc, Portn, Reancho, Latitude, Longitude, Countryn, Locid, Ind     }    
;
    entity PortmasterUpdateSet as projection on NAUTIMASTER_BTP_SRV.PortmasterUpdateSet
    {        key Country, key Portc, Portn, Reancho, Latitude, Longitude, Countryn, Locid, Ind     }    
;
    
    entity RefrenceDocumentSet as projection on NAUTIMASTER_BTP_SRV.RefrenceDocumentSet
    {        key Docind, Docdesc     }    
;
    
    entity StandardCurrencySet as projection on NAUTIMASTER_BTP_SRV.StandardCurrencySet
    {        Spras, key Waers, Ltext     }    
;
    
    entity UOMSet as projection on NAUTIMASTER_BTP_SRV.UOMSet
    {        key Uom, Uomdes     }    
;
    
    entity ReleaseStrategySet as projection on NAUTIMASTER_BTP_SRV.ReleaseStrategySet
    {        Rels, Voyty, Vesty, key Zgroup, key App1     }    
;
    
    entity VoyageRealeaseSet as projection on NAUTIMASTER_BTP_SRV.VoyageRealeaseSet
    {        key Rels, key Voyty, key Vesty, key Zgroup, App1, App2, App3     }    
;
    
    entity xNAUTIxBusinessPartner1 as projection on NAUTIMASTER_BTP_SRV.xNAUTIxBusinessPartner1
    {        key Lifnr, PartnerRole, Anred, Name1, Name2, Name3, Sort1, StrSuppl1, StrSuppl2, HouseNum1, Stras, Pstlz, Ort01, Land1, Regio, Spras, Telf1, Telf2, Telfx, SmtpAddr, Erdat, DateTo     }    
;
    
    entity ZBTP_NAUTICAL_CURRENCY as projection on NAUTIMASTER_BTP_SRV.ZBTP_NAUTICAL_CURRENCY
    {        key waers, isocd, spras, ltext, ktext     }    
;
}