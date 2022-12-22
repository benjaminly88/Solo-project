const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://carsftw:loljkpotato123@cluster0.fnvlsfs.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'parts',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const casesSchema = new Schema({
  // cookieId: { type: String, required: true, unique: true },
  // createdAt: { type: Date, expires: 30, default: Date.now }
  caseName: { type: String, required: true },
});

const backplateSchema = new Schema({
  backplateName: { type: String, required: true },
});

const keyswitchesSchema = new Schema({
  keyswitchesName: { type: String, required: true },
});

const keycapsSchema = new Schema({
  keycapsName: { type: String, required: true },
});

const cordsSchema = new Schema({
  cordsName: { type: String, required: true },
});

const switchopenerSchema = new Schema({
  switchopenerName: { type: String, required: true },
});

const Cases = mongoose.model('case', casesSchema);
const Backplate = mongoose.model('backplate', backplateSchema);
const Keyswitches = mongoose.model('keyswitch', keyswitchesSchema);
const Keycaps = mongoose.model('keycap', keycapsSchema);
const Cords = mongoose.model('cord', cordsSchema);
const Switchopener = mongoose.model('switchopener', switchopenerSchema);

module.exports = {
  Cases,
  Backplate,
  Keyswitches,
  Keycaps,
  Cords,
  Switchopener,
};

// module.exports = mongoose.model('Part', partsSchema);
