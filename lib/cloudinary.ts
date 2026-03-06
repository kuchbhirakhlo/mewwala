export const uploadImage = async (file: File): Promise<string> => {
  console.log("Cloudinary upload: Starting upload for file:", file.name, "type:", file.type, "size:", file.size)
  
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)

  console.log("Cloudinary upload: Sending request to Cloudinary, cloud name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error("Cloudinary upload failed:", response.status, errorText)
    throw new Error(`Upload failed: ${response.status} ${errorText}`)
  }

  const data = await response.json()
  console.log("Cloudinary upload: Success, returned URL:", data.secure_url)
  return data.secure_url
}