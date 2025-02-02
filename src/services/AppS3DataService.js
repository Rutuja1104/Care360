import S3DataService from "./utils/dataservice/S3DataService"

class _AppS3DataService extends S3DataService {
}

const AppS3DataService = new _AppS3DataService()
export default AppS3DataService