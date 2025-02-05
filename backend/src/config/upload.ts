import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export async function uploadFile(file: File, folder: string): Promise<{ publicId: string, url: string }> {
  const byteArray = await file.arrayBuffer();
  const buffer = Buffer.from(byteArray);

  return new Promise<{ publicId: string, url: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) {
          reject(new Error("Failed to upload file to Cloudinary."));
        } else {
         
          const publicId = result?.public_id || "";
          const url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
          resolve({ publicId, url });
        }
      }
    );
    uploadStream.end(buffer);
  });
}

// export async function uploadFile(fileData: string | Buffer, folder: string): Promise<{ publicId: string, url: string }> {
//   return new Promise<{ publicId: string, url: string }>((resolve, reject) => {
//     cloudinary.uploader.upload(
//       fileData.toString(), // Directly pass Base64 string or Buffer
//       { folder },
//       (error, result) => {
//         if (error) {
//           reject(new Error("Failed to upload file to Cloudinary."));
//         } else {
//           const publicId = result?.public_id || "";
//           const url = result?.secure_url || "";
//           resolve({ publicId, url });
//         }
//       }
//     );
//   });
// }
