import AppDataService from './AppDataService'
import { customHeaders, headerContentWithAuthorization } from './utils/constants'

let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNLMmN6UXM4bTFPN210OFZZNEx6WmpDTzJnMU1xIiwidHlwIjoiSldUIn0.eyJhbXIiOlsicHdkIl0sImRybiI6IkRTIiwiZXhwIjoxNzExNzg5NzkzLCJpYXQiOjE3MTE2MTY5OTMsImlzcyI6IlAyY3pRcnZHeEhwVVFPNGNQRWhXZ2dYR2lHUXAiLCJyZXhwIjoiMjAyNC0wNC0yNVQwOTowOTo1M1oiLCJyb2xlcyI6WyJhZG1pbiJdLCJzdWIiOiJVMmN6WDJrM0ZaQmVJZnFGTDB2QktSTXFyeWNMIn0.RxfSiI3O2EpUy_OeJL_QazclBymnIBlozlzT4HHWCfAWaeJdXxzkvyHdhNrBtFbZeFgEZ5FsokUB-FdzIQqq-PWBkI-57CrodiGUljHOg8ZUW7vLmWtBr9JIj2boV7z5dM3pd01JtfrgbMk7qibTcdnkzdEl6Rc4sh9QFyswRxwzoujDgbM6WhsReHnuGVfp8K67JZkgU2KTr96AzlCCvk-weBRlITuMbKCFyTYbGZQUa1GbKA_pjHmmk1UKSFOhYeJpuSFeNiuS06uYsqeEg6Hi_Iuc06hG9dYrxIxEZT_rdL99UcVMIlm4C1I6hpNF8-CqFoxfyaDUOLBDj5O_WA"
export default class AuthenticationService {
    static async postLoginApi(body) {
        return await AppDataService.post(`provider/login`, body, headerContentWithAuthorization)
    }
    static async postCreateNewPassword(body) {
        return await AppDataService.post(`provider/create-password`, body, customHeaders(token))
    }
}