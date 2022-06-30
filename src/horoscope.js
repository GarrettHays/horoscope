export default class GetHoroscope {  
  static getHoroscope(astro_sign) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://aztro.sameerkumar.website/?sign=${astro_sign}&day=today`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("POST", url, true);
      request.send();
    });
  }
}