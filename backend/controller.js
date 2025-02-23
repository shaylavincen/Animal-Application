const AnimalModel = require("./model");
const asyncHandler = require("express-async-handler");


// Get list of all animals from database
exports.get = asyncHandler(async (req, res, next) => {
    try {
        const allAnimals = await AnimalModel.find({}).exec();
        res.send(allAnimals);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "error" });
    }
})

// Post an animal object
exports.post = asyncHandler(async (req, res, next) => {
    //hardcode to input one animal:
    // const animal_instance = new AnimalModel({
    //     name: "Hades", age: 4, sex: "neutured male", breed: "Lab mix"
    // });
    // await animal_instance.save();
    try {
        const animal_instance = new AnimalModel(req.body);
        await animal_instance.save();
        res.status(201);
        res.json(animal_instance);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "requires all fields" });
    }
});

// Update an animal (all fields are not required to update)
exports.put = asyncHandler(async (req, res, next) => {
    try {
        const animal_update = await AnimalModel.findByIdAndUpdate(req.params.animalId, req.body);
        if (!animal_update) {
            return res.status(404).json({ message: "Animal not found" });
        }
        res.status(200).json(animal_update);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "requires all fields" });
    }

});

// Delete an animal
exports.delete = asyncHandler(async (req, res, next) => {
    try {
        const animal_delete = await AnimalModel.findByIdAndDelete(req.params.animalId);
        if (!animal_delete) {
            return res.status(404).json({ message: "Animal not found" });
        }
        res.status(200).json(animal_delete);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: "invalid ID" });
    }
});