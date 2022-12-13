﻿namespace FunDay.Persistance.Entities
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public Guid EventId { get; set; }
        public Event Event { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
