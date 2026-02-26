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

# szeret(Név, Gyümölcs)
# névkor(Név, Kor)
db=OwnDataBase()
l= db.select("szeret")

for i in l:
    print(f"{i[0]}: {i[1]}")
    
l2=db.select("szeret", "Név")
print(l2)

l3=db.select("szeret", naturaljointable="névkor")
print(type(l3))
for i in l3:
    for j in i:
        print(f"{j}", end=" ")
    print()
    