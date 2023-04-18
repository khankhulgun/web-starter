import {message} from "ant-design-vue";

export function copyUrl() {
  const url = window.location.href;
  const input = document.createElement('input');
  input.setAttribute('value', url);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  // alert("Холбоосыг хууллаа");
  message.success(  "Холбоосыг хууллаа" );
  // message.success( this.getCurrentLanguage === 'mn' ? "Холбоосыг хууллаа" : "Link copied" );
}
