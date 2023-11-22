import StorageExtensionDatabase from "../Database.js";

import Log from "log";

import { ExceptionDatabaseConnection } from "exception";

import mysql from "mysql2/promise";

export default class StorageExtensionDatabaseMysql extends StorageExtensionDatabase {
    static #map = new Map();

    static #open(url, password) {
        let o = StorageExtensionDatabaseMysql.#map.get(url);

        if(!o) {
            o = {
                count: 0,
                pool: mysql.createPool({
                    host: url.hostname,
                    port: parseInt(url.port || 3306),
                    user: url.username,
                    password,
                    database: url.pathname.split("/")[1],
                    connectionLimit: 32
                })
            };
        }

        o.count = o.count + 1;
        StorageExtensionDatabaseMysql.#map.set(url, o);

        return o.pool;
    }

    static #close(url) {
        const o = StorageExtensionDatabaseMysql.#map.get(url);

        if(o) {
            o.count = o.count - 1;

            if(o.count <= 0) {
                StorageExtensionDatabaseMysql.#map.delete(url)
                o.pool.end();
            }
        }

        return null;
    }
    

    #pool = null;

    constructor(url, password){
        super(url, password);

        this.#pool = StorageExtensionDatabaseMysql.#open(this.url, password);
    }

    async call(name, ...args) {
        if(this[name]) {
            return await super.call(name, ...args);
        }

        return await this.query(name, ...args);
    }

    async query(query, ...args) {
        const connection = await this.#pool.getConnection();

        if(connection) {
            try {
                return await connection.execute(query, args[0]);
            } catch(e) {
                throw e;
            } finally {
                connection.release();
            }
        }

        throw new ExceptionDatabaseConnection();
    }

    async close(){ 
        if(this.#pool) {
            this.#pool = await StorageExtensionDatabaseMysql.#close(this.url);
        }
    }
}
