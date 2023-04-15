import { base_url } from '~/consts/const'
export function imageFilePath(value) {
  // let IMAGE_URL = IMAGE_URL;
  let tvr = "/default-img.svg";
  if (value !== null && value !== ""){
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', base_url + value, true);
    xhr.send();
    if (xhr.status !== 404 ) {
      tvr = base_url + value;
    }
  }
  return tvr;
}
