import store from "@/store";

export default function parseContent(content)
{
    let landing = [];
    let projects = {};
    let bySlug = {};

    for (let i = 0; i < content.length; ++i)
    {
        let temp = content[i].fields;
        let {
            "Vimeo ID":videoID="",
            "Titre":title,
            DOP="",
            "Sur la page d'accueil": onLandingPage,
            Type:type="",
            DIR="",
            slug,
        } = temp;

        onLandingPage = !!onLandingPage;

        if (onLandingPage)
            landing.push({title, DIR, DOP, videoID, slug});

        let project = {title, slug, DIR, DOP, videoID};

        bySlug[slug] = {title, DIR, DOP, videoID};

        if (!type) {
            projects['unclassified'] ?
                projects['unclassified'].push(project) :
                projects['unclassified'] = [project];
        }

        else {
            projects[type] ?
                projects[type].push(project) :
                projects[type] = [project];
        }
    }

    console.log(projects);
    store.commit("setBySlug", bySlug);
    store.commit("setLanding", landing);
    store.commit("setProjects", projects);
}