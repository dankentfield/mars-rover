
export function sanitizeString(string){
  return string.replace(/[(||,|| ]/g, '')
}
