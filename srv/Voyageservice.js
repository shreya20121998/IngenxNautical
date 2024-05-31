const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const NAUTIBTP_NAUTICAL_TRANSACTIO_SRV = await cds.connect.to("NAUTIBTP_NAUTICAL_TRANSACTIO_SRV"); 
    srv.on('READ', 'xNAUTIxVoygItem', req => NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.run(req.query)); 
    srv.on('READ', 'xNAUTIxVOYAGEHEADERTOITEM', req => NAUTIBTP_NAUTICAL_TRANSACTIO_SRV.run(req.query)); 

    const NAUTIMASTER_BTP_SRV = await cds.connect.to("NAUTIMASTER_BTP_SRV"); 
    srv.on('READ', 'CostMasterSet', req => NAUTIMASTER_BTP_SRV.run(req.query));
    srv.on('READ', 'CurrencySet', req => NAUTIMASTER_BTP_SRV.run(req.query)); 

    const NAUTINAUTICALCV_SRV = await cds.connect.to("NAUTINAUTICALCV_SRV"); 
    srv.on('READ', 'CurTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
    srv.on('READ', 'CarTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
    srv.on('READ', 'VoyTypeSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 
    srv.on('READ', 'CargoUnitSet', req => NAUTINAUTICALCV_SRV.run(req.query)); 

   

    const NAUTIZVOYAPPROVAL_SRV = await cds.connect.to("NAUTIZVOYAPPROVAL_SRV"); 
      srv.on('READ', 'voyapprovalSet', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 

      srv.on('UPDATE', 'voyapprovalSet', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 
      srv.on('READ', 'xNAUTIxgetvoyapproval', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 
      srv.on('READ', 'xNAUTIxvoyapproval1', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 
      
    
}