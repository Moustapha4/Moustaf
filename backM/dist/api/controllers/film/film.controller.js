"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Film_service_1 = __importDefault(require("./Film.service"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
class EtudiantController {
    /**
     * subscribe
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    subscribe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let etudiant = {
                nom: req.body.nom,
                synopsis: req.body.synopsis,
                annee: req.body.annee,
                image: req.body.image,
                type: req.body.type,
                prix: req.body.prix,
            };
            try {
                let _film = yield Film_service_1.default.CreateFilm(film);
                if (!_film) {
                    return errorshandling_1.default.throwError('Error occurred when trying to subscribe as a film', 'Error occurred when trying to subscribe as a film', 500);
                }
                res.json(_film);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
       * get all partners
       * @param req
       * @param res
       * @returns {Promise.<void>}
       */
    getAllFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let films = yield Film_service_1.default.getAllFilm();
                res.json(films);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
    /**
     * Get one film
     * @param req
     * @param res
     * @returns {Promise<Spy>}
     */
    getOneFilm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                return errorshandling_1.default.handleError(res, 422, 'Trying to get one film without id', 'idPartner is required');
            }
            try {
                let film = yield Film_service_1.default.getOneFilm(req.params.id);
                if (!film) {
                    return errorshandling_1.default.throwError('Error occurred when trying to get this film', 'Error occurred when trying to get this film', 500);
                }
                res.json(film);
            }
            catch (err) {
                return errorshandling_1.default.handleError(res, err.code, err, err.message);
            }
        });
    }
}
exports.default = new FilmController();
//# sourceMappingURL=film.controller.js.map