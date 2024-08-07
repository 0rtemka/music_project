import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("roles", function(table) {
        table.increments("id").primary();
        table.string("role").unique();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("roles");
}