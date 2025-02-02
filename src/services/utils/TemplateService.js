import AppDataService from "../AppDataService";
import { customHeaders } from "../utils/constants";

export default class TemplateService {

    static async postSaveFormVisitNoteData({ body, token }) {
        return await AppDataService.post(`templates/note`, body, customHeaders(token))
    }
    static async getCustomQuestionnarieList({ params, token }) {
        return await AppDataService.get(`templates/custom/?pageNumber=${params.pageNumber}&limit=${params?.limit}`, { ...params, ...customHeaders(token) });
    }
    static async postCustomQuestionnaire({ body, token }) {
        return await AppDataService.post(`templates/custom`, body, customHeaders(token))
    }
    static async getMacrosList({ params, token }) {
        return await AppDataService.get(`templates/macros/?pageNumber=${params.pageNumber}&limit=${params?.limit}`, { ...params, ...customHeaders(token) });
    }
    static async postMacrosList({ body, token }) {
        return await AppDataService.post(`templates/macros`, body, customHeaders(token))
    }
    static async patchMacrosList({ MacroId, body, token, }) {
        return await AppDataService.patch(`templates/macros/${MacroId}`, body, customHeaders(token))
    }
    static async deleteMacro({ MacroId, token }) {
        return await AppDataService.delete(`templates/macros/${MacroId}`, null, customHeaders(token));
    }
}
