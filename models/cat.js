const Database= require("/Uni/SIT725/week5/controller/controller");

class CatModel{
    constructor(){
        this.uri="mongodb+srv://raavi01:123456789hacked@cluster1.rpqgmrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
        this.db= new Database(this.uri);
        this.collection= null;
    }
    async getAllCats(){
        try{
            const result = await collection.find().toArray();
            console.log(result);
            return result;
        }catch (ex) { 
            console.error(ex); 
            throw ex;
        } 
    }
    async addCat(cat){
        try{
            const result = await collection.insertOne(cat);
            console.log(result);
            return result;
        }catch (ex) { 
            console.error(ex); 
            throw ex;
        } 
    }
}

module.exports= CatModel;