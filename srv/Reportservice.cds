using NAUTIBTP_NAUTICAL_TRANSACTIO_SRV from './external/NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.cds';


service NauticalReportService {
      

    
    entity xNAUTIxLIVEFRIEGHTREPORT as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxLIVEFRIEGHTREPORT
    {        key Chrnmin, Lifnr, Voyno, toitem1, toitem2   }    
;
    entity xNAUTIxVENFBID as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxVENFBID
    {        key Voyno, Lifnr, Zcode, Biddate, Bidtime, Chrnmin, CodeDesc, Value, Cvalue, Cunit, Chrqsdate, Chrqstime, Chrqedate, Chrqetime, DoneBy, Uname, Stat, Zmode, Zcom, currentdate, currenttime     }    
;

    entity xNAUTIxVENDBID as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxVENDBID
    {        key Voyno, Lifnr, Zcode, Value, Cvalue, Cunit, Chrnmin, CodeDesc, Biddate, Bidtime, Zcom     }    
;

}