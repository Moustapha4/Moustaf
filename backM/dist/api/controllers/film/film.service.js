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
const film_model_1 = __importDefault(require("./film.model"));
const generic_repository_1 = __importDefault(require("../service/generic.repository"));
const errorshandling_1 = __importDefault(require("../service/errorshandling"));
const FilmRepository = new generic_repository_1.default(film_model_1.default);
class FilmService {
    /**
     * save a new instance of partner
     * @param partner
     * @returns {Promise.<*>}
     */
    CreateFilm(Film) {
        return __awaiter(this, void 0, void 0, function* () {
            let _film = null;
            try {
                _film = yield FilmRepository.save(Film);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when saving this partner', 500);
            }
            return _film;
        });
    }
    ;
    /**
     * Get all Ecolinscriptionse
     * @returns {Promise.<*>}
     */
    getAllFilm() {
        return __awaiter(this, void 0, void 0, function* () {
            let film = [];
            try {
                films = yield FilmRepository.getAll();
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting all inscriptions', 500);
            }
            return films;
        });
    }
    ;
    /**
     * Get one partner
     * @param idPartner
     * @returns {Promise.<*>}
     */
    getOneFilm(idFilm) {
        return __awaiter(this, void 0, void 0, function* () {
            let film = null;
            try {
                film = yield FilmRepository.getOne(idFilm);
            }
            catch (err) {
                return errorshandling_1.default.throwError(err, 'An Error occurred when getting this partner', 500);
            }
            return film;
        });
    }
    ;
}
exports.FilmService = FilmService;
;
exports.default = new FilmService();
//# sourceMappingURL=film.service.js.map