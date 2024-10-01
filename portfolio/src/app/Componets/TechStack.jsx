import React from "react";


const styles = {
    scrollingDiv: {
        animation: 'scroll 20s linear infinite',
    },
    // Keyframes defined directly in the component as a string
    '@keyframes scroll': {
        '0%': {
            transform: 'translateX(0)',
        },
        '100%': {
            transform: 'translateX(-100%)',
        },
    },
};


export const TechStack = () => {



    return (

        <div className="overflow-x-auto w-full relative bg-blue-200 p-4">
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-141%); }
          }
        `}
            </style>
            <div className="w-100 flex space-x-10" style={styles.scrollingDiv}>
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png" alt="Flask" title="Flask" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase" />
                <img class="w-12 object-cover flex-shrink-0" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" alt="Sass" title="Sass" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS" />
                <img class="w-12 object-cover flex-shrink-0" src="https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/268487504-e5fe87f3-f2ee-419d-8299-14dc573f3603.png" alt="Bulma" title="Bulma" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma" />
                <img class="w-12 object-cover flex-shrink-0" src="https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/253220886-02494c7c-de6a-43a6-9293-6369696842ed.png" alt="Canva" title="Canva" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png" alt="Jira" title="Jira" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png" alt="yarn" title="yarn" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest" />
                {/*duplicate*/}
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png" alt="Flask" title="Flask" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png" alt="Firebase" title="Firebase" />
                <img class="w-12 object-cover flex-shrink-0" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" alt="Next.js" title="Next.js" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" alt="Git" title="Git" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png" alt="GitHub" title="GitHub" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png" alt="Postman" title="Postman" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" alt="Sass" title="Sass" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS" />
                <img class="w-12 object-cover flex-shrink-0" src="https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/268487504-e5fe87f3-f2ee-419d-8299-14dc573f3603.png" alt="Bulma" title="Bulma" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma" />
                <img class="w-12 object-cover flex-shrink-0" src="https://github-production-user-asset-6210df.s3.amazonaws.com/136815194/253220886-02494c7c-de6a-43a6-9293-6369696842ed.png" alt="Canva" title="Canva" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png" alt="Jira" title="Jira" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png" alt="yarn" title="yarn" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" />
                <img class="w-12 object-cover flex-shrink-0" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest" />
            </div>
        </div>
    )
}