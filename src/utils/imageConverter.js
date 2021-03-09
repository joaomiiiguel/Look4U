import {localApi} from '../services/api'
export async function getBase64(url) {
  const response = await localApi.get(url, {
      responseType: 'arraybuffer'
    })
  let base64 =  new Buffer(response.data, 'binary').toString('base64')
  return 'data:image/png;base64,' + base64 
}
export function base64ToBlob(base64) {
  const byteCharacters = atob(base64)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  const blob = new Blob([byteArray], { type: 'image/png' })
  return blob
}