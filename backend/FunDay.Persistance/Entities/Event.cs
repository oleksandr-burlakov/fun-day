namespace FunDay.Persistance.Entities
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid PlaceId { get; set; }
        public Place Place { get; set; }
        public DateTime Time { get; set; }
        public EventType Type { get; set; }
        public decimal? Price { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
    }
}
