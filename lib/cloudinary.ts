export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch('/api/upload-image', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.error || 'Failed to upload image')
  }

  const data = await response.json()
  return data.url
}