import pymysql

from config import db_defaults

class OwnDataBase:
    def __init__(self):
        self.host=db_defaults["DB_HOST"]
        self.port=db_defaults["DB_PORT"]
        self.username=db_defaults["DB_UNAME"]
        self.password=db_defaults["DB_PASSWD"]
        self.databasename=db_defaults["DB_NAME"]
    
    def connectDB(self):
        return pymysql.connect(
                host=self.host,
                port=self.port,
                user=self.username,
                password=self.password,
                database=self.databasename
            )

    def select(self,  tablanev, oszlopnevek="*", feltetel="1", naturaljointable=None):    
        db=self.connectDB()
        cursor=db.cursor()
        sql=f"SELECT {oszlopnevek} FROM {tablanev}"
        if(naturaljointable!= None): sql+=f" NATURAL JOIN {naturaljointable}"
        sql+=f" WHERE {feltetel};"
        cursor.execute(sql)
        rows =cursor.fetchall()
        db.close()
        
        return rows
    
    def doIt(self, sql):
        db=self.connectDB()
        cursor=db.cursor()
        cursor.execute(sql)
        db.commit()
        db.close()
        
    def insert(self, tablanev, oszlopnevek, erteklista):
        sql=f"INSERT INTO {tablanev}( {oszlopnevek}) VALUES "
        for rekord in erteklista:
            sql+="("
            for item in rekord:
                sql+='"'+str(item)+'"'
                sql+=", "
            sql=sql[:-2]
            sql+="),"
        sql=sql[:-1]
        sql+=";"
        self.doIt(sql)
        return sql
        
    def delete(self, tablanev, feltetel):
        sql=f"DELETE FROM {tablanev} WHERE {feltetel};"
        self.doIt(sql)
        
    def printTable(self, tablanev):
        rows=self.select(tablanev)
        for rekord in rows:
            for item in rekord:
                print(item, end="   \t")
            print()