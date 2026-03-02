from OwnDataBase import OwnDataBase

db= OwnDataBase()

rows= db.select("szeret", "*")

for i in rows:
    print(i)
    
r=db.insert("névkor", "Név, Kor", [
        ["Kanga", 15],
        ["Károly", 18]
    ]  )
print(r)

rows= db.select("névkor", "*")

for i in rows:
    print(i)

db.delete("névkor", "Név like 'K%'")

db.printTable("névkor")