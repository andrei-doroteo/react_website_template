<!-- This file contains specifications, conventions, and best practices of this project -->

- Every addition to the codebase must be a self contained module.
- All modules must be testable.
- All modules must have sufficent tests.
- Shared types must be put in a shared file to be imported anywhere these types are used
  

## React Components
- React components must have minmal dependencies on other components. Data will be passed to components. Any data that must be calculated will be calculated before getting passed to a component. The calulcation logic will be in a seperate function named according. 

- Components only in a single page will be contained in a `./components` subdirectory within that page directory
- Any function ONLY for a page will be contained in a `./lib` subdirectory within that page directory
- Any types ONLY for a single page will be contained in a `./types` subdirectory.
- components, types, and/or functions that are shared by more than one page/subdirectory, will be placed at the highest level subdirectory that requires that logic.
- global types, components, and functions are in the ~/src subdirectory where `~` is the path to the root of the project.

## --

Code must be as readable and self documenting as possible
- Everything must have a type (types must be defined sepertaly, not inline. Whether that is in a different file or in the same module, as long as it is not inline.)

# Naming 
Use camelCase for variable and function names.

- Use UPPER_CASE for global constants to clearly indicate immutable compile-time values.
- Use PascalCase for class names and interface names.
- Use camelCase for interface members.
- Use PascalCase for type names and enum names.
- Name files with camelCase (for example, ebsVolumes.tsx or storage.ts)

Ex/
```
// Naming for Variables and functions
const userName = 'john';
function getUserData() { }

// Naming for Global constants
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';

// Naming for Classes and interfaces
class DatabaseConnection { }
interface UserProfile { }

// Naming for Types and enums
type ResponseStatus = 'success' | 'error';
enum HttpStatusCode { }
```

## Data Handling

- All data used in a component will not originate in that component. Either data is passed to that component as props (such as a component within or compontent) or the component will call an imported function that fetches the data (such as a top level component). 