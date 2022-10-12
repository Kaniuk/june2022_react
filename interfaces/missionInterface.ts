interface ILinks {
    article_link: null | string,
    video_link: string

}

interface IFirst_stage {
    "cores": [
        {
            flight: number,
            core: {
                reuse_count: number,
                status: string
            }
        }
    ];
}

interface ILaunch_site {
    site_name_long: string,
}

interface ISecond_stage {
    payloads: [
        {
            payload_type: string,
            payload_mass_kg: number,
            payload_mass_lbs: number
        }
    ];
}

interface IMission {
    mission_name: string,
    launch_date_local: string,
    launch_site: ILaunch_site,
    links: ILinks,
    rocket: {
        rocket_name: string,
        first_stage: IFirst_stage,
        "second_stage": ISecond_stage
    }
}

export {
    IMission
};
