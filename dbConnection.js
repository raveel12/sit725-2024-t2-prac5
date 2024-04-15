const { MongoClient, ServerApiVersion } = require('mongodb'); 

class Database{
    constructor(uri)
    {
        this.uri=uri;
        this.client = new MongoClient(uri, { 
        serverApi: { 
            version: ServerApiVersion.v1, 
            strict: true, 
            deprecationErrors: true, 
        }});
    }
    async connect(){
        try{
            await this.client.connect();
            console.log("connected to database");
            return this.client.db();
        }catch (ex) { 
            console.error(ex); 
            throw ex;
        } 
        
    }
}

 module.exports= Database;