'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FilmSchema = new mongoose_1.Schema({
    nom: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    annee: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    prix: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        default: Date.now(),
        required: true,
        select: false
    },
    update: {
        type: Date,
        select: false
    delete: {
        type: Date,
        select: false
    }
    liste: {
        type: Date,
        select: false
    }
});
/**
 *  hooks methods
 */
FilmSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    this.update({ 'updated': Date.now() });
    next();
});
exports.default = mongoose_1.model('Film', FilmSchema);
//# sourceMappingURL=film.model.js.map