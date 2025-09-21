// Import all your schema definitions
import * as users from './users';

// Export all your schema definitions
export * from './users';

export type Schema = typeof schema;

// Merge all your schema definitions
const schema = {
    ...users
};

export default schema;