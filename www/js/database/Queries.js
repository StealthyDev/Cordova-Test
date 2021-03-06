var queries = {
	manager : {
		CREATE_MANAGER = "CREATE TABLE IF NOT EXISTS SCHEMA (VERSION FLOAT, DATE DATETIME)",
		UPDATE_VERSION = "INSERT INTO SCHEMA (VERSION, DATE) VALUES (?, date('now'));";
		GET_DB_VERSION = "SELECT MAX(VERSION) FROM SCHEMA";
	}
};