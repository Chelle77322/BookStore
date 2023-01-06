import {Novel} from "../Models/index.js";
export function findAll(request, result) {

    Novel.find(request.query).sort({ date: -1 })
        .then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
export function findbyId(request, result) {
    Novel.findById(request.params.id).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
export function create(request, result) {
    console.log("This is the create function in controller");
    Novel.create(request.body).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
export function update(request, result) {
    Novel.findOneAndUpdate({ _id: request.params.id }, request.body).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
export function remove(request, result) {
    Novel.findById({ _id: request.params.id }).then(dbModel => dbModel.remove()).then(dbModel => result.json(dbModel)).catch(error => result.status(422).json(error));
}
