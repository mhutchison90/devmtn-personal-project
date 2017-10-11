module.exports = {
  //ADD NEW USER
  createUser: ( req, res, next ) => {
    const db = req.app.get('db');
    const { userrole, companyid, lastname, firstname, reportsto, email,	pointbalance, allowancebalance } = req.body; 

       db.add_user([userrole, companyid, lastname, firstname, reportsto, email,	pointbalance, allowancebalance])   
      .then( () => res.status(200).send(req.body) )
      .catch( () => res.status(500).send() );
  },

    allUsers: ( req, res ) => {
      const db = req.app.get('db');
      const { params } = req; 

      db.all_users([params.companyid])
        .then( users => res.status(200).send( users ) )
        .catch( () => res.status(500).send() );
    }
};
