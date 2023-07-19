## Prisma commands
`npx prisma db pull` - Pulls current database and creates a code first schema
`npx prisma generate` - Generates the code that talks to the database


### Creating 
` npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql` - Creates an initial migration
`npx prisma migrate resolve --applied 0_init` - Sets the migreation 0_init as resolved. Meaning no need to reset it