/* created at 2018/4/10 by BlueSky @cilicili */
$.ajaxSetup({
  async: false
});
const API_SERVER_HOSTNAME = '10.11.73.127';
const API_SERVER_PORT = 10087;
const API_SERVER = `//${API_SERVER_HOSTNAME}:${API_SERVER_PORT}`;
const STORAGE_SERVER_HOSTNAME = '10.11.75.106';
const STORAGE_SERVER_PORT = 10088;
const STORAGE_SERVER = `//${STORAGE_SERVER_HOSTNAME}:${STORAGE_SERVER_PORT}`;
const UPLOAD_SERVER_HOSTNAME = '10.11.75.106';
const UPLOAD_SERVER_PORT = 10089;
const UPLOAD_SERVER = `//${UPLOAD_SERVER_HOSTNAME}:${UPLOAD_SERVER_PORT}`;

const API_SERVER_padEnd = SERVICE_PATH => `${API_SERVER}/api/${SERVICE_PATH}`;
