namespace FunDay.Persistance.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName
        {
            get
            {
                return String.Concat(FirstName, " ", LastName);
            }
        }
        public string PasswordHash { get; set; }
        public string Email { get; set; }
        public byte[] Salt { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
    }
}
