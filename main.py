import psycopg2

conn = psycopg2.connect(
    host="localhost",
    dbname="CancionesBun",
    user="postgres",
    password="12345678",
    port=1717
)

cur = conn.cursor()
cur.execute("SELECT * FROM canciones;")
rows = cur.fetchall()

for row in rows:
    print(row)

cur.close()
conn.close()
