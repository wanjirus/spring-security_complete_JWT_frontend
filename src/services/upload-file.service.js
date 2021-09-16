import http from "../http-common";
import authHeader from './auth-header';
class UploadService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData,{ headers: authHeader()}, {
      headers: {

      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files",{headers: authHeader()});
  }
}
export default new UploadService();