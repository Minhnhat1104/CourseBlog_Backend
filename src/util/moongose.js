export const multipleMongooseToObject = function (moongoses) {
  return moongoses.map((moongose) => moongose.toObject());
};
export const mongooseToObject = function (moongose) {
  return moongose ? moongose.toObject() : moongose;
};

// export default moongeUtils;
