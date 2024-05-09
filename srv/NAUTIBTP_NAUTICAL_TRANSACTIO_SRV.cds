using NAUTIBTP_NAUTICAL_TRANSACTIO_SRV from './external/NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.cds';

service NAUTIBTP_NAUTICAL_TRANSACTIO_SRVSampleService {

    entity xNAUTIxVOYAGEHEADERTOITEM as projection on NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.xNAUTIxVOYAGEHEADERTOITEM
    {        key Voyno, Voynm, Vnomtk, Refdoc, Docind, Vessn, Vimo, Chtyp, Chpno, Currkeys, Frtco, Vstat, Voyty, Carty, Curr, Freght, Party, Bidtype, Frcost, Frtu, Frcost_Act, Frtu_Act, Ref_Voyno, GV_CSTATUS     }    
;
}