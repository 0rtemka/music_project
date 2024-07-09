import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users_roles", function(table) {
        table.integer("user_id").references("users.id");
        table.integer("role_id").references("roles.id");
        table.primary(["user_id", "role_id"]);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("users_roles");
}