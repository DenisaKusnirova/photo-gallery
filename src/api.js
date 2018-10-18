const api = 'http://api.programator.sk/'

const headers = {
  'Accept': 'application/json'
}

export const getAllGalleries = () => {
  return fetch(`${api}gallery`, { headers })
    .then(res => res.json())
    .then(data => data.galleries)
}

export const addNewGallery = (name) => {
  return fetch(`${api}gallery`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  }).then(res => res.json())
}

export const getPhotos = (path) => {
  return fetch(`${api}gallery/${path}`, { headers })
    .then(res => res.json())
}

export const deleteItem = (path) => {
  return fetch(`${api}gallery/${path}`, {
    method: 'DELETE',
    headers,
  }).then(res => res.json())
}

export const getImgUrl = (path, width, height) => {
  const size = width && height ? `${width}x${height}` : '240x150'
  return `${api}images/${size}/${path}`
}

export const addNewPhoto = (image, path) => {
  const formData = new FormData();
  formData.append('file', image);
  return fetch(`${api}gallery/${path}`, {
    method: 'POST',
    body: formData,
  }).then(res => res.json())
}
