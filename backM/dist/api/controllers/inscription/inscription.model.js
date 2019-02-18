'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InscriptionSchema = new mongoose_1.Schema({
    film: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Film',
        select: true
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
    }
});
/**
 *  hooks methods
 */
InscriptionSchema.pre('save', function (next) {
    //todo
    //this.updated = Date.now();
    next();
});
exports.default = mongoose_1.model('Inscription', InscriptionSchema);
//# sourceMappingURL=inscription.model.js.map