using NAUTIBTP_NAUTICAL_TRANSACTIO_SRV from './external/NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.cds';
using NAUTIMASTER_BTP_SRV from './external/NAUTIMASTER_BTP_SRV.cds';
using NAUTIZCHATAPPROVAL_SRV from './external/NAUTIZCHATAPPROVAL_SRV.cds';

service NauticalCharteringService {
    entity xNAUTIxchaApp1 as projection on NAUTIZCHATAPPROVAL_SRV.xNAUTIxchaApp1
    {        key Creqno, key Chrnmin     }    
;
  
    entity chartapprSet as projection on NAUTIZCHATAPPROVAL_SRV.chartapprSet
    {        key Creqno, Zemail, key Chrnmin, key Zlevel, key Uname, Zdate, Ztime, Zcomm, Zaction     }    
;


    
    entity xNAUTIxCharteringHeaderItem as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxCharteringHeaderItem
    {        key Chrnmin, Chrnmex, Chrcdate, Chrctime, Chrqsdate, Chrqstime, Chrqedate, Chrqetime, Chrqdate, Chrporg, Chrporgn, Chrpgrp, Chrpgrpn, Chrexcr, Chrpayt, Chrpaytxt, Chrinco, Chrincodis, Chrincol, Cimater, Cimatdes, Ciqty, Ciuom, Voyno, Voynm, Chrven, Chrvenn, Ciprec, Zdelete, RefChrnmin ,tovendor,tocharteringasso     }    
;
    
    entity xNAUTIxVEND as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxVEND
    {        key Chrnmin, key Lifnr, Voyno     }    
;
    
    entity xNAUTIxpurchGroup as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxpurchGroup
    {        key Ekgrp, Eknam     }    
;
    
    entity xNAUTIxpaymTerm as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxpaymTerm
    {        key Paytrm, Paytrmtxt     }    
;
    
    entity xNAUTIxCHARTPURCHASEITEM as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxCHARTPURCHASEITEM
    {        key Ekorg, Ekotx     }    
;
    
    entity xNAUTIxCHARTERING as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxCHARTERING
    {        key Chrnmin, Chrnmex, Chrcdate, Chrctime, Chrqsdate, Chrqstime, Chrqedate, Chrqetime, Chrqdate, Chrporg, Chrporgn, Chrpgrp, Chrpgrpn, Chrexcr, Chrpayt, Chrpaytxt, Chrinco, Chrincodis, Chrincol, Cimater, Cimatdes, Ciqty, Ciuom, Voyno, Voynm, Chrven, Chrvenn, Ciprec, Zdelete, RefChrnmin     }    
;
    entity xNAUTIxBusinessPartner1 as projection on NAUTIMASTER_BTP_SRV.xNAUTIxBusinessPartner1
    {        key Lifnr, PartnerRole, Anred, Name1, Name2, Name3, Sort1, StrSuppl1, StrSuppl2, HouseNum1, Stras, Pstlz, Ort01, Land1, Regio, Spras, Telf1, Telf2, Telfx, SmtpAddr, Erdat, DateTo     }    
;


}