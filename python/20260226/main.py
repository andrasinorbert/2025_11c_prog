import pymysql

from config import db_defaults


def connectDB(_host, _port, _user, _passwd, _dbname):
    return pymysql.connect(
            host=_host,
            port=_port,
            user=_user,
            password=_passwd,
            database=_dbname
        )


def select():    
    db=connectDB(
        db_defaults["DB_HOST"],
        db_defaults["DB_PORT"],
        db_defaults["DB_UNAME"],
        db_defaults["DB_PASSWD"],
        db_defaults["DB_NAME"],
    )

    cursor=db.cursor()
    sql=f"SELECT * FROM szeret;"
    cursor.execute(sql)
    rows =cursor.fetchall()
    db.close()
    
    return rows

l= select()

for i in l:
    print(f"{i[0]}: {i[1]}")