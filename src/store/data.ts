interface Data {
    id: number,
    name: string;
    tags: string[];
    key_challenges: string[];
}

let projects: Data[] = [
    {
        "id": 0,
        "name": "Café ordering system",
        "tags": ["Go", "REST", "Authentication", "CI/CD", "Github Actions"],
        "key_challenges": [
            "Ensuring good input validation for the API",
            "Authentication middleware to handle correct access for users and personnel",
            "Adhering to good programming practices to ensure good forward compatability",
            "Ensuring efficient and correct usage of an external database"
        ]
    },
    {
        "id": 1,
        "name": "Recipe creation platform",
        "tags": ["Vue", "Typescript", "SPA", "Cloud", "Firebase", "Authentication"],
        "key_challenges": [
            "Creating a platform that support intuition for recipe creation",
            "Handling client-side caching to pick up editing at a later time",
            "Using visual indicators to guide the user through the process",
        ]
    }
]

export default {
    projects
}