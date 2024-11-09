class Project {
    name: string;
    description: string;

    socials: {
        github?: string;
        discord?: string;
        website?: string;
    }

    routes: {
        [key: string]: {
            description: string;
            parameters: {
                [key: string]: {
                    description: string;
                    optional: boolean;
                    default?: string;
                }
            }
        }
    }

    constructor(name: string, description: string, socials: { github?: string, discord?: string, website?: string }, routes: { [key: string]: { description: string, parameters: { [key: string]: { description: string, optional: boolean, default?: string } } } }) {
        this.name = name;
        this.description = description;
        this.socials = socials;
        this.routes = routes;
    }
}

export { Project };