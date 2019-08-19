const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");
const Review = mongoose.model("Review");

class CakeController {
    getAll(req, res){
        Cake.find({})
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Cake.findOne({_id: req.params._id})
            .then(cake => res.json(cake))
            .catch(err => res.json(err));
    }
    create(req, res){
        let cake = new Cake(req.body);
        cake.save()
            .then(() => res.json(cake))
            .catch(err => res.json(err));
    }
    update(req, res){
        Cake.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
        Cake.findOneAndRemove({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    review(req, res) {
        let r = new Review(req.body);
        Cake.findByIdAndUpdate({_id: req.params._id}, {$push: {reviews: r}})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new CakeController();