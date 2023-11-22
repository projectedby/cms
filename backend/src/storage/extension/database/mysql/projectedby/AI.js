import { StorageExtensionDatabaseMysql } from "storage";

export default class StorageExtensionDatabaseMysqlProjectedByAI extends StorageExtensionDatabaseMysql {
    constructor(url, password) {
        super(url, password);
    }

    async subscribe(email) {
        const result = await this.query("CALL SP_PROJECTEDBY_AI_SUBSCRIBE(?)", [ email ]);

        if(result[0][0][0].result) return true;

        return false;
    }
}