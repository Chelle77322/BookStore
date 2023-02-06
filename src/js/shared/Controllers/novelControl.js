import Novel  from "../Models/index.js";

function findAll(request, result) {

    Novel.find(request.query).sort({ date: -1 })
        .then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
 function findbyId(request, result) {
    Novel.findById(request.params.id).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
 function create(request, result) {
    console.log("This is the create function in controller");
    Novel.create(request.body).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
function update(request, result) {
    Novel.findOneAndUpdate({ _id: request.params.id }, request.body).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
function remove(request, result) {
    Novel.findById({ _id: request.params.id }).then(dbModel => dbModel.remove()).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
export {remove, update,create,findbyId, findOneAndUpdate,findAll};
