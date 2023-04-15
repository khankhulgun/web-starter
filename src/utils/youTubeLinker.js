export function youTubeLinker(value) {
  let youtubevideo = '';
  let tvr = value != null ? value.split('?v=') : [];
  (tvr[1] && tvr[1].length) >= 11 ?  youtubevideo = tvr[1].substr(0, 11) : console.log("");
  return "https://www.youtube.com/embed/" + youtubevideo;
}
