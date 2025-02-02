import AppDataService from "./AppDataService";
import { customHeaders } from "./utils/constants";

export default class BillingService {
    static async getAllReadyForBillingDetails({ params, token }) {
        return await AppDataService.get(`encounter`, { params, ...customHeaders(token) })
    }

    static async getSuperBillDetails({params,token }) {
        return await AppDataService.get(`billing/superbill?pageNumber=${params.pageNumber}&limit=${params.limit}`, {...params, ...customHeaders(token) })
    }

    static async getSuperBillDetailsbyId({params,token }) {
        return await AppDataService.get(`billing/superbill/${params?.id}`, { ...customHeaders(token) })
    }

    static async getPatientPaymentDetails({ params, token }) {
        return await AppDataService.get(`payment`, { params, ...customHeaders(token) })
    }

    static async getPatientList({params, token}) {
        return await AppDataService.get(`billing/patient`, { params, ...customHeaders(token) })
    }
    static async getPatientListAddPayment({params, token}) {
        return await AppDataService.get(`patient`, { params, ...customHeaders(token) })
    }

    static async getServiceLocationDetails({params, token}) {
        return await AppDataService.get(`location/provider?providerId=${params?.providerId}`, { ...customHeaders(token) })
    }

    static async getPlaceOfServiceDetails({params, token}) {
        return await AppDataService.get(`master-data/pos`, { ...customHeaders(token) })
    }

    static async getAllProviderDetails({params, token}) {
        return await AppDataService.get(`provider?status=Active`, { ...customHeaders(token) })
    }

    static async getAllDepartmentDetails({params, token}) {
        return await AppDataService.get(`department`, { ...customHeaders(token) })
    }

    static async getAllICDCodeDetails({params, token}){
        return await AppDataService.get(`master-data/code?type=ICD10Code`, { ...customHeaders(token) })
    }

    static async getAllCPTCodeDetails({params, token}){
        return await AppDataService.get(`master-data/code?type=CPTCode`, { ...customHeaders(token) })
    }

    static async getPatientSuperbillDetails({params, token}) {
        return await AppDataService.get(`payment/patient/unpaid/${params?.patientId}`, { ...customHeaders(token) })
    }
    static async postAddNewPatientPayment({ body, token }) {
        return await AppDataService.post(`payment`, body, customHeaders(token));
    }
    static async patchUpdatePatientPayment({ body, id, token }) {
        return await AppDataService.patch(`payment/${id}`, body, customHeaders(token));
    }


    static async createSuperBillPayment({body, token}){
        return await AppDataService.post(`billing/superbill`,body, { ...customHeaders(token) })
    }

    static async updateSuperBillPayment({body, token, params}){
        return await AppDataService.patch(`billing/superbill/${params?.id}`,body, { ...customHeaders(token) })
    }

    static async createPayment({body, token}){
        return await AppDataService.post(`payment`,body, { ...customHeaders(token) })
    }

    static async createClaimPayment({body, token}){
        return await AppDataService.post(`claim/submit`,body, { ...customHeaders(token) })
    }
    
}