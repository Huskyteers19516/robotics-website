import { defineConfig } from "tinacms"

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main"

export default defineConfig({
    branch,

    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: "post",
                label: "Posts",
                path: "content/posts",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
                ui: {
                    // This is an DEMO router. You can remove this to fit your site
                    router: ({ document }) =>
                        `/posts/${document._sys.filename}`,
                },
            },
            {
                label: "Site Settings",
                name: "siteSettings",
                path: "content/settings",
                format: "json",
                fields: [
                    {
                        type: "string",
                        label: "Team Name",
                        name: "teamName",
                    },
                    {
                        type: "number",
                        label: "Team Number",
                        name: "teamNumber",
                    },
                    {
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                label: "Name",
                                name: "name",
                            },
                            {
                                type: "string",
                                label: "Link",
                                name: "link",
                            },
                        ],
                        ui: {
                            // visualSelector: true,
                            itemProps: (item) => {
                                return { label: item?.name }
                            },
                        },
                        label: "Nav Bar Links",
                        name: "navBarLinks",
                        list: true,
                    },
                    {
                        type: "string",
                        label: "Contact Us Text",
                        name: "contactUsText",
                    },
                    {
                        type: "string",
                        label: "Contact Email",
                        name: "email",
                    },
                    {
                        type: "string",
                        label: "Address",
                        name: "address",
                        ui: {
                            component: "textarea",
                        },
                    },
                    {
                        type: "string",
                        label: "Address Link",
                        name: "addressLink",
                    },
                    {
                        type: "string",
                        label: "Quick Links Text",
                        name: "quickLinksText",
                    },
                    {
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                label: "Name",
                                name: "name",
                            },
                            {
                                type: "string",
                                label: "Link",
                                name: "link",
                            },
                        ],
                        ui: {
                            itemProps: (item) => {
                                return { label: item?.name }
                            },
                        },
                        label: "Quick Links",
                        name: "quickLinks",
                        list: true,
                    },
                    {
                        type: "string",
                        label: "Socials Text",
                        name: "socialsText",
                    },
                    {
                        type: "string",
                        label: "Instagram Link",
                        name: "instagram",
                    },
                    {
                        type: "string",
                        label: "YouTube Link",
                        name: "youtube",
                    },
                    {
                        type: "string",
                        label: "Discord Link",
                        name: "discord",
                    },
                    {
                        type: "string",
                        label: "GitHub Link",
                        name: "github",
                    },
                ],
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
            },
        ],
    },
})
