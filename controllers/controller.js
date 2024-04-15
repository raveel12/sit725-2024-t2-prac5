const CatModel= require("/Uni/SIT725/week5/models/cat");

class CatController{
    constructor(){
        this.model= new CatModel();
    }

    async getAllCats(req,res){
        const result = await this.model.getAllCats();
        // Print returned documents
        console.log(result);
    
        res.json({
        statusCode: 200,
        data: result,
        message: "get all cards success",});
    }

    async addCat(req,res){
        console.log(req.body);
        const cat= {title: req.body.title, subTitle: req.body.subTitle, path: req.body.path, description: req.body.description};
        const result = await this.model.addCat(cat);
        console.log(result);
        res.json({
        statusCode: 200,
        message: "post all cats success",});
    }

}
module.exports= {
    getAllCats,
    addCat
};