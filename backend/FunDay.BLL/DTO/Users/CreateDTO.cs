namespace FunDay.BLL.DTO.Users
{
    public class CreateDTO
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string HashedPassword { get; set; }
        public byte[] Salt { get; set; }
    }
}
