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

    def select(self):    
        db=self.connectDB()
        cursor=db.cursor()
        sql=f"SELECT * FROM szeret;"
        cursor.execute(sql)
        rows =cursor.fetchall()
        db.close()
        
        return rows

db=OwnDataBase()
l= db.select()

for i in l:
    print(f"{i[0]}: {i[1]}")