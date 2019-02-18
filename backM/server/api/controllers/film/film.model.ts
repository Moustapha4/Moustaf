'use strict';
import { Document, Schema, Model, model} from "mongoose";

const FilmSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
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
    required: false
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
  update:{
      type: Date,
      select: false
  }
  
  
});

/**
 *  hooks methods
 */
FilmSchema.pre('save', function(next) {
  //todo
  //this.updated = Date.now();
  //this.update({'updated':Date.now()});
  next();
});

export default model('Film', FilmSchema);
