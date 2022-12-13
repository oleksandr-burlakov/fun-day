using FunDay.Persistance.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FunDay.Persistance.Realization
{
    public class FunDayContext : DbContext
    {
        public FunDayContext(DbContextOptions options)
            : base(options)
        {
        }
        public DbSet<Event> Events { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Place> Places { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>()
                .HasKey(e => e.Id);
            modelBuilder.Entity<Event>()
                .HasOne(e => e.Place)
                .WithMany(p => p.Events)
                .HasForeignKey(e => e.PlaceId);

            modelBuilder.Entity<Place>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Ticket>()
                .HasKey(t => t.Id);
            modelBuilder.Entity<Ticket>()
                .HasOne(t => t.Event)
                .WithMany(e => e.Tickets)
                .HasForeignKey(t => t.EventId);
            modelBuilder.Entity<Ticket>()
                .HasOne(t => t.User)
                .WithMany(u => u.Tickets)
                .HasForeignKey(t => t.UserId);

            modelBuilder.Entity<User>()
                .HasKey(u => u.Id);
            modelBuilder.Entity<User>()
                .Property(u => u.Salt)
                .HasMaxLength(16);
        }

    }
}
