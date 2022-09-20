
const Scheme = require("../models/Scheme");


const getAllSchemes = async(req, res) => {
    try {
        const schemes = await Scheme.find({});
        res.status(200).json({schemes});
    } catch (err) {
        console.log(err);
    }
}


const createScheme = async(req, res) => {
    try {
        const scheme = await Scheme.create(req.body);
        res.status(201).json({result: "success", data: scheme});
    } catch (err) {
        console.log(err);
        res.status(404).json({result: "error"});
    }
}


const getScheme = async(req, res) => {
    const _id = req.params.id;
    try {
        const scheme = await Scheme.findById({_id});
        if(!scheme){
            return res.stauts(404).json({msg: `no Scheme found with id : ${_id}`});
        }
        res.status(200).json({scheme});
    } catch (err) {
        console.log(err);
    }
    
}

const updateScheme = async(req, res) => {
    const _id = req.params.id;
    try {   
        const scheme = await Scheme.findByIdAndUpdate({_id}, req.body, {
            new: true,
            runValidators: true
        })
        if(!scheme){
            return res.stauts(404).json({msg: `no Scheme found with id : ${_id}`});
        }

        res.status(200).json({scheme});
        
    } catch (err) {
        console.log(err);
    }
    res.status(201).json({"output": "UPDATE"})
}

const deleteScheme = async(req, res) => {
    const _id = req.params.id;
    try {
        const scheme = await Scheme.findByIdAndDelete({_id});
        if(!scheme){
            return res.stauts(404).json({msg: `no Scheme found with id : ${_id}`});
        }


        res.status(200).json({msg: `scheme delete id : ${_id}`});


    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getAllSchemes,
    createScheme,
    getScheme,
    updateScheme,
    deleteScheme

}