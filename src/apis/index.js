import { baseModule } from "./config";

export const APIS = {
    uploadImage: async (body) => await baseModule.post("upload", body)
}
