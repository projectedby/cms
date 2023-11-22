import Storage from "./Storage.js";
import StorageExtension from "./storage/Extension.js";
import StorageExtensionRest from "./storage/extension/Rest.js";
import StorageExtensionDatabase from "./storage/extension/Database.js";
import StorageExtensionDatabaseMysql from "./storage/extension/database/Mysql.js";

export default Storage;

export {
    StorageExtension,
    StorageExtensionRest,
    StorageExtensionDatabase,
    StorageExtensionDatabaseMysql
}
