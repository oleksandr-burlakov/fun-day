namespace FunDay.Persistance.Entities
{
    public class Place
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public long Latitude { get; set; }
        public long Longitude { get; set; }
        public ICollection<Event> Events { get; set; }
    }
}
