import { baseModule } from "./config";

export const APIS = {
    uploadImage: (body) => baseModule.post("eye/", body)
}

// export default APIS;