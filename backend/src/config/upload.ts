import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// export async function uploadFile(file: File, folder: string): Promise<{ publicId: string, url: string }> {
//   const byteArray = await file.arrayBuffer();
//   const buffer = Buffer.from(byteArray);

//   return new Promise<{ publicId: string, url: string }>((resolve, reject) => {
//     const uploadStream = cloudinary.uploader.upload_stream(
//       { folder },
//       (error, result) => {
//         if (error) {
//           reject(new Error("Failed to upload file to Cloudinary."));
//         } else {
         
//           const publicId = result?.public_id || "";
//           const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
//           resolve({ publicId, url });
//         }
//       }
//     );
//     uploadStream.end(buffer);
//   });
// }




/**
 * Uploads an image buffer to Cloudinary.
 * @param buffer - The image file as a Buffer.
 * @param folder - The folder where the file should be stored in Cloudinary.
 * @returns An object containing the public ID and URL of the uploaded image.
 */
export async function uploadFile(buffer: Buffer, folder: string): Promise<{ publicId: string; url: string }> {
  return new Promise<{ publicId: string; url: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) {
          reject(new Error("Failed to upload file to Cloudinary."));
        } else {
          const publicId = result?.public_id || "";
          const url = result?.secure_url || "";
          resolve({ publicId, url });
        }
      }
    );
    uploadStream.end(buffer);
  });
}
