import {defineSchema} from "convex/server";
import {authTables} from "@convex-dev/auth/server";

export const schema = defineSchema({
    ...authTables
});

export default schema;
