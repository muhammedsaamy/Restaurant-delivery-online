using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    public partial class deletebasket : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_menuItems_baskets_BasketId",
                table: "menuItems");

            migrationBuilder.DropTable(
                name: "baskets");

            migrationBuilder.DropIndex(
                name: "IX_menuItems_BasketId",
                table: "menuItems");

            migrationBuilder.DropColumn(
                name: "BasketId",
                table: "menuItems");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BasketId",
                table: "menuItems",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "baskets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_baskets", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_menuItems_BasketId",
                table: "menuItems",
                column: "BasketId");

            migrationBuilder.AddForeignKey(
                name: "FK_menuItems_baskets_BasketId",
                table: "menuItems",
                column: "BasketId",
                principalTable: "baskets",
                principalColumn: "Id");
        }
    }
}
