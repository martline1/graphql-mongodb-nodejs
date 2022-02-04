import mongoose from "mongoose";

/**
 * Generate a ObjectId value
 *
 * @author Alcalá León Yael Mártin A. <yael.alcalla@gmail.com>
 */
const ObjectId = (id: string) => mongoose.Types.ObjectId(id) as any;

export default ObjectId;
