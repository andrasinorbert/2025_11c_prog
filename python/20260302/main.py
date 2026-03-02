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
    
    def insert(self):
        pass
    
