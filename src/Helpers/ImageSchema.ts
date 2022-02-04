import { Schema, Document } from "mongoose";

export interface IImage extends Document {
	key: string;
	location: string;
}

const ImageSchema: Schema = new Schema({
	key      : { type : String, default : "" },
	location : { type : String, default : "" },
});

export default ImageSchema;
