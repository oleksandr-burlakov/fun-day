﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FunDay.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class Addedsaltforuser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "Salt",
                table: "Users",
                type: "bytea",
                maxLength: 16,
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Salt",
                table: "Users");
        }
    }
}
