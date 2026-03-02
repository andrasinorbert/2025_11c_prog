using MySql.Data.MySqlClient;

namespace _20260302_db
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string connectionString = 
                "server=localhost;user=root;database=2025_11c;port=3306;password=;";

            MySqlConnection connection = new MySqlConnection(connectionString);
            connection.Open();
            string query = "SELECT * FROM névkor;";
            MySqlCommand command = new MySqlCommand(query, connection);
            MySqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                Console.WriteLine(reader[0].ToString());
                Console.WriteLine(reader[1].ToString());
            }
            reader.Close();

        }
    }
}
