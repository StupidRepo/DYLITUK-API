import { Router } from "jsr:@oak/oak/router";
import { DOMParser, Element } from "jsr:@b-fuze/deno-dom";
import { Project } from "../types.ts";

interface Sound {
    name: string;
    soundURL: string;
}

const myInstantsRouter = new Router({ prefix: "/myinstants" });

function parseInstants(html: string): Sound[] {
    const sounds: Sound[] = [];

    const doc = new DOMParser().parseFromString(html, "text/html");

    // Grabs buttons
    const elements = doc.querySelectorAll(".instant");

    elements.forEach((element: Element) => {
        // Grabs title
        const title = element.querySelector(".instant-link")!.innerText;

        // Grabs button which has the sound URL (in the onclick attribute)
        const button = element.querySelector(".small-button")!;

        const sound: Sound = {
            name: title,
            soundURL: `https://myinstants.com${button.getAttribute("onclick")!.split("'")[1]}`,
        };

        sounds.push(sound);
    });

    return sounds;
}

myInstantsRouter.get("/trending", async (ctx) => {
    const page = ctx.request.url.searchParams.get("page") || "1";
    const region = ctx.request.url.searchParams.get("region") || "gb";

    const response = await fetch(`https://www.myinstants.com/en/index/${region}/?page=${page}`);
    const html = await response.text();

    const parsedSounds = parseInstants(html);

    ctx.response.body = {
        data: parsedSounds,
        count: parsedSounds.length,
    }
});

myInstantsRouter.get("/search", async (ctx) => {
    const query = ctx.request.url.searchParams.get("query") || "";
    const page = ctx.request.url.searchParams.get("page") || "1";

    const response = await fetch(`https://www.myinstants.com/en/search/?name=${query}&page=${page}`);
    const html = await response.text();

    const parsedSounds = parseInstants(html);

    ctx.response.body = {
        data: parsedSounds,
        count: parsedSounds.length,
    };
});

myInstantsRouter.get("/", (ctx) => {
    ctx.response.body = new Project("MyInstants API", "An API for MyInstants", {
        github: "https://github.com/StupidRepo/MyInstants-API",
    }, {
        "/trending": {
            description: "Get trending sounds",
            parameters: {
                page: {
                    description: "The page number",
                    optional: true,
                    default: "1",
                },
                region: {
                    description: "The region",
                    optional: true,
                    default: "gb",
                },
            }
        },
        "/search": {
            description: "Search for sounds",
            parameters: {
                query: {
                    description: "The query to search for",
                    optional: false,
                },
                page: {
                    description: "The page number",
                    optional: true,
                    default: "1",
                },
            }
        }
    })
});

export { myInstantsRouter };