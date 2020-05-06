module.exports = {
    user:(app,req,res)=>{
        req.assert('name','O nome é Obrigatorio').notEmpty();
        req.assert('email','O E-mail esta invalido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if(errors){

            app.utils.error.send(errors,req,res);
            return false;

        }else{

            return true;
            
        }
    }
}