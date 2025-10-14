namespace _20251013
{

    internal class Program
    {
        enum Nem { FERFI, NO}
        struct Ember
        {
            private int kor;
            public char[] nev;
            public int szulev;
            public Nem neme;

            public void setKor(int kor)
            {
                this.kor = kor;
            }
            public int getKor()
            {
                return this.kor;
            }

            public Ember()
            {
                kor = -1;
                szulev = -1;
                neme = Nem.FERFI;
                nev = new char[] { 'S', 'E', 'N', 'K', 'I' };
            }
            public Ember(int kor, int szulev, Nem neme, char[] nev)
            {
                this.kor = kor;
                this.szulev = szulev;
                this.neme = neme;
                this.nev = nev;
            }

            public void kiir()
            {
                for(int i=0; i < nev.Length; i++)
                {
                    Console.Write(nev[i]);
                }
                Console.WriteLine($"({szulev}): {kor}, {neme}");
            }
        }
        enum Napok { Hetfo=1, Kedd=2, Szerda=3, Csutortok=4, Pentek=5, Szombat=6, Vasarnap=0 }
        static void Main(string[] args)
        {
            /*
            Napok d = Napok.Szerda;
            Console.WriteLine((int)d);

            Napok d2 = Napok.Kedd;
            Console.WriteLine((Napok)((int)d + (int)d2));

            int x;

            do
            {
                Console.Write("Add meg a nap számát (>0): ");
            } while (!int.TryParse(Console.ReadLine(), out x));
            
            Console.WriteLine((Napok)(x % 7+1));
            */

            Ember e=new Ember();
            //e.kor = 5;
            e.setKor(5);

            Console.WriteLine(e.szulev);

            Ember e2= new Ember(5,1990, Nem.FERFI, ['S', 'a', 'n', 'y', 'i']);
            Console.WriteLine(e2.szulev);
            e2.kiir();
        }
    }
}
