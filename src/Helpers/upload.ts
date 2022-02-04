import multer, { Multer, StorageEngine, memoryStorage } from "multer";

const storage: StorageEngine = memoryStorage();

const fileSize: number = 15 * 1024 * 1024;

/**
 * This store files in memory, each file has a size of 15MB
 * this helper is renamed from storage to upload.
 *
 * @author Salgado Ramírez Miguel A. <alejandrosram@outlook.com>
 */
const upload: Multer = multer({
	storage,
	limits : {
		fileSize,
	},
});

export default upload;
